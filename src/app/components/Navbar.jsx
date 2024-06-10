"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contacts",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 text-white bg-[#0d0c0d] bg-opacity-100">
      <div className="flex justify-between items-center px-4 py-2 md:container md:py-4">
        <Link href={"/"} className="text-xs md:text-xs font-normal md:ml-16">
          BKM-CODE
        </Link>
        <div className="hidden md:flex">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`inline-block my-0 px-4 py-2 ${
                  !index && "rounded-l"
                } ${index === navLinks.length - 1 && "rounded-r"}`}
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:hidden ml-auto">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`menu md:flex md:w-auto ${
          navbarOpen ? "md:block" : "md:hidden"
        } md:ml-auto`}
        id="navbar"
      >
        {navbarOpen && (
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-0 md:p-4 md:py-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`md:inline-block md:my-0 md:px-4 md:py-2`}
              >
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
