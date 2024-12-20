/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useRef } from "react";

import Button from "./button";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import Heading from "./heading";
function SolutionCard({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
  image,
}: {
  image: any;
  i: number;
  title: string;
  description: string;
  progress: MotionValue<number>;
  range: any;
  targetScale: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    //   <div
    //     ref={container}
    //     className="sticky top-0  overflow-hidden h-[50vh] w-full border border-[#49484845] mb-10 rounded-2xl
    //  bg-[#18182c]"
    //   >
    //     <motion.div
    //       style={{
    //         scale,
    //         top: `calc(5vh + ${i * 25}px)`,
    //       }}
    //       className={"relative top[-25%] origin-top "}
    //     >
    //       <div className="relative flex">
    //         <div className="w-[75%]">
    //           <p className="text-white  z-10">Omnichannel Management</p>
    //           <p className="text-[12px] mb-4   leading-[1.6]">
    //             Across voice & digital channels, CCI provides support to
    //             organizations across the world. We implement processes and utilize
    //             our international expertise to provide adequate agent profiles,
    //             systems and interactions to elevate your brands services. As our
    //             industry continues to evolve, we invest heavily in our omnichannel
    //             strategy.
    //           </p>
    //           <Button
    //             href={""}
    //             label="More on our expertise"
    //             className="rounded-none w-full block text-center"
    //           />
    //         </div>
    //         <div className="w-[25%] rounded-2xl overflow-hidden">
    //           <Image
    //             src={solutionImage}
    //             alt="card"
    //             className="w-full object-cover"
    //           />
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    <div
      ref={container}
      className={"h-screen flex justify-center items-center sticky top-0"}
    >
      <motion.div
        style={{
          // backgroundColor: "white",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={
          "flex flex-col relative top-[-25%] h-[500px]  p-[50px] origin-top border border-[#49484845] rounded-2xl bg-[#18182c]"
        }
      >
        {/* <h2 className="text-[40px] text-white">{title}</h2> */}

        <div className={"flex justify-between h-full"}>
          <div className={" w-[50%] flex flex-col justify-between"}>
            <Heading
              text={title}
              className="text-[44px] text-white leading-[1.1]"
            />
            <div>
              <p className="text-white opacity-80 mb-10w">{description}</p>
              <Button
                href={""}
                label="More on our expertise"
                className="w-fit mt-5 inline-block"
              />
            </div>
          </div>

          <div
            className={"relative w-[40%] h-full rounded-[25px] overflow-hidden"}
          >
            <motion.div
              className={"w-full h-full"}
              style={{ scale: imageScale }}
            >
              <Image fill src={image} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SolutionCard;
