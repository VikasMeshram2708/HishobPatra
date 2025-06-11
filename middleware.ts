import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log(req.nextauth.token);
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    // Allow access to auth pages and api routes
    if (pathname.startsWith("/login")) {
      return NextResponse.next();
    }
    if (token?.email) {
      if (token && protectedRoutes.some((route) => pathname.includes(route))) {
        return NextResponse.next();
      }
    }
  },
  {
    callbacks: {
      async authorized({ token, req }) {
        const { pathname } = req.nextUrl;
        // allow public pages
        if (pathname === "/" || pathname.startsWith("/login")) {
          return true;
        }
        // require authentication for all other pages
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
};
