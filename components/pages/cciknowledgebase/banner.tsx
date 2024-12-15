import Image from "next/image";
import React from "react";
import informationImage from "@/public/images/Informed-Connected-scaled.jpg";
import Heading from "@/components/heading";

export default function Banner() {
  return (
    <section className="container mt-[150px] flex justify-between items-center">
      <div className="w-[45%]">
        <Image src={informationImage} alt="" />
      </div>
      <div className="w-[50%]">
        <Heading
          className="text-[var(--secondary-color)] text-[34px]"
          text="INFORMED AND CONNECTED
"
        />
        <p className="text-[var(--secondary-color)] leading-7">
          CCI are committed to connecting with our communities and we continue
          to strive to be the best in our industry within Africa and aspire to
          be the number 1 choice for BPO opportunities globally. Please read,
          connect, and engage with the latest updates and thoughts from our
          diverse team.
        </p>
      </div>
    </section>
  );
}
