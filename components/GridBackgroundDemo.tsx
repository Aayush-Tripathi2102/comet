import { cn } from "@/lib/utils";
import React from "react";
export function GridBackgroundDemo() {
  return <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black" data-uid="element-1775085187974-247">
      <div className={cn("absolute inset-0", "[background-size:40px_40px]", "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]")} data-uid="element-1775085187974-248" />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white" data-uid="element-1775085187974-249"></div>
      <p className="relative z-20  from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl" data-uid="element-1775085187974-250">
        Backgrounds
      </p>
    </div>;
}