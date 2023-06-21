import NextAuth from "next-auth";
import { authConfig } from "@/configs/auth";

const authHandler = NextAuth(authConfig);

export { authHandler as GET, authHandler as POST };
