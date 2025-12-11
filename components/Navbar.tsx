"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<"men" | "women" | "about" | null>(
    "men"
  );
  const modalRef = useRef<HTMLDivElement>(null);

  const getColor = (item: string) => {
    if (item === "men") return "text-blue-500";
    if (item === "women") return "text-pink-500";
    if (item === "about") return "text-yellow-400";
    return "text-white";
  };

  const renderContent = () => {
    switch (selected) {
      case "men":
        return (
          <div className="mt-4">
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="text-lg uppercase">New in</li>
              <li className="text-lg uppercase">sneakers</li>
              <li className="text-lg uppercase">gifting guide</li>
              <li className="text-lg uppercase">we made too much</li>
              <li className="text-lg uppercase">accessories</li>
              <li className="text-lg uppercase">vault</li>
            </ul>
            <div className="w-full mb-4">
              <Image src="/men.webp" width={1400} height={900} alt="men" />
            </div>
            <ul className="flex flex-col gap-2">
              <li className="text-base">Track Your Order</li>
              <li className="text-base">About Us</li>
              <li className="text-base">The Garage</li>
              <li className="text-base">Care</li>
              <li className="text-base">FAQ</li>
              <li className="text-base">Returns and Exchanges</li>
              <li className="text-base">Contact Us</li>
            </ul>
          </div>
        );
      case "women":
        return (
          <div className="mt-4">
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="text-lg uppercase">New in</li>
              <li className="text-lg uppercase">sneakers</li>
              <li className="text-lg uppercase">gifting guide</li>
              <li className="text-lg uppercase">we made too much</li>
              <li className="text-lg uppercase">accessories</li>
              <li className="text-lg uppercase">vault</li>
            </ul>
            <div className="w-full">
              <Image src="/women.webp" width={1400} height={900} alt="men" />
            </div>
            <ul className="flex flex-col gap-2">
              <li className="text-base">Track Your Order</li>
              <li className="text-base">About Us</li>
              <li className="text-base">The Garage</li>
              <li className="text-base">Care</li>
              <li className="text-base">FAQ</li>
              <li className="text-base">Returns and Exchanges</li>
              <li className="text-base">Contact Us</li>
            </ul>
          </div>
        );
      case "about":
        return (
          <div className="mt-4">
            <ul className="flex flex-col gap-4 font-semibold">
              <li className="text-lg uppercase">about us</li>
              <li className="text-lg uppercase">craftmanship</li>
              <li className="text-lg uppercase">vault</li>
              <li className="text-lg uppercase">the garage</li>
            </ul>
            <div className="w-full">
              <Image src="/about.webp" width={1400} height={900} alt="men" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
            className="fixed top-0 left-0 w-screen h-screen overflow-y-auto bg-white shadow-lg z-50 flex flex-col"
          >
            <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm">
              🎉Apply FLAT400 at checkout to get 400 off🎉
            </div>
            <div className="bg-[#2765FA] text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="mr-4 text-white"
              >
                <AiOutlineClose size={28} />
              </button>
              <div className="flex-1 flex justify-center md:justify-start">
                <div className="font-bold text-4xl text-white">COMET</div>
              </div>
              <div className="flex items-center gap-6 text-white">
                <FaUserCircle size={28} />
                <div className="relative ml-4">
                  <FiShoppingCart size={28} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-8">
              <ul className="flex gap-8 mt-2 text-lg font-bold uppercase">
                <li
                  onClick={() => setSelected("men")}
                  className={`cursor-pointer ${
                    selected === "men" ? getColor("men") : "text-black"
                  }`}
                >
                  Men
                </li>

                <li
                  onClick={() => setSelected("women")}
                  className={`cursor-pointer ${
                    selected === "women" ? getColor("women") : "text-black"
                  }`}
                >
                  Women
                </li>

                <li
                  onClick={() => setSelected("about")}
                  className={`cursor-pointer ${
                    selected === "about" ? getColor("about") : "text-black"
                  }`}
                >
                  About Us
                </li>
              </ul>

              <div>{renderContent()}</div>
            </div>
            <div className="h-0.5 bg-gray-400 w-full my-4" />
            <div className="ml-8">
              <div className="flex items-center gap-2">
                <span>
                  <FaUserCircle size={24} />
                </span>
                <span className="text-xl font-semibold uppercase">Log in</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span>
                  <FaInstagram size={24} />
                </span>
                <span>
                  <FaLinkedinIn size={24} />
                </span>
              </div>
            </div>
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
