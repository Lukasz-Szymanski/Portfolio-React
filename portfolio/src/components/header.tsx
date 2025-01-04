import React from "react";
import Logo from "../assets/images/logo.png";
import CV from "../assets/resume/Łukasz_Szymański_CV.pdf";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full body-font z-20 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex  items-center text-gray-900 mb-4 md:mb-0 invert">
          <img src={Logo} alt="Logo" width={40} height={40} />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 ">
            O mnie
          </a>
          <a href="#" className="mr-5 ">
            Frontned
          </a>
          <a href="#" className="mr-5 ">
            Backend
          </a>
          <a
            href={CV}
            className="mr-5"
            target="blank
          ">
            CV
          </a>
          <a href="#" className="mr-5 ">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
