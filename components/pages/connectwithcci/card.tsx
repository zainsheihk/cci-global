import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import DialogDemo from "@/components/modal";
import ContactForm from "@/components/contactForm";

function Card({ title, image }: { title: string; image: StaticImageData }) {
  return (
    <div className="card-shadow w-[32%] transition-all duration-1000">
      <div className="after:absolute after:top-0 after:left-0 after:bg-black after:w-full after:h-full after:opacity-50 relative ">
        <Image
          src={image}
          alt="card"
          className="w-full object-cover min-h-[240px]"
        />
        <div className="flex flex-col justify-between h-full p-5 pb-10 absolute top-[10px] left-0 w-full">
          <div className="flex justify-between items-center">
            <h6 className="text-white font-semibold text-[20px] z-10">
              {title}
            </h6>
            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)] z-10 flex items-center justify-center  hover:bg-white transition-all duration-500 cursor-pointer">
              <FaLinkedinIn className="text-[24px]" />
            </div>
          </div>

          <DialogDemo
            triggerText="Let's Connect"
            buttonClass="z-10 text-center rounded-none"
          >
            <ContactForm />
          </DialogDemo>
        </div>
      </div>
    </div>
  );
}

export default Card;
