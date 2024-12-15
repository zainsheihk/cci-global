import React from "react";
import CounterSlider from "../careerbox/counterSlider";

export default function Counter() {
  return (
    <section className="overflow-hidden z-[-1] h-[80vh] relative call-insight-gradient after:absolute after:top-0 after:left-0 after:w-full after:h-full">
      <video
        className="w-full object-cover"
        loop
        autoPlay={true}
        muted
        preload="none"
        id="videoLoad"
        playsInline={true}
      >
        <source
          src={"./images/Call-Insight-Statistics-Section-transcode.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  top-[50%] z-10 left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <CounterSlider />
      </div>
    </section>
  );
}
