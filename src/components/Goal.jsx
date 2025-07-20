"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Goals() {
  const caseRef = useRef();
  const caseText = [
    { char: "O", className: "text-green-500" },
    { char: "u" },
    { char: "r" },
    { char: " " },
    { char: "G" },
    { char: "o" },
    { char: "a" },
    { char: "l" },
    { char: "s" },
  ];

  useEffect(() => {
    const letters = caseRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: "150%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: caseRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);
  return (
    <div id="Our Goals" className="w-full h-[100vh] overflow-hidden relative grid grid-cols-1 xl:grid-cols-2 bg-white hide-scrollbar">
      <div className="flex flex-col justify-items-start z-20">
        <div className="text-right bg-white py-8 px-6 w-full">
          <h2
            className="text-[clamp(2.5rem,10vw,6rem)] font-bold leading-tight overflow-hidden"
            ref={caseRef}
          >
            <div
              className="flex flex-wrap overflow-hidden"
              style={{ lineHeight: 1 }}
            >
              {caseText.map((item, index) => (
                <span key={index} className="overflow-hidden">
                  <span
                    className={`letter inline-block text-gray-800 ${
                      item.className || ""
                    }`}
                  >
                    {item.char === " " ? "\u00A0" : item.char}
                  </span>
                </span>
              ))}
            </div>
          </h2>
          <div className="flex align-middle">
            <div className="h-auto flex align-center justify-center">
              <div className="h-0.5 w-14  sm:w-[111px] bg-gray-600 my-7  mx-1 "></div>
            </div>
            <div className="text-sm text-black mt-1 text-right sm:text-left leading-[1.75]">
              Code And Rules,
              <br />
              Creativity and Passion.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between animate-goals">
        {/* 1️⃣ End-To-End Collaboration */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              src="/assets/lines.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            End-To-End Collaboration
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Work With You From The First Idea To The Final Launch.
          </p>
        </div>

        {/* 2️⃣ Creative Problem-Solving */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-2 md:gap-3 xl:gap-4 flex-wrap">
            <img
              src="/assets/problem.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Creative Problem-Solving
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            Blending Logic And Artistry To Deliver Smart, Elegant Solutions.
          </p>
        </div>

        {/* 3️⃣ Iterative Process */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              className="w-10 md:w-15 xl:w-18"
              src="/assets/recycle.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Iterative Process
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Refine, Test, And Improve Every Step Of The Way.
          </p>
        </div>

        {/* 4️⃣ Engineering Meets Empathy */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-2 md:gap-3 xl:gap-4 flex-wrap">
            <img
              src="/assets/engine.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Engineering Meets Empathy
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            Our Tech Is Grounded In Purpose And Built For Real-World Use.
          </p>
        </div>

        {/* 5️⃣ Launch-Ready Mindset */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              src="/assets/checked.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Launch-Ready Mindset
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Don’t Stop At Ideas; We Take Products To Market.
          </p>
        </div>

        {/* repeat for smooth scrolling */}

        {/* 1️⃣ End-To-End Collaboration */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              src="/assets/lines.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            End-To-End Collaboration
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Work With You From The First Idea To The Final Launch.
          </p>
        </div>

        {/* 2️⃣ Creative Problem-Solving */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-2 md:gap-3 xl:gap-4 flex-wrap">
            <img
              src="/assets/problem.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Creative Problem-Solving
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            Blending Logic And Artistry To Deliver Smart, Elegant Solutions.
          </p>
        </div>

        {/* 3️⃣ Iterative Process */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              className="w-10 md:w-15 xl:w-18"
              src="/assets/recycle.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Iterative Process
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Refine, Test, And Improve Every Step Of The Way.
          </p>
        </div>

        {/* 4️⃣ Engineering Meets Empathy */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-2 md:gap-3 xl:gap-4 flex-wrap">
            <img
              src="/assets/engine.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Engineering Meets Empathy
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            Our Tech Is Grounded In Purpose And Built For Real-World Use.
          </p>
        </div>

        {/* 5️⃣ Launch-Ready Mindset */}
        <div className="relative bg-[#f7f3ef] w-[90%] max-w-4xl mx-auto shadow-md mb-6 px-6 py-10 flex flex-col items-center border border-black">
          <div className="flex justify-center items-center mb-8 gap-3 md:gap-4 xl:gap-6">
            <img
              src="/assets/checked.png"
              alt="Icon"
              className="w-10 md:w-15 xl:w-18"
            />
          </div>
          <h3 className="font-semibold text-2xl md:text-3xl xl:text-4xl mb-4 text-gray-700 text-center">
            Launch-Ready Mindset
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center max-w-xl">
            We Don’t Stop At Ideas; We Take Products To Market.
          </p>
        </div>
      </div>
    </div>
  );
}
