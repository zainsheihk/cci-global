import React from "react";
import MainMenu from "./mainMenu";
import Link from "next/link";
import logo from "../public/images/cci-logo.png";
import Image from "next/image";

function Header() {
  return (
    <header className="container absolute top-0 left-[50%] translate-x-[-50%] py-7 flex justify-between items-center">
      <Link href="">
        <Image src={logo} alt="Logo" className="max-w-[100px]"></Image>
      </Link>
      <MainMenu />
    </header>
  );
}

export default Header;