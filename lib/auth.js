// lib/auth.js
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session persistence
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token; // Store GitHub access token in JWT token
      }
      if (user) {
        token.user = user; // Store user information in JWT token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user; // Attach user info to session
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Secret for JWT
  pages: {
    signIn: "/auth/signin", // Customize the sign-in page if needed
    error: "/auth/error", // Customize the error page
    // You can also define a redirect page after login, e.g., `/dashboard`
    // redirect: "/dashboard",
  },
};
