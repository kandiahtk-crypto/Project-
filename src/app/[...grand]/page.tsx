import type {Metadata} from "next";
import {notFound} from "next/navigation";
import pages from "../../components/GrandPages.json";
const routes=pages as Record<string,{title:string;description:string}>;
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(routes).filter(p=>p!=="/").map(p=>({grand:p.slice(1).split("/")}));}
export function generateMetadata({params}:{params:{grand:string[]}}):Metadata{const path="/"+params.grand.join("/");const p=routes[path];if(!p)return {};return {title:p.title,description:p.description,alternates:{canonical:path},openGraph:{title:p.title,description:p.description,url:path,type:"website"}};}
export default function NewPage({params}:{params:{grand:string[]}}){if(!routes["/"+params.grand.join("/")])notFound();return null;}
