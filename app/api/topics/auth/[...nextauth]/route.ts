import NextAuth from "next-auth/next";

import { authOptions } from "../../../../../lib/authOptions";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// export const authOptions = (req, res) => {
//   const providers = [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//   ];

//   const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin");

//   // Ocultar el GitHubProvider cuando visites `/api/auth/signin`
//   if (isDefaultSigninPage) providers.pop();

//   return {
//     providers,
//     callbacks: {
//       async jwt({ token, account }) {
//         if (account) {
//           token.accessToken = account.access_token;
//         }
//         return token;
//       },
//       async session({ session, token }) {
//         session.accessToken = token.accessToken;
//         return session;
//       }
//     }
//   };
// };

// const handler = (req, res) => NextAuth(req, res, authOptions(req, res));

// export { handler as GET, handler as POST };
