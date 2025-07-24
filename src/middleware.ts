import { auth } from "@/lib/auth"

export default auth((req) => {
  const { pathname } = req.nextUrl
  
  const protectedRoutes = ['/dashboard', '/profile', '/bookings']
  const authRoutes = ['/login', '/register']
  
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const isAuthRoute = authRoutes.includes(pathname)
  
  if (isProtectedRoute && !req.auth) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return Response.redirect(loginUrl)
  }
  
  if (isAuthRoute && req.auth) {
    return Response.redirect(new URL('/dashboard', req.url))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}