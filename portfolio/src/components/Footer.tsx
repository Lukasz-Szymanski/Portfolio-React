import React from "react";

import {
  FaInstagram,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className=" text-white relative z-20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          {/* Ikonki social media */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.gitlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition">
            <FaGitlab size={24} />
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
