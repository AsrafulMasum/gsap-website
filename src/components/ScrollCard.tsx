import Image from "next/image";
import React, { useEffect } from "react";
import img1 from "@/assets/background2.png";
import img2 from "@/assets/background3.png";
import img3 from "@/assets/background4.png";
import "./scrollCard.css";
import gsap from "gsap";

const ScrollCard = () => {
  useEffect(() => {
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "30% 30%",
        end: "230% 30%",
        markers: true,
        scrub: 1,
        pin: true,
      },
    });

    tl4
      .to(
        ".box h3",
        {
          opacity: 0,
        },
        "a"
      )
      .to(
        ".page4 .background",
        {
          width: "calc(100vw - 1rem)",
          height: "calc(100vh - 1rem)",
          borderRadius: "3.5rem",
          y: -40,
        },
        "a"
      )
      .to(
        ".page4 .background img",
        {
          transform: "scale(1)",
        },
        "a"
      )
      .from(
        ".background .topText h4, .background .topText h3, .background .bottomText h3",
        {
          opacity: 0,
          x: 50,
        }
      );

    tl4
      .to({}, { duration: 0.7 }, "+=0")

      .to(
        "#second",
        {
          transform: "translate(-50%, -54.3%)",
        },
        "b"
      )
      .to(
        "#second img",
        {
          transform: "scale(1)",
        },
        "b"
      )
      .to(
        ".page4 .background",
        {
          scale: 0.9,
          opacity: 0,
          y: -50,
        },
        "b"
      )
      .from(
        " #second .topText h4, #second .topText h3, #second .bottomText h3",
        {
          opacity: 0,
          x: 50,
        }
      );

    tl4
      .to({}, { duration: 0.7 }, "+=0")

      .to(
        "#third",
        {
          transform: "translate(-50%, -54.3%)",
        },
        "c"
      )
      .to(
        "#third img",
        {
          transform: "scale(1)",
        },
        "c"
      )
      .to(
        "#second",
        {
          scale: 0.9,
          opacity: 0,
        },
        "c"
      )
      .from("#third .topText h4, #third .topText h3, #third .bottomText h3", {
        opacity: 0,
        x: 50,
      });
    tl4.to({}, { duration: 0.7 }, "+=0");
  }, []);

  return (
    <div className="page4">
      <div className="slider">
        <div className="box">
          <h3 style={{ "--index": 1 } as React.CSSProperties}>Capsules®</h3>
          <h3 style={{ "--index": 2 } as React.CSSProperties}>Capsules®</h3>
          <h3 style={{ "--index": 3 } as React.CSSProperties}>Capsules®</h3>
          <h3 style={{ "--index": 4 } as React.CSSProperties}>Capsules®</h3>
          <h3 style={{ "--index": 5 } as React.CSSProperties}>Capsules®</h3>
          <h3 style={{ "--index": 6 } as React.CSSProperties}>Capsules®</h3>
        </div>
      </div>

      <div className="background">
        <Image className="image" src={img2} alt="" />
        <div className="topText">
          <h4>classNameicCapsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            classNameic Capsule® boasts refined aesthetics and a modern
            interior, creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>

      <div id="second" className="background2">
        <Image className="image" src={img2} alt="" />
        <div className="topText">
          <h4>Terrace Capsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            classNameic Capsule® boasts refined aesthetics and a modern
            interior, creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>
      <div id="third" className="background2">
        <Image className="image" src={img3} alt="" />
        <div className="topText">
          <h4>Desert Capsule®</h4>
          <h3>(Scroll)</h3>
        </div>
        <div className="bottomText">
          <h3>
            classNameic Capsule® boasts refined aesthetics and a modern
            interior, creating an intimate retreat in a desert landscape
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;
