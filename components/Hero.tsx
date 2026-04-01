import Image from "next/image";
import React from "react";
const Hero = () => {
  return <div className="relative" data-uid="element-1775085187982-251">
      {/* Responsive image: hero-pc.jpg for md+, hero.jpg for <md */}
      <div className="block sm:hidden" data-uid="element-1775085187982-252">
        <Image src={"/hero.jpg"} width={2000} height={1000} alt="Comet Banner" data-uid="element-1775085187982-253" />
      </div>
      <div className="hidden sm:block" data-uid="element-1775085187982-254">
        <Image src={"/hero-pc.jpg"} width={2000} height={1000} alt="Comet Banner" data-uid="element-1775085187982-255" />
      </div>
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/4 md:h-full flex flex-col justify-center pointer-events-none pt-24 md:pt-0" style={{
      zIndex: 2
    }} data-uid="element-1775085187982-256">
        <div className="text-white text-center" data-uid="element-1775085187982-257">
          <h2 className="text-lg md:text-4xl mb-4" data-uid="element-1775085187982-258">
            Perfectly balanced as always
          </h2>
          <h1 className="text-2xl md:text-5xl font-extrabold mb-8 tracking-wide font-condensed" data-uid="element-1775085187982-259">
            X LOWS CORTADO
          </h1>
          <div className="flex gap-8 justify-center" data-uid="element-1775085187982-260">
            <button className="bg-[#eceb0b] text-black font-bold px-8 py-2 md:px-10 md:py-4 text-xs sm:text-lg hover:bg-yellow-400 transition" data-uid="element-1775085187982-261">
              SHOP MEN
            </button>
            <button className="bg-[#eceb0b] text-black font-bold px-8 py-2 md:px-10 md:py-4 text-xs sm:text-lg hover:bg-yellow-400 transition" data-uid="element-1775085187982-262">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;