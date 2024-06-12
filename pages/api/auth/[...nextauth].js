import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/utiils/db";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import User from "@/models/User";
import dbConnect from "@/utiils/dbConnect";
import bcrypt from "bcryptjs";
dbConnect();

export default NextAuth({
    //adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await User.findOne({email: email});
                if (user) {
                    return signInUser({user,password})
                } else {
                    throw new Error("User not found");

                }
            }
        })
    ],
    pages:{
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/error",
        verifyRequest: "/auth/verify-request",
        newUser: null
    },
    database: process.env.MONGODB_URI,
    secret:"secret",
});

const signInUser = async ({user, password}) => {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Password not matched");
    }
    return user
}

