"use client";

export const GetUrl = () => {
  if (typeof window !== "undefined") {
    const { pathname, search } = window.location;
    const params = new URLSearchParams(search);

    const queryParam = params.get("q");
    const idParam = params.get("id");

    return {
      pathname,
      queryParam,
      idParam,
    };
  }

  return {
    pathname: "",
    queryParam: null,
    idParam: null,
  };
};
