import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import CV from "../assets/resume/Łukasz_Szymański_CV.pdf";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full body-font z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to=""
          className="flex  items-center text-gray-900 mb-4 md:mb-0 invert">
          <img src={Logo} alt="Logo" width={40} height={40} />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 ">
            O mnie
          </Link>
          <Link to="/frontend" className="mr-5 ">
            Frontned
          </Link>
          <Link to="/backend" className="mr-5 ">
            Backend
          </Link>
          <a
            href={CV}
            className="mr-5"
            target="blank
          ">
            CV
          </a>
          <Link to="/offer" className="mr-5 ">
            Usługi
          </Link>
          <Link to="/contact" className="mr-5 ">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
