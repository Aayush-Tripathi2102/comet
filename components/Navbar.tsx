"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6">
      {/* Hamburger and menu for mobile */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="mr-4">
          <GiHamburgerMenu size={28} />
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-2 bg-white shadow-lg rounded z-50 p-4 min-w-[180px]">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <ul className="flex flex-col gap-4 font-bold mt-2">
              <li>Men</li>
              <li>Women</li>
              <li>The Vault</li>
              <li>About Us</li>
            </ul>
          </div>
        )}
      </div>
      {/* Logo center on mobile, left on desktop */}
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="font-bold text-4xl">COMET</div>
      </div>
      {/* Profile and cart icons right on mobile, right on desktop */}

      {/* Desktop menu */}
      <div className="hidden md:flex px-12">
        <ul className="flex justify-between items-center font-bold">
          <li className="inline px-8">Men</li>
          <li className="inline px-8">Women</li>
          <li className="inline px-8">The Vault</li>
          <li className="inline px-8">About Us</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <FaUserCircle size={28} />
        <div className="relative ml-4">
          <FiShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
