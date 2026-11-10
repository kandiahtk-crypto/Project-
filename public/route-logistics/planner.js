import {places,route} from './network.js';

export const rules='https://www.gov.uk/guidance/drivers-hours-passenger-vehicles/1-assimilated-and-aetr-rules-on-drivers-hours';
export const parking={
  london:['Park Lane coach parking · check restrictions and alternative bays for your venue','https://tfl.gov.uk/info-for/coach-drivers/'],
  oxford:['Redbridge Park & Ride · use Old Abingdon Road access. City centre set-down is separate','https://www.oxford.gov.uk/parking-oxford/parking-coaches-lorries-mini-buses'],
  bath:['Odd Down Coach Park for layover · use a designated city centre set-down','https://www.bathnes.gov.uk/odd-down-coach-park'],
  edi:['Castle Terrace for set-down · use council-designated bays for parking','https://www.edinburgh.gov.uk/buses-coaches/coach-access-set-pick-locations/2'],
  york:['Check Union Terrace or St George’s Field coach facilities and opening hours','https://visityork.org/visitor-information/coach-and-parking-information'],
  windsor:['Check Windsor Coach Park near Alexandra Gardens','https://www.windsor.gov.uk/visitor-information/parking'],
  stone:['Stonehenge Visitor Centre · confirm group booking and coach arrival','https://www.english-heritage.org.uk/visit/places/stonehenge/plan-your-visit/questions-and-answers/']
};
export function parkingFor(id,kind,notes){
  const city=places[id].name;
  const candidate=parking[id];
  const venue=['Hotel','Restaurant'].includes(kind);
  const query=encodeURIComponent('coach parking '+city);
  const detail=venue?'Confirm venue set-down, bay dimensions, turning access and '+(kind==='Hotel'?'overnight permission. Include hotel-to-coach positioning and a driver room if required.':'legal layover and return pickup.'):'Verify dimensions, access, restrictions and reservation before dispatch.';
  return {label:candidate?.[0]??'Search designated coach parking near '+city, url:candidate?.[1]??'https://www.google.com/maps/search/?api=1&query='+query,detail,notes};
}
export const clock=n=>String(Math.floor((n%1440+1440)%1440/60)).padStart(2,'0')+':'+String((n%60+60)%60).padStart(2,'0');
export const duration=n=>Math.floor(n/60)+'h '+String(n%60).padStart(2,'0')+'m';
const minutes=s=>{const [h,m]=s.split(':').map(Number);return h*60+m;};
const dateAt=(date,i)=>new Date(Date.parse(date+'T00:00:00Z')+86400000*i).toISOString().slice(0,10);

