"use client";
import {useEffect,useRef} from "react";
import {markup} from "./compact-markup";
export default function CompactHome(){
 const host=useRef<HTMLDivElement>(null);
 useEffect(()=>{
 const root=host.current!;const form=root.querySelector<HTMLFormElement>('#quote')!;const status=root.querySelector<HTMLElement>('#status')!;const submit=form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

 const motionNodes = Array.from(root.querySelectorAll<HTMLElement>('.hero-copy,.hero-visual,.section-head,.services article,.fleet-trust figure,.fleet-trust>div,.programme-photo,.programme-copy,.destination-showcase article,.approach>div,.assurance-list article,.buyer-assurance>div:first-child,.review-card'));
 let observer: IntersectionObserver | undefined;
 if (typeof IntersectionObserver !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 observer = new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');observer?.unobserve(entry.target);}});},{threshold:0.08});
 motionNodes.forEach((node,index)=>{node.classList.add('motion-ready');if(node.matches('.hero-copy,.programme-copy'))node.classList.add('motion-left');if(node.matches('.hero-visual,.programme-photo,.fleet-trust figure'))node.classList.add('motion-right');node.style.setProperty('--reveal-delay',`${index%3*70}ms`);observer!.observe(node);});
 }
 let busy=false;
 const click=(e:Event)=>{const a=(e.target as Element).closest<HTMLElement>('[data-service]');if(a)(root.querySelector('#service') as HTMLSelectElement).value=a.dataset.service!;};
 const send=async(e:Event)=>{e.preventDefault();if(busy)return;busy=true;submit.disabled=true;submit.textContent='Sending…';status.textContent='';
 const fields=Object.fromEntries(new FormData(form).entries());
 try{const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(fields)});const result=await response.json();if(!response.ok||!result.success)throw new Error(result.message||'Enquiry could not be sent.');status.textContent=`Thank you. Your enquiry reference is ${result.reference}. This is not a booking confirmation.`;form.reset();}
 catch(error){status.textContent=(error instanceof Error?error.message:'Unable to send.')+' Please retry or email info@ukinboundgroundtransport.com.';}
 finally{busy=false;submit.disabled=false;submit.textContent='Send enquiry →';}};
 root.addEventListener('click',click);form.addEventListener('submit',send);return()=>{observer?.disconnect();motionNodes.forEach(node=>node.classList.remove('motion-ready','motion-visible','motion-left','motion-right'));root.removeEventListener('click',click);form.removeEventListener('submit',send);};
 },[]);
 return <div className="ukigt-home" ref={host} dangerouslySetInnerHTML={{__html:markup}}/>;
}
