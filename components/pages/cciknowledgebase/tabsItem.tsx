import React from "react";

export default function TabsItem() {
  return (
    <div className="relative w-full p-7 flex items-center justify-center border border-[var(--secondary-color)]">
      <div className="absolute top-0 left-0 w-full h-full "></div>
      <h5 className=" relative z-10 text-[var(--secondary-color)] font-semibold text-[18px]">
        Business Growth
      </h5>
    </div>
  );
}
