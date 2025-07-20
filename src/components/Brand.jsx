"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { brandImageAnimation } from "@/animations/BrandAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Brand() {
  const cubeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const text = textRef.current;

    gsap.set(text, { opacity: 0, x: -100 });
    gsap.set(cube, { scale: 2, y: 50 });

    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: cube,
        start: "top 50%",
        end: "top 10%",
        scrub: true,
      },
    });

    zoomTl
      .to(cube, { scale: 1, y: 0, ease: "power2.out" })
      .to(
        text,
        { opacity: 1, x: 0, ease: "power2.out", duration: 0.5 },
        ">+0.1"
      );

    const rotateTl = gsap.timeline({
      scrollTrigger: {
        trigger: cube,
        start: "top 15%",
        end: "bottom 125%",
        scrub: 2,
      },
    });

    rotateTl.to(cube, {
      rotateX: -90,
      y: 60,
      ease: "power2.inOut",
      duration: 2,
    });
    const cleanupImages = brandImageAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cleanupImages(); 
    };
  }, []);

  return (
    <div className="bg-gray-200 px-2 z-0 overflow-x-hidden hide-scrollbar">
      <div className="block md:hidden py-10">
        <div className="mx-auto w-full max-w-[90%] space-y-8">
          <div className="bg-amber-500 text-white rounded-[30px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            <div className="w-full sm:w-[65%] sm:pl-4">
              <p className="sm:text-lg font-semibold text-gray-800">
                Behind The Brand
              </p>
              <h2 className="sm:text-xl font-semibold leading-snug">
                We are not afraid.
                <br /> we are your partners.
                <br /> we build unique with you.
              </h2>
            </div>

            <div className="relative bg-white w-36 h-36 sm:w-40 sm:h-40 rounded-md flex-shrink-0">
              <img
                src="/assets/Rectangle 4206.png"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src="/assets/Rectangle 4207.png"
                className="absolute bottom-8 right-10"
              />
              <img
                src="/assets/Ellipse 60.png"
                className="absolute bottom-10 right-6"
              />
              <img
                src="/assets/Polygon 1.png"
                className="absolute top-8 left-6"
              />
            </div>
          </div>

          <div className="bg-[#fff6db] text-black rounded-[30px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            <div className="w-full sm:w-[65%] sm:pl-4">
              <p className="sm:text-lg font-semibold text-gray-800">
                Behind The Brand
              </p>
              <p className="sm:text-xl font-semibold">
                we <span className="text-yellow-500">blend design</span>, tech,
                <br /> and creativity to build <br />
                <span className="text-yellow-500">products</span> that put{" "}
                <br /> customers first.
              </p>
            </div>

            <div className="border border-yellow-500 relative w-[190px] h-[190px] rounded-md overflow-hidden flex-shrink-0">
              <div className="relative w-full h-full p-4">
                <img
                  src="/assets/Rectangle 4206.png"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"
                />
                <img
                  src="/assets/Rectangle 4207.png"
                  className="absolute bottom-8 right-10"
                />
                <img
                  src="/assets/Ellipse 60.png"
                  className="absolute bottom-6 right-14"
                />
                <img
                  src="/assets/Polygon 1.png"
                  className="absolute top-6 left-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ perspective: "1400px" }}
        className="hidden md:flex justify-center items-center h-[120vh]"
      >
        <div
          ref={cubeRef}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-[80%] xl:w-[82%] h-[30rem] mb-[6rem] rounded-[40px] transform-style-preserve-3d"
        >
          <div
            style={{ transform: "translateZ(244px)" }}
            className="absolute w-full h-full rounded-[40px] bg-amber-500 px-20 flex flex-row items-center justify-between text-white"
          >
            <div ref={textRef} className="max-w-[60%]">
              <p className="text-[28px] lg:text-[45px] xl:text-[50px] font-semibold text-gray-800">
                Behind The Brand
              </p>
              <h2 className="text-[28px] lg:text-[33px] xl:text-[35px] font-semibold leading-snug">
                We are not afraid.
                <br /> we are your partners.
                <br /> we build unique with you.
              </h2>
            </div>

            <div className=" bg-white rounded-md px-10 relative w-49 h-48 ml-7 mr-[35px]">
              <img
                src="/assets/Rectangle 4206.png"
                className="brand-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <img
                src="/assets/Rectangle 4207.png"
                className="brand-img absolute bottom-8 right-10"
              />
              <img
                src="/assets/Ellipse 60.png"
                className="brand-img absolute bottom-10 right-6"
              />
              <img
                src="/assets/Polygon 1.png"
                className="brand-img absolute top-8 left-6"
              />
            </div>
          </div>

          <div
            style={{
              transform: "rotateX(90deg) translateZ(244px)",
              backfaceVisibility: "hidden",
            }}
            className="absolute w-full h-full rounded-[40px] bg-[#fff6db] px-12 flex flex-row items-center justify-between text-black"
          >
            <div className="max-w-[60%] ml-[45px]">
              <p className="text-[28px] lg:text-[45px] xl:text-[50px] font-semibold text-gray-800">
                Behind The Brand
              </p>
              <p className="text-[28px] lg:text-[33px] xl:text-[35px] font-semibold">
                we <span className="text-yellow-500">blend design</span>, tech,
                <br /> and creativity to build <br />
                <span className="text-yellow-500">products</span> that put
                <br /> customers first.
              </p>
            </div>

            <div className="border border-yellow-500 rounded-md relative w-[190px] max-w-[190px] h-[200px] mr-[35px] overflow-hidden">
              <div className="relative w-full h-full p-[2rem]">
                <img
                  src="/assets/Rectangle 4206.png"
                  className="brand-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"
                />
                <img
                  src="/assets/Rectangle 4207.png"
                  className=" brand-img absolute bottom-8 right-10"
                />
                <img
                  src="/assets/Ellipse 60.png"
                  className="brand-img absolute bottom-6 right-14"
                />
                <img
                  src="/assets/Polygon 1.png"
                  className="brand-img absolute top-6 left-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
