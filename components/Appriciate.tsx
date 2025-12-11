import Image from "next/image";
import React from "react";

const Appriciate = () => {
  return (
    <div className="mb-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10 font-condensed">
        AS APPRECIATED ON
      </h1>
      <div className="flex w-full justify-center items-center py-10 bg-[#f5f5f5]">
        {/* Show all images on small screens, only first 3 on md+ */}
        <div className="flex w-full justify-center items-center">
          <div className="flex items-center justify-between w-full">
            <Image
              src={"/Vogue.webp"}
              width={200}
              height={60}
              alt="Vogue"
              className="w-1/3 sm:w-1/6 h-auto"
            />
            <Image
              src={"/gq.avif"}
              width={200}
              height={60}
              alt="GQ"
              className="w-1/3 sm:w-1/6 h-auto"
            />

            <Image
              src={"/Cosmopolitan.webp"}
              width={200}
              height={60}
              alt="cosmopolitan"
              className="w-1/3 sm:w-1/6 h-auto"
            />

            <div className="hidden lg:flex">
              <Image
                src={"/elle.webp"}
                width={200}
                height={60}
                alt="elle"
                className="w-full h-auto"
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={"/RollingStone.webp"}
                width={200}
                height={60}
                alt="rs"
                className="w-full h-auto"
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={"/grazia.webp"}
                width={200}
                height={60}
                alt="grazia"
                className="w-full  h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appriciate;
