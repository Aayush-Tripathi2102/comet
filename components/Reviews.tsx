"use client";

import { customerReviews } from "@/lib/constants";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useRef } from "react";
import GridLines from "react-gridlines";
import { IoStar } from "react-icons/io5";
const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  };
  return <div data-uid="element-1775114870186-448">
      <GridLines className="grid-area" cellWidth={50} strokeWidth={2} cellWidth2={50} data-uid="component-1775114870186-449">
        <div className="px-10 pb-20 lg:pb-10" data-uid="element-1775114870186-450">
          <h1 className="pt-10 pb-8 text-3xl font-extrabold font-condensed" data-uid="element-1775114870186-451">
            WHAT{`'`}RE THEY SAYING?
          </h1>
          <div className="relative w-full" data-uid="element-1775114870186-452">
            {/* Left Button */}
            <button onClick={() => scroll("left")} className="absolute left-30 -bottom-20 h-8 w-8 flex justify-between items-center lg:left-190 lg:top-5/6 -translate-y-1/2 z-10 bg-gray-400/60 hover:bg-gray-500 text-white rounded-full p-2" data-uid="element-1775114870186-453">
              <IoChevronBack size={20} data-uid="component-1775114870186-454" />
            </button>

            {/* Carousel Items */}
            <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth" data-uid="element-1775114870186-455">
              {customerReviews.map((review, index) => <div key={index} className="min-w-[280px] lg:min-w-5/6 bg-white border-2 border-[#2765FA] p-5 flex items-center text-center flex-col lg:flex-row" data-uid="element-1775114870186-456">
                  <Image src={review.image} alt={review.name} width={500} height={500} data-uid="component-1775114870186-457" />
                  <div className="flex w-[60%] flex-col items-center justify-center mt-4 mx-12" data-uid="element-1775114870186-458">
                    <div className="hidden md:flex justify-center items-center gap-2" data-uid="element-1775114870186-459">
                      {[...Array(5)].map((_, i) => <IoStar key={i} size={28} className="text-black" data-uid="component-1775114870186-460" />)}
                    </div>
                    <div className="flex md:hidden justify-center items-center gap-2" data-uid="element-1775114870186-461">
                      {[...Array(5)].map((_, i) => <IoStar key={i} size={18} className="text-black" data-uid="component-1775114870186-462" />)}
                    </div>
                    <p className="text-base md:text-2xl font-condensed text-gray-800 leading-relaxed mb-4 px-2 font-extrabold" data-uid="element-1775114870186-463">
                      "{review.title}"
                    </p>
                    <span className="text-xs md:text-base tracking-wide" data-uid="element-1775114870186-464">
                      {review.review}
                    </span>
                    <span className="text-xs md:text-base font-bold tracking-wide mt-8 md:mt-12" data-uid="element-1775114870186-465">
                      {review.name}
                    </span>
                  </div>
                </div>)}
            </div>

            {/* Right Button */}
            <button onClick={() => scroll("right")} className="absolute left-40 -bottom-20 h-8 w-8 flex justify-between items-center lg:left-200 lg:top-5/6 -translate-y-1/2 z-10 bg-gray-400/60 hover:bg-gray-500 text-white rounded-full p-2" data-uid="element-1775114870186-466">
              <IoChevronForward size={20} data-uid="component-1775114870186-467" />
            </button>
          </div>
        </div>
      </GridLines>
    </div>;
};
export default Reviews;