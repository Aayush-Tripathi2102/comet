import Image from "next/image";
import React from "react";
const Banner = () => {
  return <div className="w-full relative text-5xl font-condensed font-bold bg-[#ECEB0B] text-[#1F1F1F] uppercase  py-12 border-b-2 border-black" data-uid="element-1775114870148-122">
      <div className="flex gap-8  items-center pb-8" data-uid="element-1775114870148-123">
        <Image src="/cross.webp" width={40} height={40} alt="cross" className="hidden md:inline" data-uid="component-1775114870148-124" />
        <Image src="/star.webp" width={40} height={40} alt="cross" className="hidden md:inline" data-uid="component-1775114870148-125" />
        <Image src="/headphone.webp" width={40} height={40} alt="cross" className="hidden md:inline" data-uid="component-1775114870148-126" />
      </div>
      <p className="bg-[#FF5271] px-6 py-4  ml-10 hidden md:inline-block rot-10 mr-2" data-uid="element-1775114870148-127">
        good shoes
      </p>
      <div className="md:hidden inline-block w-full py-4 bg-[#FF5271] rot-10 text-center text-4xl font-bold" data-uid="element-1775114870148-128">
        good shoes
      </div>
      <p className="mt-4 md:mt-0 ml-10 md:ml-0 inline-block" data-uid="element-1775114870148-129">
        Will take you to good places
      </p>
    </div>;
};
export default Banner;