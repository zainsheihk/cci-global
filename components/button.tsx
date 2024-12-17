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
        "bg-[var(--primary-color)] text-white py-2 px-6 text-[14px] font-semibold rounded-md hover:bg-[var(--secondary-color)] transition-all duration-500 " +
          className
      )}
      href={href}
    >
      {label}
    </Link>
  );
}

export default Button;
