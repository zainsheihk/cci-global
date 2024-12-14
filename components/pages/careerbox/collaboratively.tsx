import Image from "next/image";
import React from "react";
import map from "@/public/images/63206e2e6f82a0dc75f21dc9_Frame-119-p-2000.png";
import Button from "@/components/button";
// import Button from "./button";
function Collaboratively() {
  return (
    <section className="relative after:w-full after:h-full section-overlay  after:absolute after:top-0 after:left-0">
      <Image
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex flex-col justify-center items-center z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="text-white max-w-[500px] text-center mt-4 mb-8">
          Let us collaboratively work together to make a difference in the lives
          of ordinary, ambitious individuals across Africa. We are eager for you
          to learn more about how we can integrate with your campaigns and
          operations to better the world for a more prosperous tomorrow.
        </p>
        <Button label="Learn More" href={""} />
      </div>
    </section>
  );
}

export default Collaboratively;
