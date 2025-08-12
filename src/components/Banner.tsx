import Image from "next/image";
import React, { useEffect } from "react";
import bg from "@/assets/background1.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import "./banner.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    const loadingTimeline = gsap.timeline();

    loadingTimeline
      .to(".loading", {
        width: "100%",
        duration: 1,
        delay: 0.3,
      })
      .to(
        ".capsuleLogo",
        {
          scale: 2,
          duration: 1.5,
          opacity: 0,
        },
        "load"
      )
      .to(
        ".capsule",
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "load"
      );

    const scaleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".banner",
        start: "90% 80%",
        end: "155% 80%",
        scrub: true,
      },
    });

    scaleTimeline.to("#bgImage", {
      transform: "scale(1.08)",
    });

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] !p-2 banner">
      <div className="capsuleBox">
        <div className="capsuleLogo">
          <h1>Capsules®</h1>
          <div className="loading"></div>
        </div>
      </div>
      <div className="capsule">
        <div className="background relative w-full h-full rounded-[3.5rem] overflow-hidden">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            id="bgImage"
            src={bg}
            alt="Background"
          />
          <div className="top">
            <h1>Capsules®</h1>
            <button className="menuBtn">
              Reserve <GoArrowUpRight className="icon" />
            </button>
          </div>
          <div className="bottom">
            <h3 className="text-[2.5rem] w-1/5 font-normal leading-10">
              Closer to nature - Closer to you
            </h3>
            <button className="menuBtn">
              Menu <IoIosMenu className="icon" />
            </button>
            <h4 className="w-[18rem] text-[0.9rem]">
              Spend unforgettable and remarkable time in the Californian desert
              with—Capsules.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
