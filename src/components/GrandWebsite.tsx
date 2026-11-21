"use client";
import {useEffect,useRef,type ReactNode} from "react";
import pageData from "./GrandPages.json";
const pages=pageData as Record<string,{html:string;title:string;description:string}>;
const home=pages["/"].html;
const before=home.slice(0,home.indexOf('<main id="main">'));
const after=home.slice(home.lastIndexOf('</main>')+7);
function addShoreExcursionsLink(html: string, currentPath: string) {
 const shorePath = "/private-cruise-shore-excursions";
 const current = currentPath === shorePath ? ' aria-current="page"' : "";
 const link = '<a href="' + shorePath + '/"' + current + '>Shore excursions</a>';
 return html.replace(/(<nav aria-label="(?:Main|Mobile) navigation"[^>]*>)(<a href="\/services\/"[^>]*>Services<\/a>)/g, "$1$2" + link);
}
export default function GrandWebsite({path,children}:{path:string;children:ReactNode}){
 const host=useRef<HTMLDivElement>(null);
 const normalized=path.replace(/\/$/,"")||"/";
 const page=pages[normalized];
 useEffect(()=>{
  const root=host.current;if(!root)return;
  const controller=new AbortController();const signal=controller.signal;
  const menu=root.querySelector<HTMLDetailsElement>('.mobile-menu');
  menu?.addEventListener('click',e=>{if((e.target as Element).closest('a'))menu.open=false},{signal});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.open){menu.open=false;menu.querySelector<HTMLElement>('summary')?.focus()}},{signal});
  document.addEventListener('click',e=>{if(menu?.open&&!menu.contains(e.target as Node))menu.open=false},{signal});
  const search=root.querySelector<HTMLInputElement>('#guide-search');
  search?.addEventListener('input',()=>{let shown=0;const q=search.value.trim().toLocaleLowerCase();root.querySelectorAll<HTMLElement>('.guide-card').forEach(card=>{card.hidden=!card.textContent?.toLocaleLowerCase().includes(q);if(!card.hidden)shown++});const count=root.querySelector('#guide-count'),empty=root.querySelector<HTMLElement>('#no-guides');if(count)count.textContent=`${shown} guide${shown===1?'':'s'}`;if(empty)empty.hidden=shown!==0},{signal});
  const form=root.querySelector<HTMLFormElement>('#enquiry-form');
  if(form){
   let step=0,busy=false;
   const steps=Array.from(form.querySelectorAll<HTMLFieldSetElement>('[data-form-step]'));
   const labels:Record<string,string>={serviceType:'Service',startDate:'Travel date',endDate:'End date',groupSize:'Passengers',luggage:'Luggage',pickup:'Pickup / gateway',dropoff:'Final destination',programmeDetails:'Programme outline',vehicleNeeds:'Additional requirements',companyName:'Company',contactName:'Contact',emailAddress:'Email',phone:'Phone',itineraryLink:'Itinerary link'};
   const values=()=>Object.fromEntries(new FormData(form).entries()) as Record<string,string>;
   const service=form.elements.namedItem('serviceType') as HTMLSelectElement;
   const prefill=new URLSearchParams(location.search).get('service');
   if(prefill&&Array.from(service.options).some(o=>o.value===prefill))service.value=prefill;
   const textBrief=()=> 'UK Inbound Ground Transport — Transport brief\n\n'+Object.entries(values()).filter(([k,v])=>v&&k!=='website').map(([k,v])=>(labels[k]||k)+': '+v).join('\n\n')+'\n\nThis is an enquiry, not a confirmed booking.';
   const review=()=>{const dl=root.querySelector('#brief-review')!;dl.replaceChildren();Object.entries(values()).filter(([k,v])=>v&&k!=='website').forEach(([key,val])=>{const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=labels[key]||key;dd.textContent=val;row.append(dt,dd);dl.append(row)})};
   const show=(next:number)=>{step=next;steps.forEach((el,i)=>el.hidden=i!==step);root.querySelectorAll<HTMLElement>('[data-step-marker]').forEach((el,i)=>{el.classList.toggle('active',i===step);if(i===step)el.setAttribute('aria-current','step');else el.removeAttribute('aria-current')});if(step===2)review();form.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});steps[step].querySelector<HTMLElement>('input,select,button,a')?.focus({preventScroll:true})};
   form.querySelectorAll<HTMLButtonElement>('[data-next]').forEach(button=>button.addEventListener('click',()=>{
    if(busy)return;
    const fields=Array.from(steps[step].querySelectorAll<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>('input,select,textarea'));
    for(const field of fields){field.setCustomValidity('');if(field.name==='itineraryLink'&&field.value&&!field.value.startsWith('https://'))field.setCustomValidity('Please use a secure https itinerary link.');if(!field.reportValidity())return;}
    if(step===0){const {startDate,endDate}=values();const error=root.querySelector('#date-error')!;if(endDate&&endDate<startDate){error.textContent='The end date must be on or after your travel date.';(form.elements.namedItem('endDate') as HTMLElement).focus();return;}error.textContent='';}
    show(Math.min(2,step+1));
   },{signal}));
   form.querySelectorAll<HTMLButtonElement>('[data-back]').forEach(button=>button.addEventListener('click',()=>{if(!busy)show(Math.max(0,step-1))},{signal}));
   form.addEventListener('submit',e=>{e.preventDefault();if(step<2)steps[step].querySelector<HTMLButtonElement>('[data-next]')?.click()},{signal});
   root.querySelector('#download-brief')?.addEventListener('click',()=>{const blob=new Blob([textBrief()],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='UK-Inbound-Transport-Brief.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);root.querySelector('#download-status')!.textContent='Your transport brief has been downloaded.'},{signal});
   const send=root.querySelector<HTMLButtonElement>('#send-enquiry');
   send?.addEventListener('click',async()=>{
    if(busy)return;busy=true;send.disabled=true;send.textContent='Sending enquiry…';
    const status=root.querySelector<HTMLElement>('#submit-status')!;status.textContent='Sending your requirements to the operations team…';
    try{
     const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(values()),signal});
     const result=await response.json().catch(()=>null);
     if(!response.ok||!result?.success||!result?.reference)throw new Error(result?.message||'We could not confirm receipt of your enquiry.');
     const confirmation=document.createElement('div'),h=document.createElement('h2'),p=document.createElement('p'),note=document.createElement('p');
     confirmation.setAttribute('role','status');confirmation.tabIndex=-1;h.textContent='Enquiry received.';p.textContent=`Thank you. Your reference is ${result.reference}. Our team will review your transport requirements.`;note.textContent='This is an enquiry, not a confirmed booking. Please quote your reference if you contact the team.';confirmation.append(h,p,note);form.replaceChildren(confirmation);confirmation.focus();
    }catch(error){if(signal.aborted)return;status.textContent=(error instanceof Error?error.message:'Unable to send your enquiry.')+' Please try again or email info@ukinboundgroundtransport.com.';status.tabIndex=-1;status.focus();send.disabled=false;send.textContent='Send enquiry →';busy=false;}
   },{signal});
  }
  return ()=>controller.abort();
 },[normalized]);
 return <div className="grand-website" ref={host} key={normalized}>{page?<div dangerouslySetInnerHTML={{__html:addShoreExcursionsLink(page.html,normalized)}}/>:<><div dangerouslySetInnerHTML={{__html:addShoreExcursionsLink(before,normalized)}}/><main id="main" className="legacy-content">{children}</main><div dangerouslySetInnerHTML={{__html:after}}/></>}</div>;
}
