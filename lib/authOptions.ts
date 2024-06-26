import { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {


    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

        }),
        GitHubProvider({
            clientId: process.env.Github_CLIENT_ID as string,
            clientSecret: process.env.Github_CLIENT_SECRET as string,

        })]

}


