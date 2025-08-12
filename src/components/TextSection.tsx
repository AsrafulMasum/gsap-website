import React, { useEffect } from "react";
import "./textSection.css";
import gsap from "gsap";

const TextSection = () => {
  useEffect(() => {
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".textSection",
        start: "28% 70%",
        end: "100% 70%",
        scrub: 1,
      },
    });

    textTimeline.to(".textSection .bottom", {
      y: 760,
    });

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="textSection">
      <h4>
        Welcome to a world of wild California desert with Capsules®, where you
        will discover exquisite nature observing it from capsule houses, nestled
        in the one of the most breathtaking destination on the United States
      </h4>
      <div className="bottom"></div>
    </div>
  );
};

export default TextSection;
