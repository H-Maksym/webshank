import { FC } from "react";
import { NavMenuType } from "@/types/index";
import Link from "next/link";

import pages from "@/db/pages/pages.json";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <>
      <nav>
        <ul className="card-set justify-center [--card-gap:10px]">
          {pages.map(({ title, path, ariaLabel }: NavMenuType) => (
            <li key={title}>
              <Link
                href={path}
                aria-label={ariaLabel}
                className="card-item custom-link custom-link-hover"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
