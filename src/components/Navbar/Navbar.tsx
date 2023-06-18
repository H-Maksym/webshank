import { FC } from "react";
import Navigation from "@/components/Navbar/Navigation";
import pages from "@/db/pages/pages.json";
interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  return (
    <>
      <nav>
        <Navigation pages={pages} />
      </nav>
    </>
  );
};

export default Navbar;
