import { FC } from "react";
import Navbar from "@/components/Navbar";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  return (
    <>
      <header className="bg-red-400">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
