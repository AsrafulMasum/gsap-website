"use client";

import React, { useEffect } from "react";
import Banner from "./Banner";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import TextSection from "./TextSection";
import ChooseSection from "./ChooseSection";
import ScrollCard from "./ScrollCard";

gsap.registerPlugin(ScrollSmoother);

const HomePage = () => {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 5,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Banner />
        <TextSection />
        <ChooseSection />
        <ScrollCard />
      </div>
    </div>
  );
};

export default HomePage;
