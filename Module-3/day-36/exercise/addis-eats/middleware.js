import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionId = request.cookies.get("session_id")?.value;
  const { pathname, search } = request.nextUrl;

  if (!sessionId) {
    const destination = `${pathname}${search}`;
    const signinUrl = new URL("/signin", request.url);

    signinUrl.searchParams.set("next", destination);

    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/checkout/:path*",
    "/cart/:path*",
    "/orders/:path*",
    "/kitchen/:path*",
  ],
};
