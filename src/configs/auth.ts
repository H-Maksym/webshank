import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      //INFO It's can be undefined for typescript
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
