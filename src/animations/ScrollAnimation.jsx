"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedDiv() {
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && screenWidth <= 971) {
      // ✅ 768px - 971px
      gsap.fromTo(
        element,
        { y: 100, width: "475px" },
        {
          y: 880,
          width: "100vw",
          height: "23vh",
          duration: 2.5,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
            end: "top -20%",
            scrub: true,
          },
          ease: "linear",
        }
      );
    } else if (screenWidth > 971 && screenWidth <= 1280) {
      // ✅ 972px - 1280px
      gsap.fromTo(
        element,
        { y: 100, width: "475px" },
        {
          y: 700,
          width: "100vw",
          height: "23vh",
          duration: 2.5,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
            end: "top -20%",
            scrub: true,
          },
          ease: "linear",
        }
      );
    } else if (screenWidth > 1280 && screenWidth <= 1440) {
      // ✅ 1281px - 1440px
      gsap.fromTo(
        element,
        { y: 100, width: "1875px" },
        {
          y: 580,
          width: "100vw",
          height: "23vh",
          duration: 2.5,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
            end: "top -20%",
            scrub: true,
          },
          ease: "linear",
        }
      );
    } else if (screenWidth > 1440 && screenWidth <= 1536) {
      // ✅ 1441px - 1536px
      gsap.fromTo(
        element,
        { y: 100, width: "1875px" },
        {
          y: 500,
          width: "100vw",
          height: "23vh",
          duration: 2.5,
          scrollTrigger: {
            trigger: element,
            start: "top 65%",
            end: "top -20%",
            scrub: true,
          },
          ease: "linear",
        }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className="hidden md:block absolute top-[10rem] -left-4 h-[400px] w-[875px] bg-amber-500 z-0 pointer-events-none"
    ></div>
  );
}