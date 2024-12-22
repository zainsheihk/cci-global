"use client";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

import React from "react";

export default function ReactAOS() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return <></>;
}
