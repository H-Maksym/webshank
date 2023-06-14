import { FC } from "react";
import { NavMenuType } from "../../types/index";
import Link from "next/link";

import pages from "@/db/pages/pages.json";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <>
      <nav>
        <ul>
          {pages.map(({ title, path, ariaLabel }: NavMenuType) => (
            <li key={title}>
              <Link
                href={path}
                aria-label={ariaLabel}
                className="custom-link custom-link-hover"
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
