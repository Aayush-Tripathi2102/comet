import React from "react";
const VideoBg = () => {
  return <div className="relative w-full h-[30vh] md:h-[65vh] overflow-hidden" data-uid="element-1775085188008-468">
      {/* Background Video */}
      <video src="/vault.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover hidden md:block" data-uid="element-1775085188008-469" />

      <video src="/vault-mobile.mp4" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover md:hidden block" data-uid="element-1775085188008-470" />

      {/* Overlay Text + Buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center" data-uid="element-1775085188008-471">
        <div className="ml-10 md:ml-20 text-white space-y-1 md:space-y-6 max-w-[50%] select-none pointer-events-none" data-uid="element-1775085188008-472">
          <h2 className="text-sm md:text-3xl" data-uid="element-1775085188008-473">The Vault</h2>
          <h1 className="text-lg md:text-5xl font-extrabold tracking-wide font-condensed" data-uid="element-1775085188008-474">
            DROPS LIBRARY
          </h1>

          <div className="flex gap-6 pointer-events-auto" data-uid="element-1775085188008-475">
            <button className="bg-[#eceb0b] text-black font-bold px-4 py-2 md:px-10 md:py-4 text-xs hover:bg-yellow-400 transition" data-uid="element-1775085188008-476">
              ENTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default VideoBg;