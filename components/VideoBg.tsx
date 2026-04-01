import React from "react";
const VideoBg = () => {
  return <div className="relative w-full h-[80vh] md:h-[65vh] overflow-hidden" data-uid="element-1775085188009-477">
      {/* Background Video */}
      <video src="/videobg.mp4" autoPlay loop muted playsInline className="absolute hidden sm:block top-0 left-0 w-full h-full object-cover" data-uid="element-1775085188009-478" />

      <video src="/videobg-mobile.mp4" autoPlay loop muted playsInline className="absolute sm:hidden block top-0 left-0 w-full h-full object-cover" data-uid="element-1775085188009-479" />

      {/* Overlay Text + Buttons */}
      <div className="absolute top-10 left-0 w-full h-1/4 flex items-center justify-center pt-12 sm:pt-0" data-uid="element-1775085188009-480">
        <div className="ml-4 text-white space-y-6 max-w-full md:max-w-[50%] select-none pointer-events-none" data-uid="element-1775085188009-481">
          <h2 className="text-lg sm:text-3xl text-center" data-uid="element-1775085188009-482">Good Shoes</h2>
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-wide text-center md:text-left font-condensed" data-uid="element-1775085188009-483">
            TAKE YOU PLACES
          </h1>

          <div className="flex gap-4 md:gap-6 pointer-events-auto justify-center md:justify-start" data-uid="element-1775085188009-484">
            <button className="bg-[#eceb0b] text-black font-bold px-6 md:px-10 py-2 md:py-4 text-xs sm:text-lg  hover:bg-yellow-400 transition" data-uid="element-1775085188009-485">
              SHOP MEN
            </button>
            <button className="bg-[#eceb0b] text-black font-bold px-6 md:px-10 py-2 md:py-4 text-xs sm:text-lg  hover:bg-yellow-400 transition" data-uid="element-1775085188009-486">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default VideoBg;