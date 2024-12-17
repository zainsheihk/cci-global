"use client";
import React, { useEffect, useState } from "react";
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
  const [isSticky, setIsSticky] = useState(false);
  const isInvert = invertMenu.includes(pathName) || isSticky;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? "fixed  py-5 bg-white animate-[header-animate_500ms_ease-in-out] shadow-md"
          : "absolute py-7 "
      }  top-0 z-50 left-[0%] w-full`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className={`max-w-[100px] ${isInvert ? "invert" : ""}`}
          ></Image>
        </Link>
        <MainMenu isInvert={isInvert} />
      </div>
    </header>
  );
}

export default Header;
