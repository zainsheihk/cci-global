"use client";
import React from "react";
import MainMenu from "./mainMenu";
import Link from "next/link";
import logo from "../public/images/cci-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  const invertMenu: string[] = [
    "",
    "/solutions",
    "/careerbox",
    "/cciknowledgebase",
    "/diversityatcci",
  ];
  const isInvert = invertMenu.includes(pathName);
  return (
    <header className="container absolute top-0 left-[50%] translate-x-[-50%] py-7 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          className={`max-w-[100px] ${isInvert ? "invert" : ""}`}
        ></Image>
      </Link>
      <MainMenu isInvert={isInvert} />
    </header>
  );
}

export default Header;
