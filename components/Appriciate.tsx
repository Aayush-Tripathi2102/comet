import Image from "next/image";
import React from "react";
const Appriciate = () => {
  return <div className="mb-20" data-uid="element-1775085187956-108">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10 font-condensed" data-uid="element-1775085187956-109">
        AS APPRECIATED ON
      </h1>
      <div className="flex w-full justify-center items-center py-10 bg-[#f5f5f5]" data-uid="element-1775085187956-110">
        {/* Show all images on small screens, only first 3 on md+ */}
        <div className="flex w-full justify-center items-center" data-uid="element-1775085187956-111">
          <div className="flex items-center justify-between w-full" data-uid="element-1775085187956-112">
            <Image src={"/Vogue.webp"} width={200} height={60} alt="Vogue" className="w-1/3 sm:w-1/6 h-auto" data-uid="element-1775085187956-113" />
            <Image src={"/gq.avif"} width={200} height={60} alt="GQ" className="w-1/3 sm:w-1/6 h-auto" data-uid="element-1775085187956-114" />

            <Image src={"/Cosmopolitan.webp"} width={200} height={60} alt="cosmopolitan" className="w-1/3 sm:w-1/6 h-auto" data-uid="element-1775085187956-115" />

            <div className="hidden lg:flex" data-uid="element-1775085187956-116">
              <Image src={"/elle.webp"} width={200} height={60} alt="elle" className="w-full h-auto" data-uid="element-1775085187956-117" />
            </div>
            <div className="hidden lg:flex" data-uid="element-1775085187956-118">
              <Image src={"/RollingStone.webp"} width={200} height={60} alt="rs" className="w-full h-auto" data-uid="element-1775085187956-119" />
            </div>
            <div className="hidden lg:flex" data-uid="element-1775085187956-120">
              <Image src={"/grazia.webp"} width={200} height={60} alt="grazia" className="w-full  h-auto" data-uid="element-1775085187956-121" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Appriciate;