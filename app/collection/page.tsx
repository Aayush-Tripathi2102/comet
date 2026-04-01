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
  return <main data-uid="page-1775085187915-0">
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm" data-uid="page-1775085187916-1">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar data-uid="page-1775085187916-2" />
      <div className="w-full bg-white" data-uid="page-1775085187916-3">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold px-10 pt-10" data-uid="page-1775085187916-4">SNEAKERS</h1>

        {/* NAV TABS */}
        <div className="flex flex-col md:flex-row items-center gap-10 text-xs md:text-sm font-medium px-10 mt-6 text-gray-600" data-uid="page-1775085187916-5">
          <div className="flex gap-2 md:gap-8" data-uid="page-1775085187916-6">
            <button className="text-black underline-offset-4 hover:underline" data-uid="page-1775085187916-7">
              VIEW ALL
            </button>
            <button className="hover:text-black" data-uid="page-1775085187916-8">AEON V2</button>
            <button className="hover:text-black" data-uid="page-1775085187916-9">ALTER</button>
            <button className="hover:text-black" data-uid="page-1775085187916-10">MEMBER&apos;S CLUB</button>
            <button className="hover:text-black" data-uid="page-1775085187916-11">X LOWS</button>
          </div>

          <div className="ml-auto flex items-center gap-8" data-uid="page-1775085187916-12">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black" data-uid="page-1775085187916-13">
              <FiChevronDown size={14} data-uid="page-1775085187916-14" />
              Sort By
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-black" data-uid="page-1775085187916-15">
              <FiFilter size={16} data-uid="page-1775085187916-16" />
              Filters
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-gray-300" data-uid="page-1775085187916-17">
          {shoes.map(shoe => <Link key={shoe.id} href={`/product/${shoe.id}`} className="border-b border-r border-gray-300 p-6 cursor-pointer hover:bg-gray-50 block" data-uid="page-1775085187916-18">
              {/* TAG BADGES */}
              {shoe.tag ? <span className={`px-3 py-1 text-xs font-semibold text-white ${shoe.tag === "RESTOCKED" ? "bg-yellow-600" : "bg-red-500"}`} data-uid="page-1775085187916-19">
                  {shoe.tag}
                </span> : <span className={`px-3 py-1 text-xs font-semibold text-white bg-white`} data-uid="page-1775085187917-20">
                  Comet
                </span>}

              {/* IMAGE */}
              <div className="mt-3 w-full" data-uid="page-1775085187917-21">
                <Image src={shoe.image} alt={shoe.name} width={400} height={300} className="w-full object-contain" data-uid="page-1775085187917-22" />
              </div>

              {/* NAME + TYPE + PRICE */}
              <div className="mt-4 w-full flex justify-between item-start" data-uid="page-1775085187917-23">
                <div data-uid="page-1775085187917-24">
                  <h3 className="font-semibold text-xs md:text-lg" data-uid="page-1775085187917-25">
                    {shoe.name}
                  </h3>
                  <p className="text-gray-500 text-sm" data-uid="page-1775085187917-26">{shoe.type}</p>
                </div>

                <p className="mt-2 text-right font-medium" data-uid="page-1775085187917-27">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>)}
        </div>
      </div>
      <Appriciate data-uid="page-1775085187917-28" />
      <Reviews data-uid="page-1775085187917-29" />
      <GiftCard data-uid="page-1775085187917-30" />
      <Banner data-uid="page-1775085187917-31" />
      <Features data-uid="page-1775085187917-32" />
      <Footer data-uid="page-1775085187917-33" />
    </main>;
};
export default page;