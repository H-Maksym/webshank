"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenuType } from "@/types";

interface INavigationProps {
  pages: NavMenuType[];
}

const Navigation: FC<INavigationProps> = ({ pages }) => {
  const pathname = usePathname();
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
      </ul>
    </>
  );
};

export default Navigation;
