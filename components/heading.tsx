import { cn } from "@/utils/function";
import React from "react";
import { HTMLProps } from "react";

function Heading({
  text,
  className,
}: {
  text: string;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <h2
      className={cn(
        "text-white text-[40px] relative uppercase font-semibold after:w-[70px] after:h-[8px] after:bg-[var(--primary-color)] after:block after:z-20 after:absolute after:bottom-[-10px] after:left-0 mb-10 " +
          className
      )}
    >
      {text}
    </h2>
  );
}

export default Heading;
