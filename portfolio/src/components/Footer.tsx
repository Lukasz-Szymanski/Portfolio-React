import React from "react";

import {
  FaInstagram,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white z-20 fixed bottom-0 left-0 w-full py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 e">
          {/* Ikonki social media */}
          <a
            href="https://www.instagram.com/szymanski__art/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/Lukasz-Szymanski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a
            href="https://gitlab.com/Lukasz-Szymanski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaGitlab size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lukasz-szymanski94/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/szymanski_art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.youtube.com/@Lukasz_Szymanski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm text-white">
          © 2025 Łukasz Szymański. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
