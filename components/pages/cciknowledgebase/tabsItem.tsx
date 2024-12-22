import React from "react";

export default function TabsItem({
  title,
  isActive,
  onHandleTab,
}: {
  title: string;
  onHandleTab: (title: string) => void;
  isActive: boolean;
}) {
  return (
    <div
      onClick={() => onHandleTab(title)}
      className={`relative w-full p-7 flex items-center justify-center border border-[var(--secondary-color)] after:absolute cursor-pointer   after:top-0 after:left-0  after:z-30 after:w-full after:h-full  ${
        isActive
          ? " industries-gradient-after shadow-2xl after:border-b-8 after:border-[var(--primary-color)] border-transparent "
          : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full "></div>
      <h5
        className={`relative text-[var(--secondary-color)] font-semibold text-[18px] z-[999] ${
          isActive ? " text-white" : ""
        }`}
      >
        {title}{" "}
      </h5>
    </div>
  );
}
