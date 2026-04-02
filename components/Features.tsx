import Image from "next/image";
const Features = () => {
  return <div className="py-4 flex flex-col md:flex-row items-center justify-center gap-4" data-uid="element-1775114870153-145">
      <div className="w-full md:w-1/3 h-40 flex items-center justify-center py-8 md:py-12 bg-[#F2F2F2]" data-uid="element-1775114870153-146">
        <Image src="/free.webp" width={100} height={100} alt="free" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28" data-uid="component-1775114870153-147" />
        <div className="ml-2" data-uid="element-1775114870153-148">
          <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" data-uid="element-1775114870153-149">
            Free Shipping
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400" data-uid="element-1775114870153-150">
            Free shipping for all orders.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 h-40 flex items-center justify-center py-8 md:py-12 bg-[#F2F2F2]" data-uid="element-1775114870153-151">
        <Image src="/cod.avif" width={58} height={58} alt="free" className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" data-uid="component-1775114870153-152" />
        <div className="ml-2" data-uid="element-1775114870153-153">
          <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" data-uid="element-1775114870153-154">
            Cash on delivery
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400" data-uid="element-1775114870153-155">
            Cash on delivery at Zero Cost.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 h-40 flex items-center justify-center py-8 md:py-12 bg-[#F2F2F2]" data-uid="element-1775114870153-156">
        <Image src="/return.webp" width={63} height={63} alt="free" className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" data-uid="component-1775114870153-157" />
        <div className="ml-2" data-uid="element-1775114870153-158">
          <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" data-uid="element-1775114870153-159">
            Easy return
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-400" data-uid="element-1775114870153-160">
            Free 7 day Return and Exchange.
          </p>
        </div>
      </div>
    </div>;
};
export default Features;