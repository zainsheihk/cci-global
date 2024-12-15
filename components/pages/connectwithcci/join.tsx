import Image from "next/image";
import React from "react";
import pattern from "@/public/images/6318668f5d7a13f2e29e4821_Frame 146-p-1600.png";
import agent from "@/public/images/jump.png";
import joinus from "@/public/images/Join-Us-1024x133-1.png";
export default function JoinUs() {
  return (
    <section className="py-[80px] purple-gradient relative">
      <Image
        src={pattern}
        alt=""
        className="absolute top-0 left-0 w-full h-full "
      />
      <div className="container flex gap-20 relative z-10 ">
        <div className="w-[55%]">
          <Image src={agent} alt="" className="agent-image-box" />
        </div>
        <div className="w-[45%]">
          <div className="">
            <Image
              src={joinus}
              alt=""
              className="agent-image-box max-w-[300px] mb-8"
            />
            <p className="text-white font-medium text-[16px]">
              Do you have a proven track record of delivery? Are you the very
              best at what you do? If you’re looking for an environment that
              creates opportunities through continued growth & invests in your
              development - we are the place for you and we can&apost wait for
              you to join the family.
            </p>

            <p className="text-white font-medium text-[16px] mt-5">
              Send your CV to Careers@cci.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
