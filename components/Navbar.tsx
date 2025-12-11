"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { x: "-100vw", opacity: 1 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [menuOpen]);

  return (
    <div className="bg-white text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6">
      {/* Hamburger and menu for mobile */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="mr-4">
          <GiHamburgerMenu size={28} />
        </button>
        {menuOpen && (
          <motion.div
            ref={modalRef}
            initial={{ x: "-100vw", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-white shadow-lg z-50 min-w-[180px] flex flex-col"
          >
            <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm">
              🎉Apply FLAT400 at checkout to get 400 off🎉
            </div>
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
          </motion.div>
        )}
      </div>
      {/* Logo center on mobile, left on desktop */}
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="font-bold text-4xl">COMET</div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex px-12">
        <ul className="flex justify-between items-center font-bold">
          <li className="inline px-8">Men</li>
          <li className="inline px-8">Women</li>
          <li className="inline px-8">The Vault</li>
          <li className="inline px-8">About Us</li>
        </ul>
      </div>
      {/* Profile and cart icons right on mobile, right on desktop */}
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
