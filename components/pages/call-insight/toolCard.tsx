import React from "react";
import cardImage from "@/public/images/card_logo.png";
import Image from "next/image";

export default function ToolCard() {
  return (
    <div className="w-[22%] text-center">
      <Image src={cardImage} alt="" className="mx-auto" />
      <h3 className="mt-5  mb-2 text-[var(--secondary-color)] text-[18px] font-semibold">
        Monument Builder
      </h3>
      <p className="text-[var(--secondary-color)]">
        Monitor Mentions In Real Time
      </p>
    </div>
  );
}
