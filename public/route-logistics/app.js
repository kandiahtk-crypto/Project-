import {destinationImage,renderRouteMap,activateRouteMap} from './visuals.js';
import {places,optimise,operators} from './network.js';
import {plan,clock,duration,rules,parkingFor} from './planner.js';

const $=id=>document.getElementById(id);
const editor=$('editor');
const kinds=[...$('kind').options].map(option=>option.value);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link=(url,label)=>'<a target="_blank" rel="noopener" href="'+esc(url)+'">'+esc(label)+'</a>';
const options=Object.entries(Object.groupBy(Object.entries(places),([,p])=>p.region)).map(([region,list])=>'<optgroup label="'+esc(region)+'">'+list.map(([id,p])=>'<option value="'+id+'">'+esc(p.name)+'</option>').join('')+'</optgroup>').join('');
for(const select of document.querySelectorAll('.places')) select.innerHTML=options;
const key='ukigt-tours-v1', draftKey='ukigt-draft-v1';
function readStorage(name,fallback){
  try{return JSON.parse(localStorage.getItem(name))??fallback;}catch{return fallback;}
}
function writeStorage(name,data){
  try{localStorage.setItem(name,JSON.stringify(data));return true;}
  catch{notice('Browser storage is unavailable or full. Export a tour file to keep your work.');return false;}
}
let saved=readStorage(key,[]);
let tourId,stops=[],current,dirty=false,noticeTimer;
function notice(message){
  $('toast').textContent=message;
  clearTimeout(noticeTimer);
  noticeTimer=setTimeout(()=>$('toast').textContent='',4500);
}
function today(offset){
  const date=new Date();
  date.setDate(date.getDate()+offset);
  return new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/London',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
}
function example(){
  return {title:'England & Scotland discovery',startDate:today(7),endDate:today(13),start:'lhr',end:'ediap',arrival:'09:00',departure:'15:00',arrivalRef:'Heathrow terminal pickup · terminal TBC',departureRef:'Edinburgh Airport · group departure',arrivalBuffer:60,departureBuffer:60,pax:21,vehicle:'29',drivers:'1',room:'Required',channel:'auto',dayStart:'08:30',dayEnd:'18:30',prior:'',priorWeek:'',notes:'20 guests + 1 tour leader. Quote driver room, meals, coach parking and airport positioning separately.',stops:[
    ['windsor','Sightseeing','Windsor Castle area',120],['london','Hotel','London hotel · TBC',30],
    ['london','Free time','Westminster and free time',240],['london','Hotel','London hotel · TBC',25],
    ['oxford','Sightseeing','Oxford colleges',100],['bicester','Shopping','Bicester Village',120],['bham','Hotel','Birmingham hotel · TBC',30],
    ['york','Sightseeing','York Minster and old town',150],['york','Restaurant','Group dinner · venue TBC',90],['york','Hotel','York hotel · TBC',30],
    ['durham','Sightseeing','Durham city centre',100],['newcastle','Hotel','Newcastle hotel · TBC',30],
    ['edi','Sightseeing','Royal Mile and Castle area',180],['edi','Hotel','Edinburgh hotel · TBC',30]
  ].map(([place,kind,name,mins])=>({place,kind,name,mins,locked:false,notes:'',parking:''}))};
}
function collect(){return {id:tourId,...Object.fromEntries(new FormData(editor)),stops};}
function renderStops(open=-1){
  $('stops').innerHTML=stops.map((s,i)=>'<details class="stop" '+(i===open?'open':'')+' data-index="'+i+'"><summary>'+String(i+1).padStart(2,'0')+' · '+esc(places[s.place].name)+' · '+esc(s.kind)+'</summary><div class="stop-fields"><label class="wide">Destination<select data-field="place">'+options+'</select></label><label>Activity<select data-field="kind">'+kinds.map(k=>'<option>'+k+'</option>').join('')+'</select></label><label>Stop time (min)<input type="number" min="0" max="720" required data-field="mins" value="'+esc(s.mins)+'"></label><label class="wide">Venue / stop name<input data-field="name" value="'+esc(s.name)+'" placeholder="Hotel, restaurant or attraction"></label><label class="wide">Address / stop instructions<input data-field="notes" value="'+esc(s.notes)+'" placeholder="Full address, booking reference, pickup point"></label><label class="wide">Parking / set-down plan<input data-field="parking" value="'+esc(s.parking)+'" placeholder="Bay, restrictions or booking reference"></label><label class="wide"><span><input type="checkbox" data-field="locked" '+(s.locked?'checked':'')+'> Keep fixed during optimisation</span></label></div><div class="stop-buttons"><button type="button" data-action="-1" '+(!i?'disabled':'')+'>↑ Move up</button><button type="button" data-action="1" '+(i===stops.length-1?'disabled':'')+'>↓ Move down</button><button type="button" data-action="remove">Remove</button></div></details>').join('');
  [...$('stops').children].forEach((item,i)=>{
    item.querySelector('[data-field="place"]').value=stops[i].place;
    item.querySelector('[data-field="kind"]').value=stops[i].kind;
  });
}
function markDirty(){
  dirty=true;
  const banner=$('stale');
  if(banner) banner.hidden=false;
  writeStorage(draftKey,collect());
}
function loadTour(data,copy=false){
  tourId=copy?crypto.randomUUID():data.id??crypto.randomUUID();
  stops=structuredClone(data.stops);
  const defaults=example();
  for(const control of editor.elements){
    if(control.name) control.value=data[control.name]??defaults[control.name]??'';
  }
  if(copy && data.id) editor.elements.namedItem('title').value+=' (copy)';
  renderStops();
  generate();
}
function valid(){
  const invalid=editor.querySelector(':invalid');
  if(invalid){
    const details=invalid.closest('details');
    if(details) details.open=true;
    editor.reportValidity();
    return false;
  }
  return true;
}
function generate(opt=false,scroll=false){
  if(!valid()) return;
  const t=collect();
  try{
    if(opt) t.stops=optimise(stops,t.start,t.end,t.channel);
    const result=plan(t);
    if(opt){stops=t.stops;renderStops();}
    current={t:structuredClone(t),...result};
    dirty=false;
    render();
    writeStorage(draftKey,t);
    if(scroll && matchMedia('(max-width:840px)').matches) $('results').scrollIntoView({behavior:'smooth'});
  }catch(error){notice(error.message);}
}
function scheduleTime(row){
  const endZone=row.endZone??row.zone;
  return clock(row.start+row.zone)+'–'+clock(row.end+endZone)+(row.zone!==endZone?' local':'')+(row.end+endZone>=1440?' +1 day':'');
}
function parkingText(row){
  if(row.parking || !row.place || row.kind==='Road') return row.parking;
  return parkingFor(row.place,row.kind,'');
}
function render(){
  const {t,days,warnings,available,drive,miles,crossings}=current;
  const blocks=warnings.filter(w=>w.level==='Block').length;
  $('results').innerHTML='<div class="stale" id="stale" hidden>Inputs changed. Generate again to refresh the itinerary and export.</div><section class="card result-head"><div class="eyebrow">OPERATIONAL DRAFT · '+esc(t.startDate)+' TO '+esc(t.endDate)+'</div><h2>'+esc(t.title)+'</h2><p class="muted">'+esc(places[t.start].name)+' → '+esc(places[t.end].name)+' · '+esc(t.pax)+' passengers · '+esc(t.vehicle)+' seats · '+esc(t.drivers)+' driver(s)</p><div class="metrics">'+[[days.length+' / '+available,'Draft / requested days'],['~'+miles.toLocaleString('en-GB'),'Road miles'],[duration(drive),'Driving estimate'],[crossings,'Sea / tunnel legs']].map(([n,label])=>'<div class="metric"><b>'+n+'</b><span>'+label+'</span></div>').join('')+'</div><div class="toolbar"><button id="print" class="primary">Print / PDF</button><button id="quote">Download quote brief</button><button id="expand">Expand all days</button></div></section>'+
  '<details class="card warnings" open><summary><span class="status '+(blocks?'block':'review')+'">'+(blocks?blocks+' blocking issue(s)':'Operator review required')+'</span> &nbsp; Planning checks</summary><ul>'+warnings.slice().sort((a,b)=>(a.level==='Block'?-1:0)-(b.level==='Block'?-1:0)).map(w=>'<li><strong>'+w.level+'</strong> · '+esc(w.text)+'</li>').join('')+'</ul><p class="muted">Road legs are indicative corridor estimates. Confirm route, traffic, vehicle access, positioning and bookings. '+link(rules,'DVSA driver-hours guidance')+'</p></details>'+
  '<section class="card"><h3>Quote requirements</h3><p class="muted">Driver room: '+esc(t.room)+' · '+esc(t.drivers)+' driver(s)</p><p class="muted">'+esc(t.notes)+'</p><p class="muted">Price separately: vehicle and crew, depot positioning, crossings, coach parking, tolls and zone charges, driver accommodation and meals.</p></section>'+
  renderRouteMap(t)+
  days.map((d,i)=>'<details class="card day" '+(i===0?'open':'')+'><summary><span class="day-head"><b>DAY '+String(i+1).padStart(2,'0')+'</b> '+d.date+' · '+esc(places[d.base].name)+(i>=available?' · outside booked dates':'')+'</span></summary><div class="chips"><span class="chip">'+duration(d.drive)+' driving</span><span class="chip">~'+d.miles+' mi</span><span class="chip">'+duration(d.cursor-d.start)+' duty span</span>'+(d.rest!==undefined?'<span class="chip">'+(d.rest<0?'Overlapping duty':duration(d.rest)+' to next duty')+'</span>':'')+'</div>'+
  (i<days.length-1?'<p class="muted">Overnight · '+esc(d.hotel||'Hotel to confirm')+' · '+link(parkingFor(d.base,'Hotel','').url,'Area coach parking')+'</p>':'')+
  '<ol class="rows">'+d.rows.map(row=>{
    const p=parkingText(row);
    const image=row.place && row.kind!=='Road'?destinationImage(row.place):'';
    return '<li class="row"><time>'+scheduleTime(row)+'</time><div><span class="kind">'+esc(row.kind)+'</span><strong>'+esc(row.title)+'</strong>'+(row.miles?'<p>~'+row.miles+' mi corridor leg</p>':'')+
    (row.operator?'<p>'+link(operators[row.operator],row.operator)+' · '+duration(row.crossing)+' crossing + '+duration(row.buffer)+' terminal allowance</p>':'')+
    (row.notes?'<p>'+esc(row.notes)+'</p>':'')+image+(p?'<div class="parking"><p>'+link(p.url,p.label)+'</p><p>'+esc(p.detail)+'</p>'+(p.notes?'<p><strong>Entered parking plan</strong> '+esc(p.notes)+'</p>':'')+'</div>':'')+'</div></li>';
  }).join('')+'</ol></details>').join('');
  activateRouteMap($('results'));
  $('print').onclick=()=>{if(fresh()){expandDays();window.print();}};
  $('quote').onclick=exportQuote;
  $('expand').onclick=expandDays;
}
function fresh(){
  if(!dirty) return true;
  notice('Generate the itinerary again before exporting.');
  return false;
}
function expandDays(){document.querySelectorAll('.day').forEach(d=>d.open=true);}
function download(name,content,type){
  const url=URL.createObjectURL(new Blob([content],{type}));
  const a=document.createElement('a');a.href=url;a.download=name;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function exportQuote(){
  if(!fresh()) return;
  const {t,days,warnings,available,miles,drive,crossings}=current;
  const lines=['UK INBOUND GROUND TRANSPORT','QUOTE REQUEST / OPERATIONS DRAFT',t.title,t.startDate+' to '+t.endDate,
    places[t.start].name+' → '+places[t.end].name,t.pax+' passengers | '+t.vehicle+' seats | '+t.drivers+' requested driver(s) | Driver room: '+t.room,
    days.length+' draft / '+available+' requested days | ~'+miles+' road mi | '+duration(drive)+' driving | '+crossings+' crossings',
    'Duty window: '+t.dayStart+'–'+t.dayEnd+' | Arrival: '+t.arrival+' | Departure deadline: '+t.departure,
    'Prior driving this week: '+(t.prior||'unknown')+' h | Previous week: '+(t.priorWeek||'unknown')+' h',
    '', 'Quote line items: vehicle, drivers, depot positioning, ferries/tunnel, parking, tolls and zones, driver room and meals.',t.notes,
    '', 'PLANNING CHECKS',...warnings.map(w=>w.level+' · '+w.text),
    'Draft estimates only. Operator must verify routes, parking, sailing and driver duty. '+rules];
  for(const d of days){
    lines.push('', 'DAY '+(d.index+1)+' · '+d.date+(d.index>=available?' · outside booked dates':'')+' · '+places[d.base].name,'Driving '+duration(d.drive)+' | ~'+d.miles+' mi | Duty span '+duration(d.cursor-d.start)+(d.rest!==undefined?' | Rest to next duty '+(d.rest<0?'overlap':duration(d.rest)):''));
    for(const r of d.rows){
      lines.push(scheduleTime(r)+' | '+r.kind+' | '+r.title+(r.miles?' | ~'+r.miles+' mi':''));
      if(r.operator) lines.push('  '+r.operator+' | crossing '+duration(r.crossing)+' | terminal '+duration(r.buffer)+' | '+operators[r.operator]);
      if(r.notes) lines.push('  '+r.notes);
      const p=parkingText(r);
      if(p) lines.push('  Parking: '+p.label+' | '+p.url,'  '+p.detail+(p.notes?' Entered plan: '+p.notes:''));
    }
    if(d.index<days.length-1) lines.push('Overnight: '+(d.hotel||'Hotel to confirm')+' · '+places[d.base].name);
  }
  download('UKIGT-quote-brief.txt',lines.join('\n'),'text/plain;charset=utf-8');
}
function refreshSaved(){
  $('saved').replaceChildren(new Option('Choose a saved tour',''),...saved.map(t=>new Option(t.title,t.id)));
  if(saved.some(t=>t.id===tourId)) $('saved').value=tourId;
}
editor.addEventListener('input',event=>{
  const field=event.target.dataset.field;
  if(field){
    const stop=stops[Number(event.target.closest('.stop').dataset.index)];
    stop[field]=event.target.type==='checkbox'?event.target.checked:event.target.value;
    const panel=event.target.closest('.stop');
    panel.querySelector('summary').textContent=String(Number(panel.dataset.index)+1).padStart(2,'0')+' · '+places[stop.place].name+' · '+stop.kind;
  }
  if(field || event.target.name) markDirty();
});
editor.addEventListener('invalid',event=>{const details=event.target.closest('details');if(details) details.open=true;},true);
editor.onsubmit=e=>{e.preventDefault();generate(false,true);};
$('optimise').onclick=()=>generate(true,true);
$('add').onclick=()=>{
  if(stops.length>=40){notice('This planner supports up to 40 activity stops.');return;}
  const kind=$('kind').value;
  stops.push({kind,place:$('place').value,mins:{Hotel:30,Restaurant:90,Transfer:20}[kind]??120,name:'',notes:'',parking:'',locked:false});
  renderStops(stops.length-1);markDirty();
};
$('stops').onclick=e=>{
  const action=e.target.dataset.action;
  if(!action) return;
  const i=Number(e.target.closest('.stop').dataset.index);
  const next=i+Number(action);
  if(action==='remove') stops.splice(i,1);
  else if(next>=0 && next<stops.length) [stops[i],stops[next]]=[stops[next],stops[i]];
  renderStops(next);markDirty();
};
$('save').onclick=()=>{
  if(!valid()) return;
  const t=collect();
  const next=[structuredClone(t),...saved.filter(s=>s.id!==t.id)];
  if(writeStorage(key,next)){saved=next;refreshSaved();notice('Tour saved in this browser.');}
};
function openSaved(copy){
  const t=saved.find(s=>s.id===$('saved').value);
  if(!t){notice('Choose a saved tour first.');return;}
  if(dirty&&!confirm('Replace the current draft? Save or export it first if you want to keep it.')) return;
  loadTour(t,copy);refreshSaved();
}
$('load').onclick=()=>openSaved(false);
$('copy').onclick=()=>openSaved(true);
$('sample').onclick=()=>{
  if(dirty&&!confirm('Replace the current draft with the example?')) return;
  loadTour(example());refreshSaved();
};
$('download-tour').onclick=()=>download('UKIGT-tour.json',JSON.stringify({format:'UKIGT-tour-v1',tour:collect()},null,2),'application/json');
$('import').onchange=async e=>{
  const file=e.target.files[0];e.target.value='';
  if(!file) return;
  try{
    if(file.size>1000000) throw Error();
    const {format,tour}=JSON.parse(await file.text());
    if(format!=='UKIGT-tour-v1'||!Object.hasOwn(places,tour.start)||!Object.hasOwn(places,tour.end)||!Array.isArray(tour.stops)||tour.stops.length>40||
       tour.stops.some(s=>!s||!Object.hasOwn(places,s.place)||!kinds.includes(s.kind)||!Number.isInteger(Number(s.mins))||Number(s.mins)<0||Number(s.mins)>720)) throw Error();
    if(dirty&&!confirm('Replace the current draft with this tour?')) return;
    loadTour(tour,true);refreshSaved();notice('Tour imported. Save it to add it to your library.');
  }catch{notice('Choose a valid UKIGT tour JSON file.');}
};
loadTour(readStorage(draftKey,example()));
refreshSaved();

// Keep the public UKIGT page sized to the planner as stops and results expand.
if(window.parent!==window){
  const reportHeight=()=>{
    window.parent.postMessage({
      type:'ukigt-planner-height',
      height:Math.ceil(document.querySelector('footer').getBoundingClientRect().bottom+window.scrollY)
    },window.location.origin);
  };
  const observer=new ResizeObserver(reportHeight);
  observer.observe(document.body);
  reportHeight();
}
