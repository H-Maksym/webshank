"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

import { NavMenuType } from "@/types";

interface INavigationProps {
  pages: NavMenuType[];
}

const Navigation: FC<INavigationProps> = ({ pages }) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session);

  return (
    <>
      <ul className="card-set justify-center [--card-gap:10px]">
        {pages.map(({ href, ariaLabel, title }: NavMenuType) => (
          <li key={title}>
            <Link
              href={href}
              aria-label={ariaLabel}
              className={`${
                pathname.includes(href) ? "text-red-500" : ""
              } card-item custom-link custom-link-hover`}
            >
              {title}
            </Link>
          </li>
        ))}
        {session?.data && (
          <li className={`card-item custom-link custom-link-hover`}>
            <Link href="/profile">Profile</Link>
          </li>
        )}
        {session?.data ? (
          //INFO SignOut and redirect to main page
          <li className={`card-item custom-link custom-link-hover`}>
            <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </Link>
          </li>
        ) : (
          <li className={` card-item custom-link custom-link-hover`}>
            <Link href="/api/auth/signin">Sign In</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
