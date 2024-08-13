"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const GetUrl = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const queryParam = searchParams.get("q");

  return {
    pathname,
    queryParam,
    idParam,
  };
};
