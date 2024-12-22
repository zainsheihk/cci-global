import React from "react";

export default function PartnerShip() {
  return (
    <div className="container py-[80px] flex gap-5">
      <div
        className="w-1/2"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-offset="0"
      >
        <h3 className="text-[var(--secondary-color)] font-semibold mb-5 text-[24px]">
          We build partnerships that look to expand your campaign services
        </h3>
        <p>
          CCI build relationships that add to our expertise, enhance your
          service delivery and work alongside your evolution to collaboratively
          grow together
        </p>
      </div>
      <div
        className="w-1/2"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-offset="0"
      >
        <h3 className="text-[var(--secondary-color)] font-semibold mb-5 text-[24px]">
          We invest in our agents to provide them with the right training and
          coaching
        </h3>
        <p>
          By building capabilities and enhancing our agent skill sets, we offer
          services that are focused on result driven outcomes
        </p>
      </div>
    </div>
  );
}
