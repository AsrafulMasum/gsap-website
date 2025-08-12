import Image from "next/image";
import "./chooseSection.css";
import img1 from "@/assets/sm image1.png";
import img2 from "@/assets/sm image 2.png";
import { useEffect } from "react";
import gsap from "gsap";

const ChooseSection = () => {
  useEffect(() => {
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".chooseSection",
        start: "25% 50%",
        end: "60% 50%",
        scrub: 1,
      },
    });

    textTimeline.to(".hide", {
      top: "-100%",
      stagger: 0.1,
    });

    return () => {
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div className="chooseSection">
      <div className="top">
        <div className="left">
          <div className="imgBox">
            <Image src={img1} alt="Image" />
          </div>
          <div className="imgBox">
            <Image src={img2} alt="Image" />
          </div>
        </div>
        <div className="right">
          <p>
            A place where you can be with yourself and your loved ones. A place
            where you can experience unforgettable desert things.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="hideBox">
          <h2>Choose the one</h2>
          <div className="hide"></div>
        </div>
        <div className="hideBox">
          <h2>you like best</h2>
          <div className="hide"></div>
        </div>
        <p>
          You can choose one of three premium capsule houses in our offer. Each
          of our capsules provides the highest quality and meets the standards
          adjusted to your needs. Choose the one you like.
        </p>
      </div>
    </div>
  );
};

export default ChooseSection;
