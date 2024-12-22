/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import Heading from "./heading";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

function News() {
  //
  const news = [
    {
      title: "CCI Kenya is now the Largest BPO Operator in Kenya",
      description:
        "CCI’s Kenya operations have grown to become the largest BPO provider in the country with 3000+ agents, cementing growing demand for Kenya as a BPO market.",
    },
    {
      title: "CCI Wins at Stevie Awards for Sales & Customer Service ’23",
      description:
        "CCI is recognized as a Customer Service Outsourcing Provider Of The Year competing against 2,300 nominees for customer service and contact center achievements.",
    },
    {
      title:
        "CCI Global Partners With Customer Experience Foundation UK (CXFO)",
      description:
        "The CXFO is the UK’s latest customer experience association with CCI bringing African expertise to the partnership’s joint effort to impact the future of CX.",
    },
    {
      title:
        "CCI South Africa Wins Prestigious Award At The GSA Professional Awards 2022",
      description:
        "CCI were recognized and awarded ‘Best Far Shore Team’ by the GSA Professional Awards , the UK’s premier award organization for customer service provider’s supporting the UK Market.",
    },
    {
      title:
        "CCI Kenya Celebrates Annual Fun In the Park Day With Over 10,000 People",
      description:
        "In 2022, CCI Kenya hosted our annual event for family, friends & co-workers to celebrate our achievements and our amazing employees with live performances and from major African artists",
    },
    {
      title:
        "Construction Commences On Our New 4000 Seat Service Center in Tatu City",
      description:
        "Kenya’s largest ultra modern contact centre will employ thousands of young Kenyans in Tatu City, CCI’s second operating location in the country.",
    },
    {
      title: "Excellence in Customer Service Awards ’23 Winner",
      description:
        "CCI receives ‘Outsource Partner Of The Year’ at this year’s awards acknowledging those who help companies provide an enhanced level of customer service.",
    },
  ];
  return (
    <section className="container flex  items-center justify-between pb-[80px]">
      <div
        className="w-[20%]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        <Heading text="News" className="text-[var(--secondary-color)]" />
      </div>
      <div className="w-[60%] mr-20">
        <Splide
          hasTrack={false}
          aria-label="My Favorite Images"
          options={{
            pagination: false,
          }}
        >
          <SplideTrack>
            {news.map((item: any, index: number) => (
              <SplideSlide key={index}>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  <h3 className="text-[var(--primary-color)] text-[20px] font-semibold mb-2 leading-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-5">{item.description}</p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  );
}

export default News;
