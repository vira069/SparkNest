import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center lg:text-left">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} SparkNest. All rights reserved.</p>
          <div className="flex mt-2 lg:mt-0">
            <a href="#" className="mx-2 text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="mx-2 text-white hover:text-gray-400">Terms of Service</a>
            <a href="#" className="mx-2 text-white hover:text-gray-400">Contact</a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-4">
          <a href="https://facebook.com" className="mx-2 text-black hover:text-gray-400">
          <FaFacebook />
          </a>
          <a href="https://twitter.com" className="mx-2 text-white hover:text-gray-400">
          <FaTwitter />
          </a>
          <a href="https://instagram.com" className="mx-2 text-white hover:text-gray-400">
          <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="mx-2 text-white hover:text-gray-400">
          <FaLinkedin />
          </a>
          <a href="https://github.com" className="mx-2 text-white hover:text-gray-400">
          <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
