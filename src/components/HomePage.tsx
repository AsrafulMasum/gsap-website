"use client";

import React, { useEffect } from "react";
import Banner from "./Banner";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

const HomePage = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2.5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Banner />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
