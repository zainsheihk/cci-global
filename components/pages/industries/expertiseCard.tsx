import React from "react";

export default function ExpertiseCard() {
  return (
    <div className="flex gap-10">
      <div className="relative after:w-[1px] after:absolute after:h-full after:bg-black after:top-0 after:right-[-20px]">
        <p className="text-[var(--primary-color)] text-[40px] font-semibold leading-none">
          1
        </p>
      </div>
      <div>
        <h6 className="font-semibold mb-3 text-[20px]">
          Optimizing Your Business
        </h6>
        <p className="text-[15px] leading-8">
          CCI works with clients to develop a collaborative partnership that not
          only brings efficiencies to your support functions but also provides a
          roadmap for continuous development and process enhancement. We work
          with our clients to be part of the process and bring added value to
          their network.
        </p>
      </div>
    </div>
  );
}
