"use client";
import Image from "next/image";
import React from "react";
import map from "../public/images/list.svg";

function News() {
  return (
    // <section className="container flex  items-center justify-between py-[80px]">
    //   <div className="w-[20%]">
    //     <Heading
    //       text="News"
    //       className="text-[var(--secondary-color)] text-[40px]"
    //     />
    //   </div>
    //   <div className="w-[60%] mr-20">
    //     <Splide hasTrack={false} aria-label="My Favorite Images">
    //       <SplideTrack>
    //         <SplideSlide>

    //         </SplideSlide>
    //         <SplideSlide>
    //           <h3 className="text-[var(--primary-color)] text-[20px] font-semibold mb-5">
    //             CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
    //             People
    //           </h3>
    //           <p className="text-gray-700">
    //             In 2022, CCI Kenya hosted our annual event for family, friends &
    //             co-workers to celebrate our achievements and our amazing
    //             employees with live performances and from major African artists
    //           </p>
    //         </SplideSlide>
    //       </SplideTrack>
    //     </Splide>
    //   </div>
    // </section>

    <section className="relative secondary-bg">
      <Image
        src={map}
        alt="map"
        className=" w-full h-full object-cover  max-h-screen object-center"
      />
      <div className=" flex container  justify-between z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <div className="w-[40%]">
          <h2 className="text-[var(--secondary-color)] text-[60px] font-semibold leading-[1.2] ">
            NEWS
          </h2>
        </div>
        <div className="w-[60%] ">
          <div className="  bg-white rounded-3xl card-bg card-mask overflow-hidden py-[30px] px-[50px] mb-3 ">
            <p className="text-[var(--primary-color)] font-medium pb-2 text-[20px]">
              06/01/2024
            </p>
            <h3 className="text-[var(--secondary-color)] text-[21px] font-semibold">
              CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
              People
            </h3>

            {/* <p className="text-gray-700">
              In 2022, CCI Kenya hosted our annual event for family, friends &
              co-workers to celebrate our achievements and our amazing employees
              with live performances and from major African artists{" "}
            </p> */}
          </div>
          <div className="  bg-white rounded-3xl card-bg card-mask overflow-hidden py-[30px] px-[50px] mb-3 ">
            <p className="text-[var(--primary-color)] font-medium pb-2 text-[20px]">
              06/01/2024
            </p>
            <h3 className="text-[var(--secondary-color)] text-[21px] font-semibold">
              CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
              People
            </h3>

            {/* <p className="text-gray-700">
              In 2022, CCI Kenya hosted our annual event for family, friends &
              co-workers to celebrate our achievements and our amazing employees
              with live performances and from major African artists{" "}
            </p> */}
          </div>
          <div className="  bg-white rounded-3xl card-bg card-mask overflow-hidden py-[30px] px-[50px] mb-3 ">
            <p className="text-[var(--primary-color)] font-medium pb-2 text-[20px]">
              06/01/2024
            </p>
            <h3 className="text-[var(--secondary-color)] text-[21px] font-semibold">
              CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000
              People
            </h3>

            {/* <p className="text-gray-700">
              In 2022, CCI Kenya hosted our annual event for family, friends &
              co-workers to celebrate our achievements and our amazing employees
              with live performances and from major African artists{" "}
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
