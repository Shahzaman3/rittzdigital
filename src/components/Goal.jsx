"use client";

import React, { useEffect, useRef } from "react";
import ScrollAnimatedDiv from "@/animations/ScrollAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Ourgoals() {
  const anime1 = useRef(null);
  const anime2 = useRef(null);
  const anime3 = useRef(null);
  const anime4 = useRef(null);
  const anime5 = useRef(null);
  const textRef = useRef(null);
  const heading = "Our Goals";

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

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
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );

    const elements = [anime1, anime2, anime3, anime4, anime5];
    elements.forEach((ref, index) => {
      gsap.to(ref.current, {
        y: "10px",
        ...(index === 2 || index === 3 ? { x: "10px" } : {}),
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });
  }, []);

  return (
    <section className="bg-white py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <ScrollAnimatedDiv />

          <div className="relative z-10">
            <div className="text-right mb-16 sm:mb-6 sm:absolute sm:-top-3 md:top-0 right-0 px-2">
              <h2
                ref={textRef}
                className="text-[clamp(2.5rem,10vw,6rem)] font-bold leading-tight overflow-hidden"
              >
                {heading.split("").map((char, i) => (
                  <span
                    key={i}
                    className={`inline-block overflow-hidden ${
                      char === "O"
                        ? "text-green-500"
                        : char === " "
                        ? "text-gray-800"
                        : "text-gray-900"
                    }`}
                  >
                    <span className="letter inline-block">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </h2>

              <div className="flex justify-end items-start mt-2">
                <div className="h-auto flex items-center justify-center">
                  <div className="h-0.5 w-[60px] sm:w-[80px] xl:w-[111px] bg-gray-300 my-4 mx-1"></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 leading-[1.75] text-right">
                  Code And Rules,
                  <br />
                  Creativity and Passion.
                </div>
              </div>
            </div>

            
            <div className="flex flex-wrap justify-center gap-5 mb-5 sm:pt-[11rem]">
              
              <div className="bg-white rounded-[20px] p-7 w-[90%] sm:w-[300px] xl:w-[400px] h-[260] max-h-[282px] mx-auto sm:mx-0 text-center shadow-[8px_8px_20px_rgba(0,0,0,0.05),_-4px_-4px_12px_rgba(255,165,0,0.15)] border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,165,0,0.25)]">
                <div ref={anime1} className="w-full relative h-[60px] mb-6">
                  <img
                    src="/assets/Rectangle 4156.png"
                    className="absolute top-3 left-1/2 -translate-x-[125%]"
                  />
                  <img
                    src="/assets/Rectangle 4157.png"
                    className="absolute top-0 left-1/2 -translate-x-[1%]"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-700">
                  End-To-End Collaboration
                </h3>
                <p className="text-sm text-gray-500">
                  We Work With You From The First Idea To The Final Launch.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-7 h-[260px] max-h-[282px] w-[90%] sm:w-[300px] xl:w-[400px] mx-auto sm:mx-0 text-center shadow-[8px_8px_20px_rgba(0,0,0,0.05),_-4px_-4px_12px_rgba(255,165,0,0.15)] border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,165,0,0.25)]">
                <div ref={anime2} className="w-full relative h-[60px] mb-6">
                  <img
                    src="/assets/Rectangle 4158.png"
                    className="absolute top-5 left-1/2 -translate-x-[125%]"
                  />
                  <img
                    src="/assets/Rectangle 4161.png"
                    className="absolute top-8 left-1/2 -translate-x-[65%]"
                  />
                  <img
                    src="/assets/Rectangle 4159.png"
                    className="absolute top-5 left-1/2 -translate-x-[95%]"
                  />
                  <img
                    src="/assets/Rectangle 4160.png"
                    className="absolute top-7 left-1/2 -translate-x-[15%]"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-700">
                  Creative Problem-Solving
                </h3>
                <p className="text-sm text-gray-500">
                  Blending Logic And Artistry To Deliver Smart, Elegant
                  Solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              
              <div className="bg-white rounded-[20px] p-7 h-[260px] max-h-[282px] w-[90%] sm:w-[300px] xl:w-[400px] mx-auto sm:mx-0 text-center shadow-[8px_8px_20px_rgba(0,0,0,0.05),_-4px_-4px_12px_rgba(255,165,0,0.15)] border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,165,0,0.25)]">
                <div ref={anime3} className="w-full relative h-[60px] mb-6">
                  <img
                    src="/assets/Group 31.png"
                    className="absolute top-6 left-1/2 -translate-x-[125%]"
                  />
                  <img
                    src="/assets/Group 32.png"
                    className="absolute top-3 left-1/2 -translate-x-[1%]"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-700">
                  Iterative Process
                </h3>
                <p className="text-sm text-gray-500">
                  We Refine, Test, And Improve Every Step Of The Way.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-7 h-[260px] max-h-[282px] w-[90%] sm:w-[300px] xl:w-[400px] mx-auto sm:mx-0 text-center shadow-[8px_8px_20px_rgba(0,0,0,0.05),_-4px_-4px_12px_rgba(255,165,0,0.15)] border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,165,0,0.25)]">
                <div ref={anime4} className="w-full relative h-[60px] mb-6">
                  <img
                    src="/assets/blue circle.png"
                    className="absolute top-2 left-1/2 -translate-x-[125%]"
                  />
                  <img
                    src="/assets/blue star.png"
                    className="absolute top-3 left-1/2 -translate-x-[95%]"
                  />
                  <img
                    src="/assets/red dot.png"
                    className="absolute top-3 left-1/2 -translate-x-[55%]"
                  />
                  <img
                    src="/assets/red rectangle.png"
                    className="absolute top-2 left-1/2 -translate-x-[45%]"
                  />
                  <img
                    src="/assets/yellow dot.png"
                    className="absolute top-5 left-1/2 -translate-x-[75%]"
                  />
                  <img
                    src="/assets/yellow rectangle.png"
                    className="absolute top-7 left-1/2 -translate-x-[90%]"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-700">
                  Engineering Meets Empathy
                </h3>
                <p className="text-sm text-gray-500">
                  Our Tech Is Grounded In Purpose And Built For Real-World Use.
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-7 h-[260px] max-h-[282px] w-[90%] sm:w-[300px] xl:w-[400px] mx-auto sm:mx-0 text-center shadow-[8px_8px_20px_rgba(0,0,0,0.05),_-4px_-4px_12px_rgba(255,165,0,0.15)] border border-orange-100 transition-all duration-300 hover:scale-105 hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),_-6px_-6px_16px_rgba(255,165,0,0.25)]">
                <div ref={anime5} className="w-full relative h-[60px] mb-6">
                  <img
                    src="/assets/Ellipse 49.png"
                    className="absolute top-6 left-1/2 -translate-x-[125%]"
                  />
                  <img
                    src="/assets/Vector.png"
                    className="absolute top-5 left-1/2 -translate-x-[55%]"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 text-gray-700">
                  Launch-Ready Mindset
                </h3>
                <p className="text-sm text-gray-500">
                  We Don’t Stop At Ideas; We Take Products To Market.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap mt-12">
          <div className="inline-block animate-marquee text-2xl sm:text-4xl md:text-6xl xl:text-7xl font-extrabold text-white soft-shadow">
            Build faster. Launch smarter. No code required.
          </div>
        </div>
      </div>
    </section>
  );
}