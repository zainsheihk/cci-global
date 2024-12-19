import { cn } from "@/utils/function";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { HTMLProps } from "react";

function Button({
  href,
  label,
  className,
}: {
  href: Url;
  label: string;
  className?: HTMLProps<HTMLElement>["className"];
}) {
  return (
    <Link
      className={cn(
        " text-white py-4  px-10 text-[16px]  rounded-full bg-[var(--secondary-color)] transition-all duration-500 " +
          className
      )}
      href={href}
    >
      {label}
    </Link>
  );
}

export default Button;
