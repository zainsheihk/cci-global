import Link from "next/link";
import React from "react";

function MainMenu({ isInvert }: { isInvert?: boolean }) {
  const navigation = [
    {
      label: "About Us",
      url: "",
    },
    {
      label: "industries",
      url: "/industries",
    },

    {
      label: "solutions",
      url: "/solutions",
    },
    {
      label: "careerBox",
      url: "/careerbox",
    },
    {
      label: "call insight",
      url: "/call-insight",
    },
    {
      label: "knowledge Base",
      url: "/cciknowledgebase",
    },
    {
      label: "diversity",
      url: "/diversityatcci",
    },
    {
      label: "connect",
      url: "/connectwithcci",
    },
  ];
  return (
    <nav>
      <ul className="flex gap-7">
        {navigation.map(
          (ele: { label: string; url: string }, index: number) => (
            <li
              key={index}
              className={` capitalize text-[15px] ${
                isInvert ? "text-[var(--secondary-color)]" : "text-white"
              }`}
            >
              <Link href={ele.url}>{ele.label}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default MainMenu;
