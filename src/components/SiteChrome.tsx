"use client";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";
import GrandWebsite from "./GrandWebsite";
export default function SiteChrome({children}:{children:ReactNode}){const path=usePathname();return <GrandWebsite path={path}>{children}</GrandWebsite>}
