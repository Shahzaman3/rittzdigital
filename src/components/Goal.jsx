"use client";
import React, { useEffect, useRef } from "react";
import ScrollAnimatedDiv from "@/animations/ScrollAnimation";
import gsap from "gsap";

export default function Ourgoals() {
  const anime1 = useRef(null);
  const anime2 = useRef(null);
  const anime3 = useRef(null);
  const anime4 = useRef(null);
  const anime5 = useRef(null);

  useEffect(() => {
    const elements = [anime1, anime2, anime3, anime4, anime5];
    elements.forEach((ref, index) => {
      gsap.to(ref.current, {
        y: "10px",
        ...(index === 2 ? { x: "10px" } : index === 3 ? { x: "10px" } : {}),
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });
  }, []);

  return (
    <section className="bg-white py-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <ScrollAnimatedDiv />
          <div className="relative z-10">
            {/* Goals Header */}
            <div className="text-right mb-10 absolute -top-20 right-0 hidden sm:block">
              <h2 className="font-bold mt-4">
                <span className="text-green-500 text-[7vh] sm:text-[8vh] md:text-[10vh] xl:text-[12vh]">O</span>
                <span className="text-gray-800 text-[6vh] sm:text-[7vh] md:text-[8vh] xl:text-[9vh]">ur </span>
                <span className="text-gray-900 text-[6vh] sm:text-[7vh] md:text-[8vh] xl:text-[9vh]">Goals</span>
              </h2>
              <div className="flex justify-end items-start mt-2">
                <div className="h-auto flex items-center justify-center">
                  <div className="h-0.5 w-[80px] xl:w-[111px] bg-gray-300 my-4 mx-1"></div>
                </div>
                <div className="text-sm text-gray-500 leading-[1.75]">Code And Rules,<br />Creativity and Passion.</div>
              </div>
            </div>

            {/* Top Row Cards */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-5 mb-5">
              <div className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 w-full sm:w-[300px] xl:w-[362px] h-[282px]">
                <div ref={anime1} className="w-full relative mb-10">
                  <img src="/assets/Rectangle 4156.png" className="absolute top-0 left-1/3" />
                  <img src="/assets/Rectangle 4157.png" className="absolute -top-2 left-1/2" />
                </div>
                <h3 className="font-semibold text-lg xl:text-[20px] mb-4 text-gray-700">End-To-End Collaboration</h3>
                <p className="text-sm text-gray-500">We Work With You From The First Idea To The Final Launch.</p>
              </div>

              <div className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 w-full sm:w-[300px] xl:w-[362px] h-[282px]">
                <div ref={anime2} className="w-full relative mb-10">
                  <img src="/assets/Rectangle 4158.png" className="absolute top-0 left-1/3" />
                  <img src="/assets/Rectangle 4161.png" className="absolute top-0 left-1/3" />
                  <img src="/assets/Rectangle 4159.png" className="absolute top-0 left-1/2" />
                  <img src="/assets/Rectangle 4160.png" className="absolute top-4 left-[55%]" />
                </div>
                <h3 className="font-semibold text-lg xl:text-[20px] mb-4 text-gray-700">Creative Problem-Solving</h3>
                <p className="text-sm text-gray-500">Blending Logic And Artistry To Deliver Smart, Elegant Solutions.</p>
              </div>
            </div>

            {/* Bottom Row Cards */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-5">
              <div className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 w-full sm:w-[300px] xl:w-[362px] h-[282px]">
                <div ref={anime3} className="w-full relative mb-10">
                  <img src="/assets/Group 31.png" className="absolute top-0 left-1/3" />
                  <img src="/assets/Group 32.png" className="absolute -top-2 left-1/2" />
                </div>
                <h3 className="font-semibold text-lg xl:text-[20px] mb-4 text-gray-700">Iterative Process</h3>
                <p className="text-sm text-gray-500">We Refine, Test, And Improve Every Step Of The Way.</p>
              </div>

              <div className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 w-full sm:w-[300px] xl:w-[362px] h-[282px]">
                <div ref={anime4} className="w-full relative mb-10">
                  <img src="/assets/blue circle.png" className="absolute top-0 left-[40%]" />
                  <img src="/assets/blue star.png" className="absolute -top-2 left-[35%]" />
                  <img src="/assets/red dot.png" className="absolute -top-1 left-[50%]" />
                  <img src="/assets/red rectangle.png" className="absolute -top-2 left-[49%]" />
                  <img src="/assets/yellow dot.png" className="absolute top-4 left-[25%]" />
                  <img src="/assets/yellow rectangle.png" className="absolute top-3 left-[22%]" />
                </div>
                <h3 className="font-semibold text-lg xl:text-[20px] mb-4 text-gray-700">Engineering Meets Empathy</h3>
                <p className="text-sm text-gray-500">Our Tech Is Grounded In Purpose And Built For Real-World Use.</p>
              </div>

              <div className="bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 w-full sm:w-[300px] xl:w-[362px] h-[282px]">
                <div ref={anime5} className="w-full relative mb-10">
                  <img src="/assets/Ellipse 49.png" className="absolute top-0 left-1/3" />
                  <img src="/assets/Vector.png" className="absolute top-0.5 left-[42%]" />
                </div>
                <h3 className="font-semibold text-lg xl:text-[20px] mb-4 text-gray-700">Launch-Ready Mindset</h3>
                <p className="text-sm text-gray-500">We Don’t Stop At Ideas; We Take Products To Market.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="overflow-hidden whitespace-nowrap mt-12">
          <div className="inline-block animate-marquee text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white soft-shadow">
            Build faster. Launch smarter. No code required.
          </div>
        </div>
      </div>
    </section>
  );
}
