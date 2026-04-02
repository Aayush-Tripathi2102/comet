"use client";

import Appriciate from "@/components/Appriciate";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GiftCard from "@/components/GiftCard";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import { shoes } from "@/lib/constants";
import { FiFilter, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
const page = () => {
  return <main data-uid="element-1775114870105-0">
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm" data-uid="element-1775114870105-1">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar data-uid="component-1775114870105-2" />
      <div className="w-full bg-white" data-uid="element-1775114870105-3">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold px-10 pt-10" data-uid="element-1775114870105-4">SNEAKERS</h1>

        {/* NAV TABS */}
        <div className="flex flex-col md:flex-row items-center gap-10 text-xs md:text-sm font-medium px-10 mt-6 text-gray-600" data-uid="element-1775114870106-5">
          <div className="flex gap-2 md:gap-8" data-uid="element-1775114870106-6">
            <button className="text-black underline-offset-4 hover:underline" data-uid="element-1775114870106-7">
              VIEW ALL
            </button>
            <button className="hover:text-black" data-uid="element-1775114870106-8">AEON V2</button>
            <button className="hover:text-black" data-uid="element-1775114870106-9">ALTER</button>
            <button className="hover:text-black" data-uid="element-1775114870106-10">MEMBER&apos;S CLUB</button>
            <button className="hover:text-black" data-uid="element-1775114870106-11">X LOWS</button>
          </div>

          <div className="ml-auto flex items-center gap-8" data-uid="element-1775114870106-12">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black" data-uid="element-1775114870106-13">
              <FiChevronDown size={14} data-uid="component-1775114870106-14" />
              Sort By
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-black" data-uid="element-1775114870106-15">
              <FiFilter size={16} data-uid="component-1775114870106-16" />
              Filters
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-gray-300" data-uid="element-1775114870106-17">
          {shoes.map(shoe => <Link key={shoe.id} href={`/product/${shoe.id}`} className="border-b border-r border-gray-300 p-6 cursor-pointer hover:bg-gray-50 block" data-uid="component-1775114870107-18">
              {/* TAG BADGES */}
              {shoe.tag ? <span className={`px-3 py-1 text-xs font-semibold text-white ${shoe.tag === "RESTOCKED" ? "bg-yellow-600" : "bg-red-500"}`} data-uid="element-1775114870107-19">
                  {shoe.tag}
                </span> : <span className={`px-3 py-1 text-xs font-semibold text-white bg-white`} data-uid="element-1775114870107-20">
                  Comet
                </span>}

              {/* IMAGE */}
              <div className="mt-3 w-full" data-uid="element-1775114870107-21">
                <Image src={shoe.image} alt={shoe.name} width={400} height={300} className="w-full object-contain" data-uid="component-1775114870107-22" />
              </div>

              {/* NAME + TYPE + PRICE */}
              <div className="mt-4 w-full flex justify-between item-start" data-uid="element-1775114870107-23">
                <div data-uid="element-1775114870107-24">
                  <h3 className="font-semibold text-xs md:text-lg" data-uid="element-1775114870107-25">
                    {shoe.name}
                  </h3>
                  <p className="text-gray-500 text-sm" data-uid="element-1775114870108-26">{shoe.type}</p>
                </div>

                <p className="mt-2 text-right font-medium" data-uid="element-1775114870108-27">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>)}
        </div>
      </div>
      <Appriciate data-uid="component-1775114870108-28" />
      <Reviews data-uid="component-1775114870108-29" />
      <GiftCard data-uid="component-1775114870108-30" />
      <Banner data-uid="component-1775114870108-31" />
      <Features data-uid="component-1775114870108-32" />
      <Footer data-uid="component-1775114870108-33" />
    </main>;
};
export default page;