export function plan(t){
  const days=[], warnings=[];
  const warn=(level,text)=>warnings.push({level,text});
  const available=1+Math.round((Date.parse(t.endDate)-Date.parse(t.startDate))/86400000);
  if(!Number.isInteger(available)||available<1||available>60) throw Error('Choose a date range of 1–60 days.');
  const departure=minutes(t.departure);
  const ordinaryStart=minutes(t.dayStart), ordinaryEnd=minutes(t.dayEnd);
  if(ordinaryEnd<=ordinaryStart) throw Error('The standard duty end must be after the duty start.');
  if(available===1 && departure<=minutes(t.arrival)) throw Error('Departure deadline must be after arrival on a one-day tour.');
  if(+t.pax>+t.vehicle) warn('Block','The group exceeds the selected vehicle’s passenger seats.');
  if(+t.pax>=+t.vehicle-2) warn('Review','Confirm luggage capacity and seats for the guide or tour leader.');
  if(+t.vehicle<9) warn('Review','Confirm the rules that apply to the selected small vehicle. This screen uses standard coach limits.');
  if(+t.drivers>1) warn('Review','Extra drivers are recorded for the quote. The schedule still uses single-driver limits and needs an individual roster.');
  if(t.prior==='') warn('Review','Enter prior driving and review the driver’s duty, rest and tachograph records before assigning this tour.');
  warn('Review','Confirm working time, driver relief, depot dead mileage and recent weekly rest before dispatch. Sightseeing, ferry and waiting time are never credited automatically as breaks.');
  let loc=t.start,day;
  const zone=id=>places[id].zone*60;
  function newDay(){
    const index=days.length;
    const start=index===0?minutes(t.arrival)-zone(loc):ordinaryStart-zone(loc);
    day={index,date:dateAt(t.startDate,index),start,zone:zone(loc),cursor:start,drive:0,miles:0,streak:0,rows:[],base:loc,hotel:''};
    days.push(day);
  }
  function cutoff(){
    const end=ordinaryEnd-zone(loc);
    return day.index===available-1 ? Math.min(end,departure-zone(t.end)) : end;
  }
  function add(kind,title,mins,more={}){
    const start=day.cursor;
    day.cursor+=mins;
    day.rows.push({kind,title,start,end:day.cursor,zone:zone(loc),...more});
    day.base=loc;
  }
  function rollover(){
    const previous=day;
    newDay();
    const rest=1440+day.start-previous.cursor;
    previous.rest=rest;
    if(rest<660) warn('Block','Day '+(previous.index+1)+' to '+(day.index+1)+' allows only '+(rest<0?'overlapping duties':duration(rest)+' of rest')+'. Plan at least 11 hours in this schedule.');
  }
  function breaksNeeded(mins){
    if(!mins) return 0;
    return Math.floor((day.streak+mins-1)/270)*45;
  }
  newDay();
  add('Arrival',t.arrivalRef||places[loc].name,+t.arrivalBuffer,{place:loc});
  for(const stop of [...t.stops,{kind:'Departure',name:t.departureRef,place:t.end,mins:+t.departureBuffer}]){
    const path=route(loc,stop.place,t.channel);
    for(const edge of path.legs){
      const road=edge.type==='Road';
      const extra=road?breaksNeeded(edge.mins):edge.buffer;
      if(day.rows.length && (day.cursor+edge.mins+extra>cutoff() || (road&&day.drive+edge.mins>540))) rollover();
      if(road){
        let remaining=edge.mins;
        while(remaining>0){
          if(day.streak===270){
            add('Break','45-minute break · select a legal coach stop',45);
            day.streak=0;
          }
          const piece=Math.min(remaining,270-day.streak);
          remaining-=piece;
          add('Road',places[edge.a].name+' → '+places[edge.b].name+(remaining?' · before break':piece!==edge.mins?' · after break':''),piece,{place:remaining?undefined:edge.b});
          day.streak+=piece;
        }
        day.drive+=edge.mins;
        day.miles+=edge.miles;
        day.rows.at(-1).miles=edge.miles;
      } else {
        add(edge.type,places[edge.a].name+' → '+places[edge.b].name,edge.mins+edge.buffer,{operator:edge.operator,crossing:edge.mins,buffer:edge.buffer,endZone:zone(edge.b)});
        warn('Review',places[edge.a].name+' → '+places[edge.b].name+' '+edge.type.toLowerCase()+' needs a booked coach slot. Replace the planning allowance with confirmed sailing and terminal times.');
      }
      loc=edge.b;
      day.base=loc;
    }
    const mins=Number(stop.mins);
    if(day.rows.length && day.cursor+mins>cutoff() && stop.kind!=='Hotel') rollover();
    if(stop.kind==='Departure'){
      add(stop.kind,stop.name||places[loc].name,mins,{place:loc});
    }else{
      add(stop.kind,stop.name||places[loc].name,mins,{place:loc,notes:stop.notes,parking:parkingFor(loc,stop.kind,stop.parking)});
      if(stop.kind==='Hotel'){
        day.hotel=stop.name||places[loc].name+' hotel area';
        rollover();
      }
    }
  }
  for(const d of days){
    const span=d.cursor-d.start;
    if(d.drive>540) warn('Block','Day '+(d.index+1)+' exceeds 9 hours of planned driving.');
    if(span>780) warn('Block','Day '+(d.index+1)+' has a duty span above 13 hours, leaving too little room for regular daily rest.');
    if(d.cursor>ordinaryEnd-zone(d.base)) warn('Review','Day '+(d.index+1)+' runs past the chosen duty window.');
    if(d.index<days.length-1&&!d.hotel) warn('Review','Day '+(d.index+1)+' needs an overnight hotel and confirmed coach parking near '+places[d.base].name+'.');
  }
  if(days.length>available) warn('Block','The draft needs '+days.length+' days against '+available+' requested. Add '+(days.length-available)+' days, shorten activities, remove a detour or revise the duty window.');
  if(days.length===available && day.cursor>departure-zone(t.end)) warn('Block','The final drop-off buffer extends beyond the departure deadline.');
  if(days.length<available) warn('Info',(available-days.length)+' unallocated day(s). The draft reaches the departure point early. Add overnight or free-time activities to place the final transfer on the booked date.');
  if(days.length>6) warn('Review','Check weekly-rest scheduling and arrange driver relief where required. No weekly rest or derogation has been assumed.');
  const weeks={};
  for(const d of days){
    const dayDate=new Date(d.date+'T00:00Z');
    const monday=dateAt(d.date,-(dayDate.getUTCDay()+6)%7);
    weeks[monday]=(weeks[monday]||0)+d.drive;
  }
  const weekEntries=Object.entries(weeks);
  for(let i=0;i<weekEntries.length;i++){
    const [week,drive]=weekEntries[i];
    const prior=i===0?Number(t.prior)*60:0;
    const prev=i>0?weekEntries[i-1][1]+(i===1?Number(t.prior)*60:0):Number(t.priorWeek)*60;
    if(drive+prior>3360) warn('Block','Week of '+week+' exceeds 56 hours including entered prior driving.');
    if(drive+prior+prev>5400) warn('Block','Two-week driving through '+week+' exceeds 90 hours including entered prior driving.');
  }
  return {days,warnings,available,drive:days.reduce((n,d)=>n+d.drive,0),miles:days.reduce((n,d)=>n+d.miles,0),crossings:days.flatMap(d=>d.rows).filter(row=>row.operator).length};
}
