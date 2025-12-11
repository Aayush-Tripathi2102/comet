import Image from "next/image";
import React from "react";

const Appriciate = () => {
  return (
    <div className="mb-20">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10">
        AS APPRECIATED ON
      </h1>
      <div className="flex w-full justify-center items-center py-10 bg-[#f5f5f5]">
        {/* Show all images on small screens, only first 3 on md+ */}
        <div className="flex w-full justify-center items-center">
          <div className="flex">
            <Image
              src={"/Vogue.webp"}
              width={200}
              height={60}
              alt="Vogue"
              className="w-1/3 sm:w-1/5 h-auto"
            />
            <Image
              src={"/gq.avif"}
              width={200}
              height={60}
              alt="GQ"
              className="w-1/3 sm:w-1/5 h-auto"
            />

            <Image
              src={"/Cosmopolitan.webp"}
              width={200}
              height={60}
              alt="cosmopolitan"
              className="w-1/3 sm:w-1/5 h-auto"
            />

            <div className="hidden lg:flex">
              <Image src={"/elle.webp"} width={200} height={60} alt="elle" />
              <Image
                src={"/RollingStone.webp"}
                width={200}
                height={60}
                alt="rs"
              />
              <Image
                src={"/grazia.webp"}
                width={200}
                height={60}
                alt="grazia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appriciate;
