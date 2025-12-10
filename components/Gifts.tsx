import Image from "next/image";
import React from "react";

const Gifts = () => {
  return (
    <div className="w-full flex">
      <Image
        src="/wrapped.webp"
        width={1920}
        height={1080}
        alt="gifts"
        className="w-1/2 h-auto hidden md:block"
      />
      <Image
        src="/coffee.webp"
        width={1920}
        height={1080}
        alt="gifts"
        className="w-1/2 h-auto hidden md:block"
      />
      <Image
        src="/wrapped-mobile.jpg"
        width={1920}
        height={1080}
        alt="gifts"
        className="w-1/2 h-auto block md:hidden"
      />
      <Image
        src="/coffee.jpg"
        width={1920}
        height={1080}
        alt="gifts"
        className="w-1/2 h-auto block md:hidden"
      />
    </div>
  );
};

export default Gifts;
