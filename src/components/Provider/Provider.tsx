"use client";
import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface IProviderProps {
  children: ReactNode;
}

const Provider: FC<IProviderProps> = ({ children }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Provider;
