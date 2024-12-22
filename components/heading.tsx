"use client";
import { cn } from "@/utils/function";
import React, { useRef, useEffect, useState } from "react";
import { HTMLProps } from "react";

function Heading({
  text,
  className,
  delay = 300, // Add a delay prop (default 0ms)
}: {
  text: string;
  className?: HTMLProps<HTMLElement>["className"];
  delay?: number; // Optional delay prop in milliseconds
}) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting && !isAnimated) {
          // Add a delay before starting the animation
          setTimeout(() => {
            setIsAnimated(true);
          }, delay);

          observer.unobserve(entry.target); // Stop observing after triggering
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [isAnimated, delay]); // Dependency includes `delay` to recalculate if it changes

  return (
    <h2
      ref={headingRef}
      className={cn(
        `text-white text-[40px] relative uppercase font-semibold 
        after:w-0 after:h-[8px] after:bg-[var(--primary-color)] after:block after:z-20 
        after:absolute after:bottom-[-10px] after:left-0 mb-10 
        after:transition-all after:duration-500 after:ease-in-out ${
          isAnimated ? "after:w-[70px]" : "after:w-0"
        } ` + className
      )}
    >
      {text}
    </h2>
  );
}

export default Heading;
