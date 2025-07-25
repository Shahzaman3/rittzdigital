"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowingMenu from "@/animations/FlowingMenu";

gsap.registerPlugin(ScrollTrigger);

export default function Idea() {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const flowItems = [
    {
      text: "Understand your Vision",
    },
    {
      text: "Co-Create A Roadmap",
    },
    {
      text: "Design with Empathy",
    },
    {

      text: "Develop with Precision",
    },
    {
      text: "Test, Iterate & Launch With Confidence",
    },
  ];

  useEffect(() => {
    const lettersLine1 = line1Ref.current.querySelectorAll(".letter");
    const lettersLine2 = line2Ref.current.querySelectorAll(".letter");

    gsap.fromTo(
      lettersLine1,
      { y: "150%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: line1Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      lettersLine2,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.3,
        scrollTrigger: {
          trigger: line2Ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const line1Text = [
    { char: "F", className: "text-pink-800" },
    { char: "r" },
    { char: "o" },
    { char: "m" },
    { char: " " },
    { char: "I" },
    { char: "d" },
    { char: "e" },
    { char: "a" },
    { char: " " },
    { char: "T" },
    { char: "o" },
  ];

  const line2Text = [
    { char: "M" },
    { char: "a" },
    { char: "r" },
    { char: "k" },
    { char: "e" },
    { char: "t" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center md:items-center justify-center gap-12 px-6 md:px-12 py-14 bg-[#f3d7ea]">
      {/* Left Column */}
      <div className="lg:w-2/3 space-y-8 text-center md:text-center lg:text-left">
        <h2 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[93px] font-bold leading-tight overflow-hidden">
          <div
            ref={line1Ref}
            className="flex flex-wrap justify-center lg:justify-start overflow-hidden"
            style={{ lineHeight: 1 }}
          >
            {line1Text.map((item, index) => (
              <span key={index} className="overflow-hidden">
                <span
                  className={`letter inline-block text-black ${
                    item.className || ""
                  }`}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </span>
              </span>
            ))}
          </div>

          <div
            ref={line2Ref}
            className="flex flex-wrap justify-center lg:justify-start overflow-hidden"
            style={{ lineHeight: 1 }}
          >
            {line2Text.map((item, index) => (
              <span key={index} className="overflow-hidden">
                <span className="letter inline-block text-black">
                  {item.char}
                </span>
              </span>
            ))}
          </div>
        </h2>

        {/* Subheading and Divider */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
          <div className="h-0.5 w-24 mt-5 bg-pink-800" />
          <p className="text-sm text-black text-center sm:text-left leading-[1.75]">
            Turning Bold Ideas Into
            <br />
            Market-Ready Products.
          </p>
        </div>

        {/* Button */}
        <div className="w-full flex justify-center lg:justify-start">
          <a
            href="https://nocodenest.vercel.app/"
            rel="noopener noreferrer"
            className="w-full sm:w-[320px] md:w-[420px] lg:w-[457px] px-6 py-3 cursor-pointer text-sm border border-gray-400 text-black relative overflow-hidden group inline-block text-center"
          >
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-pink-800 rounded-full transition-all duration-400 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              Explore Our Process
            </span>
          </a>
        </div>
      </div>

      {/* Right Column: Steps */}
      <div className="h-[600px] relative lg:w-1/3 flex flex-col gap-4 w-full max-w-xl">
        <FlowingMenu items={flowItems} />
      </div>
    </div>
  );
}