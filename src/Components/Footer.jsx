import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-700 bg-gray-200 text-black dark:text-white py-4">
      <div className="container mx-auto text-center">
        <div className="my-3 flex justify-center space-x-4">
          <a
            href="https://github.com/Mhizdhee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl bg-[#5eb1f5] p-1 rounded-full text-gray-800 hover:text-black" />
          </a>
          <a href="mailto:olaniyandorcas91@gmail.com">
            <SiGmail className="text-2xl  bg-[#5eb1f5] p-1 rounded-full text-gray-800 hover:text-red-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/dorcas-olaniyan114228143"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl  bg-[#5eb1f5] p-1 rounded-full text-gray-800 hover:text-blue-900" />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Olaniyan Dorcas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
