"use client"

import { usePathname } from "next/navigation";

export const GetUrl = () => {
    const pathname = usePathname();

    return pathname;
}