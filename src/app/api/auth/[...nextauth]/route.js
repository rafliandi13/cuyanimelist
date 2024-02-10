import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

export const authOptions = {
    providers : [
        githubAuth({
            clientId : process.env.GITHUB_CLIET_ID,
            clientSecret: process.env.GITHUB_SECRET_ID
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}