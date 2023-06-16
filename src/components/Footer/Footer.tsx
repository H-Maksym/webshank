import { FC } from "react";

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-5 bg-pink-400">
        <a
          href="https://www.linkedin.com/in/maksym-holovachuk-a81888125/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to Linkedin"
          aria-label="link to Linkedin"
        >
          Created by &copy; Maksym Holovachuk
        </a>
      </footer>
    </>
  );
};

export default Footer;
