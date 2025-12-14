"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdCardGiftcard } from "react-icons/md";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";
import { cart } from "@/lib/constants";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<"men" | "women" | "about" | null>(
    "men"
  );
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(cart);
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
              <li
                className="text-lg uppercase"
                onClick={() => router.push("/collection")}
              >
                sneakers
              </li>
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
    <div className="bg-white text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6 border-b border-gray-200">
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
              <Link
                className="flex-1 flex justify-center md:justify-start"
                href={"/"}
              >
                <div className="font-bold text-4xl cursor-pointer text-white">
                  COMET
                </div>
              </Link>
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
                  className={` ${
                    selected === "men" ? getColor("men") : "text-black"
                  }`}
                >
                  Men
                </li>

                <li
                  onClick={() => setSelected("women")}
                  className={` ${
                    selected === "women" ? getColor("women") : "text-black"
                  }`}
                >
                  Women
                </li>

                <li
                  onClick={() => setSelected("about")}
                  className={` ${
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
        <div
          className="font-bold text-4xl cursor-pointer"
          onClick={() => router.push("/")}
        >
          COMET
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex px-12">
        <ul className="flex justify-between items-center font-bold">
          <li className="inline px-8">
            <button
              className="cursor-pointer"
              onClick={() => {
                setMen(!men);
                setWomen(false);
              }}
            >
              <div className="flex justify-center items-center gap-2">
                <span>Men</span>
                <span>{men ? <FiChevronUp /> : <FiChevronDown />}</span>
              </div>
              <div
                className={`h-1 ${
                  men ? "bg-[#ECEB0B]" : "bg-transparent"
                } w-5/8 mt-1`}
              />
            </button>
          </li>
          <li className="inline px-8">
            <button
              className="cursor-pointer"
              onClick={() => {
                setWomen(!women);
                setMen(false);
              }}
            >
              <div className="flex justify-center items-center gap-2">
                <span>Women</span>
                <span>{women ? <FiChevronUp /> : <FiChevronDown />}</span>
              </div>
              <div
                className={`h-1 ${
                  women ? "bg-[#ECEB0B]" : "bg-transparent"
                } w-3/4 mt-1`}
              />
            </button>
          </li>
          <li className="inline px-8">
            <button className="cursor-pointer" onClick={() => {}}>
              The Vault
              <div className="h-1 w-full mt-1" />
            </button>
          </li>
          <li className="inline px-8">
            <button className="cursor-pointer" onClick={() => {}}>
              About Us
              <div className="h-1 w-full mt-1" />
            </button>
          </li>
        </ul>
      </div>
      {/* Profile and cart icons right on mobile, right on desktop */}
      <div className="flex items-center gap-6">
        <FaUserCircle size={28} />
        <button
          onClick={() => {
            setCartOpen(!cartOpen);
          }}
          className="relative ml-4 cursor-pointer"
        >
          <FiShoppingCart size={28} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
            3
          </span>
        </button>
      </div>
      {men && (
        <div className="absolute top-30 left-0 w-full bg-white shadow-lg z-40 px-12 py-6 ">
          <div className="w-full flex justify-center items-start">
            <div className="w-6/8 flex items-center gap-4 justify-center border-r border-r-black">
              <div
                className="w-1/3 m-2"
                onClick={() => {
                  router.push("/collection");
                }}
              >
                <Image src="/x.webp" width={700} height={600} alt="men" />
              </div>
              <div className="w-1/3  m-2">
                <Image src="/y.webp" width={700} height={600} alt="men" />
              </div>
              <div className="w-1/3 m-2 mr-4 flex flex-col gap-2">
                <div className=" m-2">
                  <Image src="/p.webp" width={280} height={290} alt="men" />
                </div>
                <div className="m-2">
                  <Image src="/q.webp" width={280} height={290} alt="men" />
                </div>
              </div>
            </div>
            <div className="w-2/8 flex items-start">
              <ul className="flex flex-col gap-2 font-semibold mt-8 ml-8">
                <li className="text-lg hover:text-[#ECEB0B]">New in</li>
                <li className="text-lg hover:text-[#ECEB0B]">Gifting Guide</li>
                <li className="text-lg hover:text-[#ECEB0B]">
                  We Made Too Much
                </li>
                <li className="text-lg hover:text-[#ECEB0B]">Member's CLub</li>
                <li className="text-lg hover:text-[#ECEB0B]">Accessories</li>
                <li className="text-lg hover:text-[#ECEB0B]">The Garage</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {women && (
        <div className="absolute top-30 left-0 w-full bg-white shadow-lg z-40 px-12 py-6 ">
          <div className="w-full flex justify-center items-start">
            <div className="w-6/8 flex items-center gap-4 justify-center border-r border-r-black">
              <div className="w-1/3 m-2">
                <Image src="/a.webp" width={700} height={600} alt="men" />
              </div>
              <div className="w-1/3  m-2">
                <Image src="/b.webp" width={700} height={600} alt="men" />
              </div>
              <div className="w-1/3 m-2 mr-4 flex flex-col gap-2">
                <div className=" m-2">
                  <Image src="/c.webp" width={280} height={290} alt="men" />
                </div>
                <div className="m-2">
                  <Image src="/d.webp" width={280} height={290} alt="men" />
                </div>
              </div>
            </div>
            <div className="w-2/8 flex items-start">
              <ul className="flex flex-col gap-2 font-semibold mt-8 ml-8">
                <li className="text-lg hover:text-[#ECEB0B]">New in</li>
                <li className="text-lg hover:text-[#ECEB0B]">Gifting Guide</li>
                <li className="text-lg hover:text-[#ECEB0B]">
                  We Made Too Much
                </li>
                <li className="text-lg hover:text-[#ECEB0B]">Member's CLub</li>
                <li className="text-lg hover:text-[#ECEB0B]">Accessories</li>
                <li className="text-lg hover:text-[#ECEB0B]">The Garage</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {cartOpen && (
        <div className="fixed top-0 right-0 w-screen bg-white shadow-2xl z-50">
          <div
            className="fixed top-0 left-0 w-1/8 md:w-2/3 h-screen bg-black/50 z-50"
            onClick={() => setCartOpen(false)}
          />

          <div className="fixed top-0 right-0 w-7/8 md:w-1/3 bg-white z-60 h-screen">
            {/* HEADER */}
            <div className="flex justify-between items-center py-4 px-6">
              <h2 className="font-semibold text-base sm:text-lg md:text-xl">
                CART
              </h2>
              <button onClick={() => setCartOpen(false)}>
                <FiX size={20} />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col gap-4 py-4 px-6 overflow-y-auto h-[calc(100vh-300px)] scrollbar-hide">
              {cartItems.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between"
                >
                  <div className="flex items-start gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />

                    <div>
                      <div className="mb-12">
                        <h3
                          className="font-semibold cursor-pointer hover:underline
                               text-sm sm:text-base md:text-lg"
                        >
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1">
                          <p
                            className="uppercase font-semibold
                                text-xs sm:text-sm"
                          >
                            SIZE:
                          </p>
                          <p className="text-xs sm:text-sm md:text-base">
                            {item.size}
                          </p>
                        </div>
                      </div>

                      {/* GIFT WRAP */}
                      <div
                        className="flex items-center gap-2 cursor-pointer select-none text-gray-800"
                        onClick={() => {
                          const updated = [...cartItems];
                          updated[index].giftWrap = !updated[index].giftWrap;
                          setCartItems(updated);
                        }}
                      >
                        {item.giftWrap ? (
                          <FaRegCheckSquare className="text-base sm:text-lg" />
                        ) : (
                          <FaRegSquare className="text-base sm:text-lg" />
                        )}
                        <MdCardGiftcard className="text-base sm:text-lg" />
                        <p className="italic text-xs sm:text-sm">
                          Add free GIFT WRAP
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PRICE & QTY */}
                  <div className="flex flex-col justify-between">
                    <p
                      className="font-medium
                          text-xs sm:text-sm md:text-base"
                    >
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="border border-gray-400 flex gap-2 items-center justify-center px-2 py-1">
                      <FiChevronDown
                        className="cursor-pointer text-sm sm:text-base"
                        onClick={() => {
                          const updated = [...cartItems];
                          if (updated[index].quantity > 1) {
                            updated[index].quantity -= 1;
                          } else {
                            updated.splice(index, 1);
                          }
                          setCartItems(updated);
                        }}
                      />
                      <span className="text-xs sm:text-sm md:text-base">
                        {item.quantity}
                      </span>
                      <FiChevronUp
                        className="cursor-pointer text-sm sm:text-base"
                        onClick={() => {
                          const updated = [...cartItems];
                          updated[index].quantity += 1;
                          setCartItems(updated);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="h-40" />
            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-500 pt-8 fixed bottom-0 right-0 w-7/8 md:w-1/3 bg-white">
              <div
                className="flex gap-4 text-gray-700 px-8
                      text-xs sm:text-sm"
              >
                <p>Free 7 day Returns & Exchanges</p>
                <p>Free Shipping</p>
              </div>

              <div className="flex justify-between font-bold uppercase px-10 py-8">
                <p className="text-sm sm:text-lg md:text-xl">Total:</p>
                <p className="text-sm sm:text-lg md:text-xl">
                  ₹
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toLocaleString("en-IN")}
                </p>
              </div>

              <button
                className="py-4 w-full bg-[#ECEB0B] font-bold uppercase cursor-pointer
                         text-lg sm:text-xl md:text-2xl"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
