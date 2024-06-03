import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token")?.value;

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  if (req.nextUrl.pathname.startsWith("/login") && !token) {
    return;
  }

  if (req.url.includes("/login") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //   const { pathname } = new URL(req.nextUrl);
  //   const { matcher } = req.nextUrl;

  //   if (matcher.includes(pathname)) {
  //     return req.next();
  //   }

  //   if (user) {
  //     return req.next();
  //   }

  //   return NextResponse.redirect("/login");
}

export const config = {
  matcher: ["/dashboard", "/login"],
};
