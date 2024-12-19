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
        "text-white  relative uppercase font-semibold text-[var(--secondary-color)] " +
          className
      )}
    >
      {text}
    </h2>
  );
}

export default Heading;
