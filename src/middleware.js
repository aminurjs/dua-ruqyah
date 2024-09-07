import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dua/dua's-importance/1", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
