import React, { useState } from "react";
import logo from "../assets/logo.png";
import client from "../assets/client.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex pr-50px pl-50px bg-primaryBlack justify-between h-[70px]  items-center xl:h-[90px] md:h-[70px] pl-112px pr-112px">
      <img
        src={logo}
        alt="logo"
        className="w-[100px] h-[21px] md:w-[100px] h-[40px] xl:w-[177px] h-[57px]"
      />
      <div className="flex  items-center">
        <div className=" hidden xl:block w-[138px] h-[36px] mr-5">
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
