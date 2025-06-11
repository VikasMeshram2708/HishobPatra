import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DefaultSession } from "next-auth";
import clientPromise from "@/db";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 2600,
  },
  pages: {
    newUser: "/dashboard",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      try {
        if (!account) return false;
        if (account.provider === "google") {
          // Ensure database connection is established
          const client = await clientPromise;
          const db = client.db(process.env.DB_NAME);
          const userCollection = db.collection("users");
          
          // check if user exists
          const userExist = await userCollection.findOne({
            email: user?.email,
          });
          console.log("userExist", userExist);

          if (!userExist) {
            // save the user
            const result = await userCollection.insertOne({
              name: user?.name,
              picture: user?.image,
              email: user?.email,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              lastLogin: new Date().toISOString(),
              isAdmin: false,
              isVerified: false,
            });
            
            if (!result?.acknowledged) {
              console.error("Failed to save user to database");
              return false;
            }
            console.log("User saved successfully:", result);
          } else {
            // update the lastLogin
            const updateResult = await userCollection.updateOne(
              { email: user?.email },
              { $set: { lastLogin: new Date().toISOString() } }
            );
            
            if (!updateResult?.acknowledged) {
              console.error("Failed to update user's last login");
              return false;
            }
            console.log("User login updated successfully:", updateResult);
          }
        }
        return true;
      } catch (error) {
        console.error(
          `Sign In failed. Something went wrong. Please try again. : ${error}`
        );
        return false;
      }
    },
    async jwt({ user, token }) {
      if (user) {
        user.email = token?.id as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as string;
      }
      return session;
    },
  },
} satisfies NextAuthOptions;

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      email: string;
    } & DefaultSession["user"];
  }
}
