import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token");
  const userRole = request.cookies.get("user-role");

  const protectedPaths = ["/user-dashboard", "/admin-dashboard"];
  const adminPaths = ["/admin-dashboard"];
  const memberPaths = ["/user-dashboard"];

  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  const isAdminPath = adminPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  const isMemberPath = memberPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirect unauthenticated users to home
  if (isProtectedPath && !authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect members trying to access admin routes
  if (isAdminPath && userRole?.value !== "admin") {
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }

  // Redirect admins trying to access member routes
  if (isMemberPath && userRole?.value === "admin") {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (authToken) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("authorization", `Bearer ${authToken.value}`);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user-dashboard/:path*",
    "/admin-dashboard/:path*",
  ],
};