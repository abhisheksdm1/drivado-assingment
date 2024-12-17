import React, { useState } from "react";
import logo from "../assets/logo.png";
import client from "../assets/client.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className=" pr-50px pl-50px bg-primaryBlack flex justify-between items-center h-[70px] ">
      <div className="mt-2">
        <img
          src={logo}
          alt="logo"
          onClick={handleNavigate}
          className="w-[100px] h-[21px]  md:w-[177px] h-[57px]"
        />
      </div>
      <div className="flex  items-center">
        <div className=" hidden md:block w-[138px] h-[36px] mr-5">
          <img src={client} alt="client" />
        </div>
        <div>
          {!toggle ? (
            <CiMenuBurger
              className="text-primaryGray"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <IoCloseOutline
              className="text-primaryGray"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
