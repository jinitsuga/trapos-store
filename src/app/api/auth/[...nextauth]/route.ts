import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

export const authOptions = {
  providers: [EmailProvider({})],
};
