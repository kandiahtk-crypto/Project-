"use client";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
export default function SiteChrome({children}:{children:ReactNode}){const home=usePathname()==="/";return home?<>{children}</>:<div style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}><SiteHeader/><main style={{flex:1}}>{children}</main><SiteFooter/></div>}
