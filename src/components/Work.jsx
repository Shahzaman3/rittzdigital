"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const data = [
  {
    heading: "Discovery & Strategy",
    description:
      "We begin by understanding your brand, audience, and goals. Our team crafts a tailored web strategy that aligns with your business vision and maximizes digital impact.",
  },
  {
    heading: "Design & Development",
    description:
      "From wireframes to full-stack development, we turn ideas into pixel-perfect, high-performance websites that are fast, scalable, and built to convert.",
  },
  {
    heading: "Optimization & Growth",
    description:
      "We don't just launch and leave. Our experts continuously optimize your site for speed, SEO, and performance — ensuring long-term growth and user satisfaction.",
  },
  {
    heading: "Analytics & Insight",
    description:
      "Data-driven decisions power better results. We track every click and scroll to give you clear insights into how your site performs and where it can grow.",
  },
];

export default function Work() {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  const heading = "What We Do";

  return (
    <div className="min-h-screen w-full bg-pink-800 flex flex-col items-center py-12 px-4 space-y-8">
      {/* Main Heading */}
      <h2
      className="w-full text-left text-[#FCDDD4] font-extrabold text-[3rem] sm:text-[4rem] lg:text-[6rem] px-4 sm:px-8 -mb-1"
      ref={textRef}
    >
      {heading.split("").map((char, i) => (
        <span
          key={i}
          className="">
          <span className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </h2>

      {/* Subheading */}
      <div className="w-full flex justify-start items-center px-4 sm:px-8 mt-1">
        {/* Line */}
        <div className="h-0.5 w-20 sm:w-32 bg-pink-200 mr-3"></div>

        {/* Text */}
        <p className="text-xs sm:text-sm text-pink-100 text-left leading-tight">
          Trusted By Innovators,
          <br />
          Loved By Clients.
        </p>
      </div>

      {/* Cards Section */}
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-6xl xl:max-w-9xl 2xl:max-w-[90rem] bg-[#FCDDD4] text-pink-800 hover:text-white hover:bg-pink-800 hover:shadow-2xl rounded-3xl px-6 py-10 sm:py-12 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-8 transition-all duration-300"
        >
          {/* Left - Icon + Heading */}
          <div className="flex items-start gap-3  sm:w-[22%] text-left">
            <span className="text-pink-700 text-xl mt-1">◆</span>
            <h2 className="font-extrabold  text-lg sm:text-xl leading-tight max-w-[160px] sm:max-w-[180px] break-words">
              {item.heading}
            </h2>
          </div>

          {/* Middle - Description */}
          <div className=" text-sm sm:text-base sm:w-[60%] leading-relaxed text-center sm:text-left">
            {item.description}
          </div>

          {/* Right - Arrow */}
          <div className="sm:w-[60px] w-full flex justify-center sm:justify-end">
            <div
              className="w-12 h-12 bg-pink-700 rounded-full flex items-center justify-center transition-transform duration-300"
              style={{ transform: "rotate(-45deg)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(-45deg)";
              }}
            >
              <FaArrowRight className="text-white text-xl" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
