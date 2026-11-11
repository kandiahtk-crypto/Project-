"use client";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
export default function SiteChrome({children}:{children:ReactNode}){const path=usePathname();if(path==="/")return <>{children}</>;return <div className="unified-site"><SiteHeader/><main className={path==="/itinerary-builder"?"unified-planner":"unified-content"}>{children}</main><SiteFooter/></div>}
