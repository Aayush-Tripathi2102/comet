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
  const [selected, setSelected] = useState<"men" | "women" | "about" | null>("men");
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
        return <div className="mt-4" data-uid="element-1775114870176-263">
            <ul className="flex flex-col gap-4 font-semibold" data-uid="element-1775114870176-264">
              <li className="text-lg uppercase" data-uid="element-1775114870176-265">New in</li>
              <li className="text-lg uppercase" onClick={() => router.push("/collection")} data-uid="element-1775114870176-266">
                sneakers
              </li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-267">gifting guide</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-268">we made too much</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-269">accessories</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-270">vault</li>
            </ul>
            <div className="w-full mb-4" data-uid="element-1775114870176-271">
              <Image src="/men.webp" width={1400} height={900} alt="men" data-uid="component-1775114870176-272" />
            </div>
            <ul className="flex flex-col gap-2" data-uid="element-1775114870176-273">
              <li className="text-base" data-uid="element-1775114870176-274">Track Your Order</li>
              <li className="text-base" data-uid="element-1775114870176-275">About Us</li>
              <li className="text-base" data-uid="element-1775114870176-276">The Garage</li>
              <li className="text-base" data-uid="element-1775114870176-277">Care</li>
              <li className="text-base" data-uid="element-1775114870176-278">FAQ</li>
              <li className="text-base" data-uid="element-1775114870176-279">Returns and Exchanges</li>
              <li className="text-base" data-uid="element-1775114870176-280">Contact Us</li>
            </ul>
          </div>;
      case "women":
        return <div className="mt-4" data-uid="element-1775114870176-281">
            <ul className="flex flex-col gap-4 font-semibold" data-uid="element-1775114870176-282">
              <li className="text-lg uppercase" data-uid="element-1775114870176-283">New in</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-284">sneakers</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-285">gifting guide</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-286">we made too much</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-287">accessories</li>
              <li className="text-lg uppercase" data-uid="element-1775114870176-288">vault</li>
            </ul>
            <div className="w-full" data-uid="element-1775114870176-289">
              <Image src="/women.webp" width={1400} height={900} alt="men" data-uid="component-1775114870176-290" />
            </div>
            <ul className="flex flex-col gap-2" data-uid="element-1775114870176-291">
              <li className="text-base" data-uid="element-1775114870176-292">Track Your Order</li>
              <li className="text-base" data-uid="element-1775114870176-293">About Us</li>
              <li className="text-base" data-uid="element-1775114870176-294">The Garage</li>
              <li className="text-base" data-uid="element-1775114870176-295">Care</li>
              <li className="text-base" data-uid="element-1775114870177-296">FAQ</li>
              <li className="text-base" data-uid="element-1775114870177-297">Returns and Exchanges</li>
              <li className="text-base" data-uid="element-1775114870177-298">Contact Us</li>
            </ul>
          </div>;
      case "about":
        return <div className="mt-4" data-uid="element-1775114870177-299">
            <ul className="flex flex-col gap-4 font-semibold" data-uid="element-1775114870177-300">
              <li className="text-lg uppercase" data-uid="element-1775114870177-301">about us</li>
              <li className="text-lg uppercase" data-uid="element-1775114870177-302">craftmanship</li>
              <li className="text-lg uppercase" data-uid="element-1775114870177-303">vault</li>
              <li className="text-lg uppercase" data-uid="element-1775114870177-304">the garage</li>
            </ul>
            <div className="w-full" data-uid="element-1775114870177-305">
              <Image src="/about.webp" width={1400} height={900} alt="men" data-uid="component-1775114870177-306" />
            </div>
          </div>;
      default:
        return null;
    }
  };
  useEffect(() => {
    if (menuOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, {
        x: "-100vw",
        opacity: 1
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }, [menuOpen]);
  return <div className="bg-white text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6 border-b border-gray-200" data-uid="element-1775114870177-307">
      {/* Hamburger and menu for mobile */}
      <div className="flex items-center md:hidden" data-uid="element-1775114870177-308">
        <button onClick={() => setMenuOpen(!menuOpen)} className="mr-4" data-uid="element-1775114870177-309">
          <GiHamburgerMenu size={28} data-uid="component-1775114870177-310" />
        </button>
        {menuOpen && <motion.div ref={modalRef} initial={{
        x: "-100vw",
        opacity: 1
      }} animate={{
        x: 0,
        opacity: 1
      }} exit={{
        x: "-100vw",
        opacity: 0
      }} transition={{
        duration: 0.5,
        ease: "easeInOut"
      }} className="fixed top-0 left-0 w-screen h-screen overflow-y-auto bg-white shadow-lg z-50 flex flex-col" data-uid="element-1775114870177-311">
            <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm" data-uid="element-1775114870177-312">
              🎉Apply FLAT400 at checkout to get 400 off🎉
            </div>
            <div className="bg-[#2765FA] text-black flex w-full justify-between items-center px-4 py-6 md:px-12 md:py-6" data-uid="element-1775114870177-313">
              <button onClick={() => setMenuOpen(!menuOpen)} className="mr-4 text-white" data-uid="element-1775114870177-314">
                <AiOutlineClose size={28} data-uid="component-1775114870177-315" />
              </button>
              <Link className="flex-1 flex justify-center md:justify-start" href={"/"} data-uid="component-1775114870177-316">
                <div className="font-bold text-4xl cursor-pointer text-white" data-uid="element-1775114870177-317">
                  COMET
                </div>
              </Link>
              <div className="flex items-center gap-6 text-white" data-uid="element-1775114870177-318">
                <FaUserCircle size={28} data-uid="component-1775114870177-319" />
                <div className="relative ml-4" data-uid="element-1775114870177-320">
                  <FiShoppingCart size={28} data-uid="component-1775114870177-321" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5" data-uid="element-1775114870177-322">
                    3
                  </span>
                </div>
              </div>
            </div>
            <div className="ml-8" data-uid="element-1775114870177-323">
              <ul className="flex gap-8 mt-2 text-lg font-bold uppercase" data-uid="element-1775114870177-324">
                <li onClick={() => setSelected("men")} className={` ${selected === "men" ? getColor("men") : "text-black"}`} data-uid="element-1775114870177-325">
                  Men
                </li>

                <li onClick={() => setSelected("women")} className={` ${selected === "women" ? getColor("women") : "text-black"}`} data-uid="element-1775114870177-326">
                  Women
                </li>

                <li onClick={() => setSelected("about")} className={` ${selected === "about" ? getColor("about") : "text-black"}`} data-uid="element-1775114870177-327">
                  About Us
                </li>
              </ul>

              <div data-uid="element-1775114870177-328">{renderContent()}</div>
            </div>
            <div className="h-0.5 bg-gray-400 w-full my-4" data-uid="element-1775114870177-329" />
            <div className="ml-8" data-uid="element-1775114870177-330">
              <div className="flex items-center gap-2" data-uid="element-1775114870177-331">
                <span data-uid="element-1775114870177-332">
                  <FaUserCircle size={24} data-uid="component-1775114870177-333" />
                </span>
                <span className="text-xl font-semibold uppercase" data-uid="element-1775114870177-334">Log in</span>
              </div>
              <div className="flex items-center gap-4 mt-4" data-uid="element-1775114870177-335">
                <span data-uid="element-1775114870177-336">
                  <FaInstagram size={24} data-uid="component-1775114870177-337" />
                </span>
                <span data-uid="element-1775114870177-338">
                  <FaLinkedinIn size={24} data-uid="component-1775114870177-339" />
                </span>
              </div>
            </div>
          </motion.div>}
      </div>
      {/* Logo center on mobile, left on desktop */}
      <div className="flex-1 flex justify-center md:justify-start" data-uid="element-1775114870177-340">
        <div className="font-bold text-4xl cursor-pointer" onClick={() => router.push("/")} data-uid="element-1775114870177-341">
          COMET
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex px-12" data-uid="element-1775114870177-342">
        <ul className="flex justify-between items-center font-bold" data-uid="element-1775114870177-343">
          <li className="inline px-8" data-uid="element-1775114870177-344">
            <button className="cursor-pointer" onClick={() => {
            setMen(!men);
            setWomen(false);
          }} data-uid="element-1775114870177-345">
              <div className="flex justify-center items-center gap-2" data-uid="element-1775114870177-346">
                <span data-uid="element-1775114870177-347">Men</span>
                <span data-uid="element-1775114870177-348">{men ? <FiChevronUp data-uid="component-1775114870177-349" /> : <FiChevronDown data-uid="component-1775114870177-350" />}</span>
              </div>
              <div className={`h-1 ${men ? "bg-[#ECEB0B]" : "bg-transparent"} w-5/8 mt-1`} data-uid="element-1775114870177-351" />
            </button>
          </li>
          <li className="inline px-8" data-uid="element-1775114870177-352">
            <button className="cursor-pointer" onClick={() => {
            setWomen(!women);
            setMen(false);
          }} data-uid="element-1775114870177-353">
              <div className="flex justify-center items-center gap-2" data-uid="element-1775114870177-354">
                <span data-uid="element-1775114870177-355">Women</span>
                <span data-uid="element-1775114870177-356">{women ? <FiChevronUp data-uid="component-1775114870177-357" /> : <FiChevronDown data-uid="component-1775114870177-358" />}</span>
              </div>
              <div className={`h-1 ${women ? "bg-[#ECEB0B]" : "bg-transparent"} w-3/4 mt-1`} data-uid="element-1775114870177-359" />
            </button>
          </li>
          <li className="inline px-8" data-uid="element-1775114870177-360">
            <button className="cursor-pointer" onClick={() => {}} data-uid="element-1775114870177-361">
              The Vault
              <div className="h-1 w-full mt-1" data-uid="element-1775114870178-362" />
            </button>
          </li>
          <li className="inline px-8" data-uid="element-1775114870178-363">
            <button className="cursor-pointer" onClick={() => {}} data-uid="element-1775114870178-364">
              About Us
              <div className="h-1 w-full mt-1" data-uid="element-1775114870178-365" />
            </button>
          </li>
        </ul>
      </div>
      {/* Profile and cart icons right on mobile, right on desktop */}
      <div className="flex items-center gap-6" data-uid="element-1775114870178-366">
        <FaUserCircle size={28} data-uid="component-1775114870178-367" />
        <button onClick={() => {
        setCartOpen(!cartOpen);
      }} className="relative ml-4 cursor-pointer" data-uid="element-1775114870178-368">
          <FiShoppingCart size={28} data-uid="component-1775114870178-369" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5" data-uid="element-1775114870178-370">
            3
          </span>
        </button>
      </div>
      {men && <div className="absolute top-30 left-0 w-full bg-white shadow-lg z-40 px-12 py-6 " data-uid="element-1775114870178-371">
          <div className="w-full flex justify-center items-start" data-uid="element-1775114870178-372">
            <div className="w-6/8 flex items-center gap-4 justify-center border-r border-r-black" data-uid="element-1775114870178-373">
              <div className="w-1/3 m-2" onClick={() => {
            router.push("/collection");
          }} data-uid="element-1775114870178-374">
                <Image src="/x.webp" width={700} height={600} alt="men" data-uid="component-1775114870178-375" />
              </div>
              <div className="w-1/3  m-2" data-uid="element-1775114870178-376">
                <Image src="/y.webp" width={700} height={600} alt="men" data-uid="component-1775114870178-377" />
              </div>
              <div className="w-1/3 m-2 mr-4 flex flex-col gap-2" data-uid="element-1775114870178-378">
                <div className=" m-2" data-uid="element-1775114870178-379">
                  <Image src="/p.webp" width={280} height={290} alt="men" data-uid="component-1775114870178-380" />
                </div>
                <div className="m-2" data-uid="element-1775114870178-381">
                  <Image src="/q.webp" width={280} height={290} alt="men" data-uid="component-1775114870178-382" />
                </div>
              </div>
            </div>
            <div className="w-2/8 flex items-start" data-uid="element-1775114870178-383">
              <ul className="flex flex-col gap-2 font-semibold mt-8 ml-8" data-uid="element-1775114870178-384">
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-385">New in</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-386">Gifting Guide</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-387">
                  We Made Too Much
                </li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-388">Member's CLub</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-389">Accessories</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-390">The Garage</li>
              </ul>
            </div>
          </div>
        </div>}
      {women && <div className="absolute top-30 left-0 w-full bg-white shadow-lg z-40 px-12 py-6 " data-uid="element-1775114870178-391">
          <div className="w-full flex justify-center items-start" data-uid="element-1775114870178-392">
            <div className="w-6/8 flex items-center gap-4 justify-center border-r border-r-black" data-uid="element-1775114870178-393">
              <div className="w-1/3 m-2" data-uid="element-1775114870178-394">
                <Image src="/a.webp" width={700} height={600} alt="men" data-uid="component-1775114870178-395" />
              </div>
              <div className="w-1/3  m-2" data-uid="element-1775114870178-396">
                <Image src="/b.webp" width={700} height={600} alt="men" data-uid="component-1775114870178-397" />
              </div>
              <div className="w-1/3 m-2 mr-4 flex flex-col gap-2" data-uid="element-1775114870178-398">
                <div className=" m-2" data-uid="element-1775114870178-399">
                  <Image src="/c.webp" width={280} height={290} alt="men" data-uid="component-1775114870178-400" />
                </div>
                <div className="m-2" data-uid="element-1775114870178-401">
                  <Image src="/d.webp" width={280} height={290} alt="men" data-uid="component-1775114870178-402" />
                </div>
              </div>
            </div>
            <div className="w-2/8 flex items-start" data-uid="element-1775114870178-403">
              <ul className="flex flex-col gap-2 font-semibold mt-8 ml-8" data-uid="element-1775114870178-404">
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-405">New in</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-406">Gifting Guide</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-407">
                  We Made Too Much
                </li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-408">Member's CLub</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-409">Accessories</li>
                <li className="text-lg hover:text-[#ECEB0B]" data-uid="element-1775114870178-410">The Garage</li>
              </ul>
            </div>
          </div>
        </div>}
      {cartOpen && <div className="fixed top-0 right-0 w-screen bg-white shadow-2xl z-50" data-uid="element-1775114870178-411">
          <div className="fixed top-0 left-0 w-1/8 md:w-2/3 h-screen bg-black/50 z-50" onClick={() => setCartOpen(false)} data-uid="element-1775114870178-412" />

          <div className="fixed top-0 right-0 w-7/8 md:w-1/3 bg-white z-60 h-screen" data-uid="element-1775114870178-413">
            {/* HEADER */}
            <div className="flex justify-between items-center py-4 px-6" data-uid="element-1775114870178-414">
              <h2 className="font-semibold text-base sm:text-lg md:text-xl" data-uid="element-1775114870178-415">
                CART
              </h2>
              <button onClick={() => setCartOpen(false)} data-uid="element-1775114870178-416">
                <FiX size={20} data-uid="component-1775114870178-417" />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col gap-4 py-4 px-6 overflow-y-auto h-[calc(100vh-300px)] scrollbar-hide" data-uid="element-1775114870178-418">
              {cartItems.map((item, index) => <div key={item.name} className="flex items-start justify-between" data-uid="element-1775114870178-419">
                  <div className="flex items-start gap-2" data-uid="element-1775114870178-420">
                    <Image src={item.image} alt={item.name} width={100} height={100} data-uid="component-1775114870178-421" />

                    <div data-uid="element-1775114870178-422">
                      <div className="mb-12" data-uid="element-1775114870178-423">
                        <h3 className="font-semibold cursor-pointer hover:underline
                               text-sm sm:text-base md:text-lg" data-uid="element-1775114870178-424">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-1" data-uid="element-1775114870178-425">
                          <p className="uppercase font-semibold
                                text-xs sm:text-sm" data-uid="element-1775114870178-426">
                            SIZE:
                          </p>
                          <p className="text-xs sm:text-sm md:text-base" data-uid="element-1775114870178-427">
                            {item.size}
                          </p>
                        </div>
                      </div>

                      {/* GIFT WRAP */}
                      <div className="flex items-center gap-2 cursor-pointer select-none text-gray-800" onClick={() => {
                  const updated = [...cartItems];
                  updated[index].giftWrap = !updated[index].giftWrap;
                  setCartItems(updated);
                }} data-uid="element-1775114870178-428">
                        {item.giftWrap ? <FaRegCheckSquare className="text-base sm:text-lg" data-uid="component-1775114870178-429" /> : <FaRegSquare className="text-base sm:text-lg" data-uid="component-1775114870178-430" />}
                        <MdCardGiftcard className="text-base sm:text-lg" data-uid="component-1775114870178-431" />
                        <p className="italic text-xs sm:text-sm" data-uid="element-1775114870178-432">
                          Add free GIFT WRAP
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PRICE & QTY */}
                  <div className="flex flex-col justify-between" data-uid="element-1775114870178-433">
                    <p className="font-medium
                          text-xs sm:text-sm md:text-base" data-uid="element-1775114870179-434">
                      ₹{item.price.toLocaleString("en-IN")}
                    </p>

                    <div className="border border-gray-400 flex gap-2 items-center justify-center px-2 py-1" data-uid="element-1775114870179-435">
                      <FiChevronDown className="cursor-pointer text-sm sm:text-base" onClick={() => {
                  const updated = [...cartItems];
                  if (updated[index].quantity > 1) {
                    updated[index].quantity -= 1;
                  } else {
                    updated.splice(index, 1);
                  }
                  setCartItems(updated);
                }} data-uid="component-1775114870179-436" />
                      <span className="text-xs sm:text-sm md:text-base" data-uid="element-1775114870179-437">
                        {item.quantity}
                      </span>
                      <FiChevronUp className="cursor-pointer text-sm sm:text-base" onClick={() => {
                  const updated = [...cartItems];
                  updated[index].quantity += 1;
                  setCartItems(updated);
                }} data-uid="component-1775114870179-438" />
                    </div>
                  </div>
                </div>)}
              <div className="h-40" data-uid="element-1775114870179-439" />
            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-500 pt-8 fixed bottom-0 right-0 w-7/8 md:w-1/3 bg-white" data-uid="element-1775114870179-440">
              <div className="flex gap-4 text-gray-700 px-8
                      text-xs sm:text-sm" data-uid="element-1775114870179-441">
                <p data-uid="element-1775114870179-442">Free 7 day Returns & Exchanges</p>
                <p data-uid="element-1775114870179-443">Free Shipping</p>
              </div>

              <div className="flex justify-between font-bold uppercase px-10 py-8" data-uid="element-1775114870179-444">
                <p className="text-sm sm:text-lg md:text-xl" data-uid="element-1775114870179-445">Total:</p>
                <p className="text-sm sm:text-lg md:text-xl" data-uid="element-1775114870179-446">
                  ₹
                  {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString("en-IN")}
                </p>
              </div>

              <button className="py-4 w-full bg-[#ECEB0B] font-bold uppercase cursor-pointer
                         text-lg sm:text-xl md:text-2xl" data-uid="element-1775114870179-447">
                Checkout
              </button>
            </div>
          </div>
        </div>}
    </div>;
};
export default Navbar;