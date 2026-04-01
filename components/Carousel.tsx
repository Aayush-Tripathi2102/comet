"use client";

import { useRef } from "react";
import { shoes } from "@/lib/constants";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "@/app/globals.css";
export default function ShoeCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -350 : 350;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };
  return <div className="relative w-full bg-[#f6f6f6]" data-uid="element-1775085187961-130">
      {/* Left Button */}
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400/60 hover:bg-gray-500 text-white rounded-full p-2" data-uid="element-1775085187961-131">
        <IoChevronBack size={20} data-uid="element-1775085187961-132" />
      </button>

      {/* Carousel Items */}
      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide scroll-smooth" data-uid="element-1775085187961-133">
        {shoes.map((shoe, index) => <div key={index} className="min-w-96 cursor-pointer group select-none border border-black border-r-0" data-uid="element-1775085187961-134">
            <div className="relative" data-uid="element-1775085187961-135">
              {shoe.tag && <span className={`absolute top-3 left-0 text-sm font-bold px-2 py-1 ${shoe.tag === "BESTSELLER" ? "bg-[#ff6666] text-white" : "bg-[#412925] text-white"}`} data-uid="element-1775085187961-136">
                  {shoe.tag}
                </span>}

              <Image src={shoe.image} alt={shoe.name} width={1000} height={720} className="rounded-md" data-uid="element-1775085187961-137" />
            </div>

            <div className="px-4 py-3 w-full flex justify-between items-center" data-uid="element-1775085187961-138">
              <div data-uid="element-1775085187961-139">
                <h3 className="mt-3 font-medium text-black uppercase" data-uid="element-1775085187961-140">
                  {shoe.name}
                </h3>
                <p className="text-sm text-gray-500" data-uid="element-1775085187961-141">{shoe.type}</p>
              </div>
              <p className="text-black" data-uid="element-1775085187961-142">₹ {shoe.price}</p>
            </div>
          </div>)}
      </div>

      {/* Right Button */}
      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-400/60 hover:bg-gray-500 text-white rounded-full p-2" data-uid="element-1775085187961-143">
        <IoChevronForward size={20} data-uid="element-1775085187961-144" />
      </button>
    </div>;
}