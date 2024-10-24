import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("xZ9qTn7p_K4wVd1Lm_jx8s2A")?.value;

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err) => {
      console.log(err);
    }));

  // Redirect unauthenticated users trying to access protected routes to the homepage
  if (req.nextUrl.pathname.startsWith("/dashboard") && !verifiedToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Allow the request to proceed if the user is authenticated or if the request does not match any protected paths
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
