import {places,route} from './network.js';
import {coordinates} from './coordinates.js';
import {land} from './land.js';
import {images} from './images.js';

const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const crossingPoints={belfast:[-5.895,54.626],dublin:[-6.207,53.349]};
const pin=([x,y])=>[x,Math.log(Math.tan(Math.PI/4+y*Math.PI/360))*180/Math.PI];

export function destinationImage(id,priority=false){
  const photo=images[id],place=places[id];
  if(!photo) return '<figure class="destination-image destination-placeholder"><svg viewBox="0 0 180 100" aria-hidden="true"><path d="M0 89 43 45l25 21 31-42 55 56 26-19v39H0z" fill="#b8ccb3"/><path d="M0 100V82l46-17 31 15 40-24 63 35v9z" fill="#637f6b"/><circle cx="144" cy="25" r="11" fill="#e4bf6e"/></svg><figcaption>'+escape(place.name)+' · illustration</figcaption></figure>';
  const credit=[photo.artist,photo.license].filter(Boolean).join(' · ');
  return '<figure class="destination-image"><img '+(priority?'':'loading="lazy"')+' decoding="async" src="'+escape(photo.image)+'" alt="'+escape(photo.label)+'"><figcaption><a href="'+escape(photo.credit)+'" target="_blank" rel="noopener">'+escape(credit||'Photo credit')+'</a>'+(photo.licenseUrl?' · <a href="'+escape(photo.licenseUrl)+'" target="_blank" rel="noopener">Licence</a>':'')+' · resized</figcaption></figure>';
}

export function renderRouteMap(t){
  const selected=[t.start,...t.stops.map(s=>s.place),t.end].filter((id,i,a)=>i===0||id!==a[i-1]);
  const legs=[];
  const sequence=[{id:t.start,type:'Start'}];
  for(const [i,id] of selected.slice(1).entries()){
    const segment=route(selected[i],id,t.channel).legs;
    legs.push(...segment);
    for(const leg of segment.filter(e=>e.type!=='Road')){
      sequence.push({id:leg.a,type:leg.type+' departure',crossing:true},{id:leg.b,type:leg.type+' arrival',crossing:true});
    }
    sequence.push({id,type:'Stop'});
  }
  const compact=sequence.filter((s,i,a)=>!(i&&a[i-1].id===s.id&&a[i-1].crossing===s.crossing));
  const markers=new Map();
  compact.forEach((s,i)=>{
    const key=s.id+(s.crossing&&crossingPoints[s.id]?'/port':'');
    if(!markers.has(key)) markers.set(key,{...s,key,numbers:[]});
    markers.get(key).numbers.push(i+1);
  });
  const pts=[...new Set([t.start,...legs.flatMap(l=>[l.a,l.b])])].map(id=>pin(coordinates[id]));
  for(const leg of legs.filter(e=>e.type!=='Road')) pts.push(...[leg.a,leg.b].map(id=>pin(crossingPoints[id]??coordinates[id])));
  const minX=Math.min(...pts.map(p=>p[0])),maxX=Math.max(...pts.map(p=>p[0]));
  const minY=Math.min(...pts.map(p=>p[1])),maxY=Math.max(...pts.map(p=>p[1]));
  const width=640,height=415;
  const scale=Math.min((width-92)/Math.max(maxX-minX,0.65),(height-86)/Math.max(maxY-minY,0.65));
  const xy=point=>{
    const [x,y]=pin(point);
    return [width/2+(x-(minX+maxX)/2)*scale,height/2-(y-(minY+maxY)/2)*scale].map(n=>n.toFixed(1));
  };
  const coast=land.map(ring=>'<path d="M'+ring.map(p=>xy(p).join(',')).join('L')+'Z"/>').join('');
  const lines=legs.map(l=>{
    const crossing=l.type!=='Road';
    const points=crossing?[coordinates[l.a],crossingPoints[l.a]??coordinates[l.a],crossingPoints[l.b]??coordinates[l.b],coordinates[l.b]]:[coordinates[l.a],coordinates[l.b]];
    const styles=crossing?['road',l.type.toLowerCase(),'road']:['road'];
    return styles.map((style,i)=>'<path class="map-'+style+'" d="M'+xy(points[i]).join(',')+'L'+xy(points[i+1]).join(',')+'"/>').join('');
  }).join('');
  const pins=[...markers.values()].map(s=>{
    const [x,y]=xy(s.key.endsWith('/port')?crossingPoints[s.id]:coordinates[s.id]);
    return '<g class="map-pin" role="button" tabindex="0" data-map-key="'+s.key+'" aria-label="'+escape(s.numbers.join(', ')+' · '+places[s.id].name)+'" transform="translate('+x+' '+y+')"><circle r="13"/><text y="4" text-anchor="middle">'+s.numbers[0]+'</text></g>';
  }).join('');
  const names=compact.map((s,i)=>'<li><button type="button" data-map-key="'+s.id+(s.crossing&&crossingPoints[s.id]?'/port':'')+'"><b>'+(i+1)+'</b> '+escape(places[s.id].name)+(s.crossing?' · '+escape(s.type):'')+'</button></li>').join('');
  return '<section class="card route-map"><h3>Route map</h3><p class="muted">Numbered stops and crossing ports. Lines connect planning waypoints. Confirm the exact coach route before travel.</p><svg class="map-canvas" viewBox="0 0 '+width+' '+height+'" role="group" aria-label="Interactive route map"><g class="map-land">'+coast+'</g><g class="map-legs">'+lines+'</g>'+pins+'</svg><p class="map-legend"><span>━ Road</span><span>┄ Ferry</span><span>··· Tunnel</span> <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth basemap</a></p><ol class="map-sequence">'+names+'</ol><div class="map-detail" id="map-detail" aria-live="polite"></div></section>';
}

export function activateRouteMap(root){
  const map=root.querySelector('.route-map');
  if(!map) return;
  const show=target=>{
    if(!target) return;
    const key=target.dataset.mapKey,id=key.split('/')[0];
    for(const item of map.querySelectorAll('[data-map-key]')) item.setAttribute('aria-pressed',String(item.dataset.mapKey===key));
    map.querySelector('#map-detail').innerHTML=destinationImage(id,true)+'<div><strong>'+escape(places[id].name)+(key.endsWith('/port')?' · ferry port area':'')+'</strong><p class="muted">'+escape(places[id].region)+'</p></div>';
  };
  map.addEventListener('click',e=>show(e.target.closest('[data-map-key]')));
  map.addEventListener('keydown',e=>{
    if(e.target.tagName.toLowerCase()==='g' && ['Enter',' '].includes(e.key)){
      e.preventDefault();
      show(e.target);
    }
  });
  show(map.querySelector('.map-sequence button'));
}
