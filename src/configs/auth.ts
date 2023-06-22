import type { AuthOptions, User } from "next-auth";
//INFO authorized with Google
import GoogleProvider from "next-auth/providers/google";
//INFO authorized with email and password
import Credentials from "next-auth/providers/credentials";

const users = [
  {
    email: "maxim@mail.ua",
    password: "1234",
    name: "Maksym",
    image: "/vercel.svg",
  },
  {
    email: "maksym@mail.ua",
    password: "1234",
    name: "Maksym",
    image: "/next.svg",
  },
  {
    email: "testmax@gmail.com",
    password: "1234",
    name: "Maksym",
    image: "/vercel.svg",
  },
];

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      //INFO It's can be undefined for typescript
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Enter your email",
          required: true,
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter your password",
          required: true,
        },
      },
      async authorize(credentials) {
        //INFO if does not exist user or password or email wrong authorize return null;
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        //INFO we can use there DB or other logic.

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        //INFO We must hashing password in this way!
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
  //INFO If redirect true, when we have error we redirect to form with autogenerate
  pages: { signIn: "/signin" },
};
