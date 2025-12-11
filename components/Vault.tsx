import React from "react";

const VideoBg = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[65vh] overflow-hidden">
      {/* Background Video */}
      <video
        src="/vault.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
      />

      <video
        src="/vault-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden block"
      />

      {/* Overlay Text + Buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="ml-10 md:ml-20 text-white space-y-1 md:space-y-6 max-w-[50%] select-none pointer-events-none">
          <h2 className="text-sm md:text-3xl">The Vault</h2>
          <h1 className="text-lg md:text-5xl font-extrabold tracking-wide font-condensed">
            DROPS LIBRARY
          </h1>

          <div className="flex gap-6 pointer-events-auto">
            <button className="bg-[#eceb0b] text-black font-bold px-4 py-2 md:px-10 md:py-4 text-xs hover:bg-yellow-400 transition">
              ENTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBg;
