import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/website/coffee_togo.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Menu",
    link: "/server",
  },
  {
    id: 3,
    name: "About",
    link: "/leaf",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <Image src={Logo} alt="Logo" className="w-14" />
              NoBody about Cafe
            </a>
          </div>
          {/* Links section */}
          <div className="flex items-center gap-4">
            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } sm:flex flex-col sm:flex-row items-center gap-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary/90 sm:bg-none p-4 sm:p-0 z-50`}
            >
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    onClick={handleMenuToggle}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="sm:hidden text-2xl" onClick={handleMenuToggle}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <button className="bg-secondary px-4 py-2 rounded-full hover:bg-secondary/5 hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
