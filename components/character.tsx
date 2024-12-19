/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/utils/function";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
// import styles from "./style.module.scss";

export default function Paragraph({
  paragraph,
  className,
}: {
  paragraph: any;
  className?: any;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 1", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className={cn("flex flex-wrap text-[26px] font-semibold", className)}
    >
      {words.map((word: any, i: any) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={"relative mr-2 mt-1"}>
      {children.split("").map((char: any, i: any) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
