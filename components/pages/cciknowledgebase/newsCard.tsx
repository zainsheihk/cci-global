import React from "react";
import news from "@/public/images/Everest-Website-.png";
import Image from "next/image";
export default function NewsCard() {
  return (
    <div className="w-[48%]">
      <Image src={news} alt="" className="w-full" />
      <h4 className="text-[var(--secondary-color)] font-semibold my-5 leading-6 text-[22px]">
        CCI Global Named Major Contender in the 2024 Everest Peak Matrix CXM
        Report, Recognized Across APAC, EMEA, and the Americas
      </h4>
      <p className="text-[var(--secondary-color)] text-[14px]">
        CCI has been recognized in the 2024 Everest Peak Matrix CXM report for
        the third consecutive year, advancing from its previous position as an
        Aspirant to Major Contender. This achievement highlights CCI’s
        excellence in client service delivery across the APAC, EMEA and
        Americas, supported by its multilingual capabilities and innovative
        digital tools. With key partnerships and a strong focus on service and
        technology, CCI continues to lead in market impact.
      </p>
    </div>
  );
}
