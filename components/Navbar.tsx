"use client";

import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="w-[700px] bg-white rounded-full mx-auto hidden xl:block">
        <ul className="flex items-center justify-around p-1 text-">
          <li
            className={`sm:text-sm font-tt_travels text-[7px] font-bold px-4 py-2 rounded-full transition-colors hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            <Link to="aboutme" smooth={true}>
              About Me
            </Link>
          </li>
          <li
            className={`sm:text-sm font-tt_travels text-[7px] font-bold px-4 py-2 rounded-full transition-colors hover:cursor-pointer hover:bg-black hover:text-white`}
          >
            <Link to="skills" smooth={true}>
              Skills
            </Link>
          </li>
          <li className="sm:text-sm font-tt_travels text-[7px] font-bold px-4 py-2 rounded-full transition-colors hover:cursor-pointer hover:bg-black hover:text-white">
            <Link to="projects" smooth={true}>
              Projects
            </Link>
          </li>
          <li className="sm:text-sm font-tt_travels text-[7px] font-bold px-4 py-2 rounded-full transition-colors hover:cursor-pointer hover:bg-black hover:text-white">
            <Link to="contact" smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
