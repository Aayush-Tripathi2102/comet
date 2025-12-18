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
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const shoe = shoes[parseInt(id, 10)];
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null);

  if (!shoe) {
    return (
      <div className="p-10 text-center text-2xl">Product not found {id}</div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="md:flex block mt-12 gap-4 w-full">
        <div className="w-full md:w-6/10 overflow-y-auto h-screen px-4 scrollbar-hide">
          {shoe.images.map((imgSrc, index) => (
            <Image
              key={index}
              src={imgSrc}
              alt={shoe.name}
              width={600}
              height={600}
              className="mb-4"
            />
          ))}
        </div>
        <div className="w-full md:w-4/10 px-4 md:px-0 md:pr-4">
          <div className="flex justify-between items-start pb-4 border-b border-gray-200">
            <div>
              <h1 className="text-lg font-bold uppercase font-condensed mb-2">
                {shoe.name}
              </h1>
              <p className="text-xs text-gray-500">
                Limited Edition. 800 pairs only.
              </p>
            </div>
            <div>
              <div>
                <span className="text-lg font-bold">
                  ₹{shoe.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-gray-500">MRP</span>
              </div>
              <div>
                <span className="text-xs text-gray-500">
                  Inclusive of all taxes
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <h2 className="text-md font-medium my-4">COLOR</h2>
            <div className="flex gap-2">
              {shoe.images.map((imgSrc, index) => (
                <div
                  key={index}
                  className="w-30 h-30 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={imgSrc}
                    alt={`${shoe.name} color ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="cursor-pointer pb-4">See All</div>
          </div>
          <div>
            <h2 className="text-md font-medium my-4">SIZE(UK):</h2>
            <div className="flex flex-wrap gap-2 w-3/4">
              {Array.from({ length: 10 }, (_, index) => {
                const size = index + 3;
                const isSelected = selectedSize === size;
                return (
                  <div
                    key={index}
                    className={`w-10 h-10 flex justify-center items-center overflow-hidden cursor-pointer border-2 transition-all ${
                      isSelected ? "border-black" : "border-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <span className="text-md">{size}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 w-full bg-gray-100 py-6 px-4">
            <h2 className="text-lg font-bold text-blue-600 uppercase">
              Apply FLAT400
            </h2>
            <p className="text-sm">
              Apply FLAT400 at checkout to avail ₹ 400 off!
            </p>
          </div>
          <button
            className={`mt-2 w-full py-6 border-2 font-bold text-lg transition-all ${
              selectedSize
                ? "bg-[#ECEB0B] cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!selectedSize}
          >
            {selectedSize ? "ADD TO CART" : "SELECT SIZE"}
          </button>
          <div className="my-4 text-xs text-gray-700">
            Your product will be dispatched by 19th December.
          </div>
          <div className="w-full bg-gray-200 text-xs p-4">
            <div>Free 7‑day returns and exchanges</div>
            <div>Free shipping</div>
            <div>Delivery in 3-5 days</div>
          </div>
        </div>
      </div>
      <div className="my-20 px-10">
        <h1 className="text-2xl font-bold font-condensed mb-12">REVIEWS</h1>
        {shoe.Reviews?.map((review, index) => (
          <div
            key={index}
            className="mb-8 border-b border-gray-200 pb-4 w-full"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex gap-2 mb-2">
                  <FaStar className="text-[#2765FA] text-2xl" />
                  <FaStar className="text-[#2765FA] text-2xl" />
                  <FaStar className="text-[#2765FA] text-2xl" />
                  <FaStar className="text-[#2765FA] text-2xl" />
                  <FaStar className="text-[#2765FA] text-2xl" />
                </div>
                <div className="font-medium text-sm">{review.name}</div>
              </div>
              <div className="text-xs">{review.date}</div>
            </div>
            <div className="mt-2 font-bold text-lg ">{review.title}</div>
            <div className="mt-2 text-gray-900">{review.review}</div>
            <div className="flex justify-end gap-2">
              <FaThumbsUp className="text-blue-500 text-xl" />
              <span className="text-blue-500">{review.likes}</span>
            </div>
          </div>
        ))}
      </div>
      <Appriciate />
      <Banner />
      <Features />
      <Footer />
    </>
  );
}
