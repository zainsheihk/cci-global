import Image from "next/image";
import React from "react";
import card from "@/public/images/Retail-E-Commerce-CCI-Industry-min.jpg";

export default function GalleryCard() {
  return (
    <div className="relative group transition-opacity">
      <Image src={card} alt="" />
      <div className="absolute top-0 left-0 w-full h-full gallery-overlay flex p-5 items-end">
        <h3 className="text-white font-semibold text-[20px]">
          Retail & e-commerce
        </h3>
      </div>
      <div className="gallery-overlay-hover p-5 w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100">
        <h5 className="text-white font-semibold text-[16px] mb-3">
          Retail & e-commerce
        </h5>
        <p className="text-white text-[12px] leading-6">
          CCI help our healthcare clients drive growth and manage their revenue
          cycle to deliver added value to the patient network. We help
          providers, government agencies, insurance companies and payers with
          customer relations, complex case management, administrative processes,
          sales, marketing and other wider services. Our specialized healthcare
          agents support customers with the required empathy and urgency to
          support such a vital service.
        </p>
      </div>
    </div>
  );
}
