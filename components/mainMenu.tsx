import Link from "next/link";
import React from "react";

function MainMenu({ isInvert }: { isInvert?: boolean }) {
  const navigation = [
    "About Us",
    "industries",
    "solutions",
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
          <li
            key={index}
            className={` capitalize text-[15px] ${
              isInvert ? "text-[var(--secondary-color)]" : "text-white"
            }`}
          >
            <Link href={ele}>{ele}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
