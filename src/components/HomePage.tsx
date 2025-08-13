"use client";

import React, { useEffect } from "react";
import Banner from "./Banner";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import TextSection from "./TextSection";
import ChooseSection from "./ChooseSection";
import ScrollCard from "./ScrollCard";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollSmoother, ScrollToPlugin);

const HomePage = () => {
  useEffect(() => {
    // Ensure the smoother is initialized after the DOM is ready
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 5,
      effects: true,
      smoothTouch: 0.1,
    });

    // Scroll to top after page reload
    const scrollToTop = () => {
      smoother.scrollTo(0, true);
    };

    // Delay the scrollToTop call to make sure ScrollSmoother is fully initialized
    setTimeout(scrollToTop, 50);

    // Cleanup function to kill smoother on unmount
    return () => {
      smoother.kill();
    };
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
