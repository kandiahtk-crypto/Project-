const regions = {
  'England · South': 'lhr:Heathrow Airport,london:London,lgw:Gatwick Airport,stn:Stansted Airport,oxford:Oxford,windsor:Windsor,bicester:Bicester Village,bourton:Bourton-on-the-Water,stone:Stonehenge,bath:Bath,bristol:Bristol,southampton:Southampton cruise terminals,portsmouth:Portsmouth,brighton:Brighton,dover:Dover port,folk:Folkestone tunnel terminal,canterbury:Canterbury',
  'England · Midlands & North': 'cambridge:Cambridge,stratford:Stratford-upon-Avon,bham:Birmingham,man:Manchester,manap:Manchester Airport,liv:Liverpool,york:York,leeds:Leeds,windermere:Windermere,newcastle:Newcastle,durham:Durham,carlisle:Carlisle',
  'Scotland': 'edi:Edinburgh,ediap:Edinburgh Airport,glasgow:Glasgow,stirling:Stirling,standrews:St Andrews,pitlochry:Pitlochry,inverness:Inverness,lochness:Loch Ness,glencoe:Glencoe,fort:Fort William,skye:Portree · Isle of Skye,cairnryan:Cairnryan port',
  'Wales': 'cardiff:Cardiff,swansea:Swansea,conwy:Conwy,holyhead:Holyhead port',
  'Northern Ireland': 'belfast:Belfast,bfs:Belfast International Airport,giants:Giant’s Causeway,derry:Derry / Londonderry',
  'Republic of Ireland': 'dublin:Dublin,dubap:Dublin Airport,galway:Galway,cliffs:Cliffs of Moher,sligo:Sligo,limerick:Limerick,killarney:Killarney,blarney:Blarney Castle,cork:Cork,cashel:Rock of Cashel,kilkenny:Kilkenny,kildare:Kildare Village',
  'Continental Europe': 'calais:Calais port,coquelles:Coquelles tunnel terminal,lille:Lille,paris:Paris,bruges:Bruges,brussels:Brussels,ghent:Ghent,amsterdam:Amsterdam,rotterdam:Rotterdam'
};
export const places = Object.fromEntries(Object.entries(regions).flatMap(([region, list]) => list.split(',').map(item => {
  const [id, name] = item.split(':');
  return [id, {name, region, zone: region === 'Continental Europe' ? 1 : 0}];
})));
const roads = `
lhr london 18 65;lhr windsor 12 30;lhr lgw 40 65;lhr oxford 48 70;lhr stn 65 95;lhr southampton 67 95;
london lgw 31 70;london stn 38 75;london cambridge 62 105;london dover 80 125;london oxford 60 105;london brighton 54 115;
stn cambridge 31 50;lgw brighton 29 50;lgw folk 66 95;folk dover 9 25;dover canterbury 18 40;canterbury london 63 100;
southampton portsmouth 22 40;portsmouth brighton 50 80;southampton stone 36 65;stone bath 36 65;stone windsor 70 110;bath bristol 14 45;
oxford bicester 15 35;oxford bourton 30 55;bourton bath 55 100;bourton stratford 28 55;bicester bham 66 95;stratford bham 29 55;
bristol cardiff 44 70;cardiff swansea 42 65;cardiff conwy 145 255;bristol bham 89 125;
bham cambridge 99 135;bham man 87 130;bham manap 81 115;bham liv 100 140;bham leeds 119 165;
cambridge york 155 205;man manap 10 30;man liv 36 60;man leeds 44 75;leeds york 26 50;
liv conwy 58 90;conwy holyhead 46 65;liv windermere 87 130;man windermere 84 130;windermere carlisle 50 80;
york durham 68 100;durham newcastle 19 40;newcastle edi 121 175;newcastle carlisle 59 90;
carlisle glasgow 97 145;carlisle edi 101 155;carlisle cairnryan 99 155;glasgow cairnryan 83 135;
edi ediap 9 35;edi glasgow 47 80;edi stirling 40 65;glasgow stirling 28 50;edi standrews 52 90;
stirling pitlochry 59 95;standrews pitlochry 60 105;pitlochry inverness 86 135;inverness lochness 17 35;lochness fort 51 85;inverness skye 115 185;
fort glencoe 17 35;glencoe glasgow 91 155;fort skye 109 175;stirling glencoe 81 140;
belfast bfs 19 40;belfast giants 61 100;giants derry 40 70;derry belfast 71 110;derry sligo 93 150;
belfast dubap 98 130;dubap dublin 8 35;dublin galway 129 165;sligo galway 86 135;dublin kildare 32 55;kildare kilkenny 49 75;
galway cliffs 49 90;cliffs limerick 49 90;galway limerick 64 95;limerick killarney 69 115;killarney blarney 53 90;blarney cork 6 25;
cork cashel 61 90;cashel limerick 38 65;cashel kilkenny 40 70;kilkenny dublin 80 115;
calais coquelles 6 20;calais lille 68 105;calais paris 181 240;lille paris 140 195;lille bruges 48 75;lille brussels 70 105;
bruges ghent 32 55;ghent brussels 36 65;ghent rotterdam 108 155;brussels rotterdam 89 135;rotterdam amsterdam 50 85
`;
export const operators = {
 'Irish Ferries': 'https://www.irishferries.com/',
 'Stena Line': 'https://www.stenaline.co.uk/routes/cairnryan-belfast',
 'LeShuttle': 'https://www.leshuttle.com/'
};
const crossings = [
 ['holyhead','dublin',0,210,'Ferry','Irish Ferries',120],
 ['cairnryan','belfast',0,135,'Ferry','Stena Line',105],
 ['dover','calais',0,90,'Ferry','Irish Ferries',120],
 ['folk','coquelles',0,35,'Tunnel','LeShuttle',120]
];
const graph = Object.fromEntries(Object.keys(places).map(id => [id, []]));
const edges = roads.trim().split(';').filter(s=>s.trim()).map(s => {
  const [a,b,miles,mins] = s.trim().split(' ');
  return [a,b,+miles,+mins];
}).concat(crossings);
for(const [a,b,miles,mins,type='Road',operator='',buffer=0] of edges){
  graph[a].push({a,b,miles,mins,type,operator,buffer});
  graph[b].push({a:b,b:a,miles,mins,type,operator,buffer});
}
const cache = new Map();
export function route(start,end,channel='auto'){
  const key = [start,end,channel].join('/');
  if(cache.has(key)) return cache.get(key);
  const dist = {[start]:0}, prev = {}, unseen = new Set(Object.keys(places));
  while(unseen.size){
    let current, best=Infinity;
    for(const id of unseen) if(dist[id]<best){current=id;best=dist[id];}
    if(!current || current===end) break;
    unseen.delete(current);
    for(const edge of graph[current]){
      if(!unseen.has(edge.b)) continue;
      const isChannel = ['calais','coquelles','dover','folk'].includes(edge.a);
      if(isChannel && channel!=='auto' && edge.type!=='Road' && edge.type!==channel) continue;
      const score=best+edge.mins+edge.buffer;
      if(score<(dist[edge.b]??Infinity)){dist[edge.b]=score;prev[edge.b]=edge;}
    }
  }
  if(!Number.isFinite(dist[end])) return null;
  const legs=[];
  for(let id=end; id!==start; id=prev[id].a) legs.unshift(prev[id]);
  const result = {legs, mins:dist[end], miles:legs.reduce((sum,e)=>sum+e.miles,0)};
  cache.set(key,result);
  return result;
}
export function optimise(stops,start,end,channel){
  const result = stops.slice();
  const score = list => {
    const chain=[start,...list.map(s=>s.place),end];
    return chain.slice(1).reduce((n,id,i)=>n+route(chain[i],id,channel).mins,0);
  };
  // Reorder only adjacent runs of movable activities. Fixed stops stay in sequence.
  for(let pass=0;pass<5;pass++){
    let changed=false;
    for(let i=0;i<result.length;i++){
      if(result[i].locked || result[i].kind==='Hotel') continue;
      for(let j=i+1;j<result.length;j++){
        if(result[j].locked || result[j].kind==='Hotel') break;
        const alt=[...result.slice(0,i),...result.slice(i,j+1).reverse(),...result.slice(j+1)];
        if(score(alt)<score(result)){result.splice(0,result.length,...alt);changed=true;}
      }
    }
    if(!changed) break;
  }
  return result;
}
