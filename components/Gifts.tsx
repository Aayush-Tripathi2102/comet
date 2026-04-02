import Image from "next/image";
import React from "react";
const Gifts = () => {
  return <div className="w-full flex" data-uid="element-1775114870161-242">
      <Image src="/wrapped.webp" width={1920} height={1080} alt="gifts" className="w-1/2 h-auto hidden md:block" data-uid="component-1775114870161-243" />
      <Image src="/coffee.webp" width={1920} height={1080} alt="gifts" className="w-1/2 h-auto hidden md:block" data-uid="component-1775114870161-244" />
      <Image src="/wrapped-mobile.jpg" width={1920} height={1080} alt="gifts" className="w-1/2 h-auto block md:hidden" data-uid="component-1775114870161-245" />
      <Image src="/coffee.jpg" width={1920} height={1080} alt="gifts" className="w-1/2 h-auto block md:hidden" data-uid="component-1775114870161-246" />
    </div>;
};
export default Gifts;