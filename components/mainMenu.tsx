import Link from "next/link";
import React from "react";

function MainMenu() {
  const navigation = [
    "About Us",
    "Industries",
    "Solution",
    "careerBox",
    "call insight",
    "knowledge Base",
    "diversity",
    "connect",
  ];
  return (
    <nav>
      <ul className="flex gap-7">
        {navigation.map((ele: string, index: number) => (
          <li key={index} className="text-white capitalize text-[15px]">
            <Link href="">{ele}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
