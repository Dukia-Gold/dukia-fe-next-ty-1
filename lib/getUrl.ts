"use client";

import { usePathname, useSearchParams } from "next/navigation";

export const GetUrl = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParam = searchParams.get("q");
  const idParam = searchParams.get("id");

  return {
    pathname,
    queryParam,
    idParam,
  };
};
