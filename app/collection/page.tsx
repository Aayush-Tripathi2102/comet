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
  return (
    <main>
      <div className="bg-[#1f1f1f] flex w-full justify-center items-center text-[#eceb0b] py-2 text-sm">
        🎉Apply FLAT400 at checkout to get 400 off🎉
      </div>
      <Navbar />
      <div className="w-full bg-white">
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-semibold px-10 pt-10">SNEAKERS</h1>

        {/* NAV TABS */}
        <div className="flex flex-col md:flex-row items-center gap-10 text-xs md:text-sm font-medium px-10 mt-6 text-gray-600">
          <div className="flex gap-2 md:gap-8">
            <button className="text-black underline-offset-4 hover:underline">
              VIEW ALL
            </button>
            <button className="hover:text-black">AEON V2</button>
            <button className="hover:text-black">ALTER</button>
            <button className="hover:text-black">MEMBER&apos;S CLUB</button>
            <button className="hover:text-black">X LOWS</button>
          </div>

          <div className="ml-auto flex items-center gap-8">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <FiChevronDown size={14} />
              Sort By
            </button>

            <button className="flex items-center gap-2 text-gray-700 hover:text-black">
              <FiFilter size={16} />
              Filters
            </button>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 border-t border-gray-300">
          {shoes.map((shoe) => (
            <Link
              key={shoe.id}
              href={`/product/${shoe.id}`}
              className="border-b border-r border-gray-300 p-6 cursor-pointer hover:bg-gray-50 block"
            >
              {/* TAG BADGES */}
              {shoe.tag ? (
                <span
                  className={`px-3 py-1 text-xs font-semibold text-white ${
                    shoe.tag === "RESTOCKED" ? "bg-yellow-600" : "bg-red-500"
                  }`}
                >
                  {shoe.tag}
                </span>
              ) : (
                <span
                  className={`px-3 py-1 text-xs font-semibold text-white bg-white`}
                >
                  Comet
                </span>
              )}

              {/* IMAGE */}
              <div className="mt-3 w-full">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  width={400}
                  height={300}
                  className="w-full object-contain"
                />
              </div>

              {/* NAME + TYPE + PRICE */}
              <div className="mt-4 w-full flex justify-between item-start">
                <div>
                  <h3 className="font-semibold text-xs md:text-lg">
                    {shoe.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{shoe.type}</p>
                </div>

                <p className="mt-2 text-right font-medium">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Appriciate />
      <Reviews />
      <GiftCard />
      <Banner />
      <Features />
      <Footer />
    </main>
  );
};

export default page;
