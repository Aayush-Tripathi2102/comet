"use client";

import React from "react";
import { shoes } from "@/lib/constants";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import Appriciate from "@/components/Appriciate";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
export default function ProductPage({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const {
    id
  } = React.use(params);
  const shoe = shoes[parseInt(id, 10)];
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null);
  if (!shoe) {
    return <div className="p-10 text-center text-2xl" data-uid="page-1775085187951-50">Product not found {id}</div>;
  }
  return <>
      <Navbar data-uid="page-1775085187951-51" />
      <div className="md:flex block mt-12 gap-4 w-full" data-uid="page-1775085187951-52">
        <div className="w-full md:w-6/10 overflow-y-auto h-screen px-4 scrollbar-hide" data-uid="page-1775085187951-53">
          {shoe.images.map((imgSrc, index) => <Image key={index} src={imgSrc} alt={shoe.name} width={600} height={600} className="mb-4" data-uid="page-1775085187951-54" />)}
        </div>
        <div className="w-full md:w-4/10 px-4 md:px-0 md:pr-4" data-uid="page-1775085187951-55">
          <div className="flex justify-between items-start pb-4 border-b border-gray-200" data-uid="page-1775085187951-56">
            <div data-uid="page-1775085187951-57">
              <h1 className="text-lg font-bold uppercase font-condensed mb-2" data-uid="page-1775085187951-58">
                {shoe.name}
              </h1>
              <p className="text-xs text-gray-500" data-uid="page-1775085187951-59">
                Limited Edition. 800 pairs only.
              </p>
            </div>
            <div data-uid="page-1775085187951-60">
              <div data-uid="page-1775085187951-61">
                <span className="text-lg font-bold" data-uid="page-1775085187951-62">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-gray-500" data-uid="page-1775085187951-63">MRP</span>
              </div>
              <div data-uid="page-1775085187951-64">
                <span className="text-xs text-gray-500" data-uid="page-1775085187951-65">
                  Inclusive of all taxes
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200" data-uid="page-1775085187951-66">
            <h2 className="text-md font-medium my-4" data-uid="page-1775085187951-67">COLOR</h2>
            <div className="flex gap-2" data-uid="page-1775085187951-68">
              {shoe.images.map((imgSrc, index) => <div key={index} className="w-30 h-30 overflow-hidden cursor-pointer" data-uid="page-1775085187951-69">
                  <Image src={imgSrc} alt={`${shoe.name} color ${index + 1}`} width={400} height={400} className="object-cover w-full h-full" data-uid="page-1775085187951-70" />
                </div>)}
            </div>
            <div className="cursor-pointer pb-4" data-uid="page-1775085187951-71">See All</div>
          </div>
          <div data-uid="page-1775085187951-72">
            <h2 className="text-md font-medium my-4" data-uid="page-1775085187951-73">SIZE(UK):</h2>
            <div className="flex flex-wrap gap-2 w-3/4" data-uid="page-1775085187951-74">
              {Array.from({
              length: 10
            }, (_, index) => {
              const size = index + 3;
              const isSelected = selectedSize === size;
              return <div key={index} className={`w-10 h-10 flex justify-center items-center overflow-hidden cursor-pointer border-2 transition-all ${isSelected ? "border-black" : "border-white"}`} onClick={() => setSelectedSize(size)} data-uid="page-1775085187951-75">
                    <span className="text-md" data-uid="page-1775085187951-76">{size}</span>
                  </div>;
            })}
            </div>
          </div>
          <div className="mt-8 w-full bg-gray-100 py-6 px-4" data-uid="page-1775085187951-77">
            <h2 className="text-lg font-bold text-blue-600 uppercase" data-uid="page-1775085187951-78">
              Apply FLAT400
            </h2>
            <p className="text-sm" data-uid="page-1775085187951-79">
              Apply FLAT400 at checkout to avail ₹ 400 off!
            </p>
          </div>
          <button className={`mt-2 w-full py-6 border-2 font-bold text-lg transition-all ${selectedSize ? "bg-[#ECEB0B] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`} disabled={!selectedSize} data-uid="page-1775085187951-80">
            {selectedSize ? "ADD TO CART" : "SELECT SIZE"}
          </button>
          <div className="my-4 text-xs text-gray-700" data-uid="page-1775085187951-81">
            Your product will be dispatched by 19th December.
          </div>
          <div className="w-full bg-gray-200 text-xs p-4" data-uid="page-1775085187951-82">
            <div data-uid="page-1775085187951-83">Free 7‑day returns and exchanges</div>
            <div data-uid="page-1775085187951-84">Free shipping</div>
            <div data-uid="page-1775085187951-85">Delivery in 3-5 days</div>
          </div>
        </div>
      </div>
      <div className="my-20 px-10" data-uid="page-1775085187951-86">
        <h1 className="text-2xl font-bold font-condensed mb-12" data-uid="page-1775085187951-87">REVIEWS</h1>
        {shoe.Reviews?.map((review, index) => <div key={index} className="mb-8 border-b border-gray-200 pb-4 w-full" data-uid="page-1775085187951-88">
            <div className="flex justify-between items-start" data-uid="page-1775085187951-89">
              <div data-uid="page-1775085187951-90">
                <div className="flex gap-2 mb-2" data-uid="page-1775085187951-91">
                  <FaStar className="text-[#2765FA] text-2xl" data-uid="page-1775085187951-92" />
                  <FaStar className="text-[#2765FA] text-2xl" data-uid="page-1775085187951-93" />
                  <FaStar className="text-[#2765FA] text-2xl" data-uid="page-1775085187951-94" />
                  <FaStar className="text-[#2765FA] text-2xl" data-uid="page-1775085187951-95" />
                  <FaStar className="text-[#2765FA] text-2xl" data-uid="page-1775085187951-96" />
                </div>
                <div className="font-medium text-sm" data-uid="page-1775085187951-97">{review.name}</div>
              </div>
              <div className="text-xs" data-uid="page-1775085187951-98">{review.date}</div>
            </div>
            <div className="mt-2 font-bold text-lg " data-uid="page-1775085187952-99">{review.title}</div>
            <div className="mt-2 text-gray-900" data-uid="page-1775085187952-100">{review.review}</div>
            <div className="flex justify-end gap-2" data-uid="page-1775085187952-101">
              <FaThumbsUp className="text-blue-500 text-xl" data-uid="page-1775085187952-102" />
              <span className="text-blue-500" data-uid="page-1775085187952-103">{review.likes}</span>
            </div>
          </div>)}
      </div>
      <Appriciate data-uid="page-1775085187952-104" />
      <Banner data-uid="page-1775085187952-105" />
      <Features data-uid="page-1775085187952-106" />
      <Footer data-uid="page-1775085187952-107" />
    </>;
}