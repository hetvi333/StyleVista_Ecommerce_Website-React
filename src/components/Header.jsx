import React, { useContext, useEffect, useState } from "react";
// add contexts
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

// react icons
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { SiSparkar } from "react-icons/si";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? " bg-white py-4 shadow-md" : "py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto md:flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div className="flex text-2xl font-[jost]">
            <SiSparkar className="text-3xl" />
            <span className=" hidden md:flex">tyleVista</span>
          </div>
        </Link>
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* links */}
        <ul
          className={`md:flex gap-x-16 md:gap-x-10 ${
            navOpen ? "flex py-4 justify-center" : "hidden"
          }`}
        >
          <li className="text-blue-900 font-semibold hover:font-bold hover:border-b-2 hover:border-blue-900">
            <a href="/#jewelery">Jewelery</a>
          </li>
          <li className="text-blue-900 font-semibold hover:font-bold hover:border-b-2 hover:border-blue-900">
            <a href="/#women-clothing">Womens</a>
          </li>
          <li className="text-blue-900 font-semibold hover:font-bold hover:border-b-2 hover:border-blue-900">
            <a href="/#mens-clothing">Mens</a>
          </li>
        </ul>

        {/* bag icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer flex md:relative absolute right-28 top-6 md:right-0 md:top-0"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
