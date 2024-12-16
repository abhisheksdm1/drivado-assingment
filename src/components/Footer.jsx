import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <footer className="bg-primaryGray font-lato text-black p-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2
              onClick={handleNavigate}
              className="text-lg text-primaryRed font-semibold mb-4"
            >
              Drivado
            </h2>
            <p>
              Drivado delivers an unparalleled customer service through
              dedicated customer teams, engaged people working in an agile
              culture, and a global footprint.
            </p>
          </div>
          {/* Explore Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Explore</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Our Warehouses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  News and Media
                </a>
              </li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="mb-8 md:mb-0 md:w-1/6">
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="pl-5 font-semibold">Social Media</div>
          <div className="pl-5 md:w-1/6 flex justify-center md:justify-start">
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <img src={facebook} />
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <img src={twitter} />
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <img src={whatsapp} />
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              <img src={instagram} />
            </a>
          </div>
          <h1
            onClick={handleNavigate}
            className="p-5 font-lato font-bold text-[24px] text-center text-primaryRed"
          >
            Drivado
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
