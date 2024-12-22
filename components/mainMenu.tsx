import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MainMenu({ isInvert }: { isInvert?: boolean }) {
  const pathName = usePathname();

  const navigation = [
    {
      label: "About Us",
      url: "/#target-section",
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
              className={` capitalize text-[15px]  relative hover:after:w-[100%] after:w-[0] after:transition-all after:duration-500 duration-300 after:h-[1px] after:bg-[var(--primary-color)] after:block after:z-20 after:absolute after:bottom-[-2px] after:left-[50%] after:translate-x-[-50%]  hover:text-[var(--primary-color)] ${
                isInvert || pathName.includes(ele.url)
                  ? pathName.includes(ele.url)
                    ? "text-[var(--primary-color)] after:w-[100%]"
                    : "text-[var(--secondary-color)]"
                  : "text-white"
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
