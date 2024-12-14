import React from "react";
import logo from "../public/images/cci-logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  const navigation = [
    "About Us",
    "Industries",
    "Solution",
    "careerBox",
    "call insight",
    "knowledge Base",
    "diversity",
    "connect",
    "privacy policy",
  ];
  return (
    <footer className=" bg-[#e7e9ed]">
      <div className="container py-16 flex gap-7 flex-col">
        <div className="flex justify-between items-center">
          <Link href="">
            <Image
              src={logo}
              alt="Logo"
              className="max-w-[100px] brightness-0"
            ></Image>
          </Link>
          <p className="text-[var(--secondary-color)] text-[13px]">
            CCI Enterprises DMCC, Unit 3101 to 3108, HDS Tower, Jumeirah Lakes
            Towers, Dubai, UAE. Phone: (+971)- 4 - 835 7012
          </p>
          <div className="flex items-center justify-between gap-5">
            <p className="text-[var(--secondary-color)] text-[14px]">
              Follow Us
            </p>
            <div className="w-8 h-8 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
              <FaLinkedinIn className=" text-[#e7e9ed]" />
            </div>
          </div>
        </div>
        <ul className="flex justify-between">
          {navigation.map((ele: string, index: number) => (
            <li
              key={index}
              className="text-[var(--secondary-color)] capitalize text-[14px] font-medium"
            >
              <Link href="">{ele}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
