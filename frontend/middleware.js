import { withAuth } from 'next-auth/middleware';
export default withAuth({
  pages: {
    forgot: '/forgot',
    error: '/error',
    reset: '/reset',
    signUp: '/',
    signIn:'login',
    site:'/site'
    
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};