/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import Heading from "./heading";

const Card = ({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: any;
  targetScale: number;
}) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={
          "flex flex-col justify-center relative top[-25%]  px-[80px] py-[50px] origin-top bg-white rounded-3xl card-bg card-mask"
        }
      >
        <Heading text={title} className="mb-5 text-[40px] font-bold" />
        <p className="leading-7">{description}</p>
      </motion.div>
    </div>
  );
};

export default Card;
