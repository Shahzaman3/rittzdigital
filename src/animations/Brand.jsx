"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Brand() {
  const cubeRef = useRef(null);
  const textRef = useRef(null);


  useEffect(() => {
    const cube = cubeRef.current;
    const text = textRef.current;

    // Initial setup
    gsap.set(text, { opacity: 0, x: -100 });
    gsap.set(cube, { scale: 2, y: 50 });

    // Zoom timeline with text reveal after zoom completes
    const zoomTl = gsap.timeline({
      scrollTrigger: {
        trigger: cube,
        start: "top 90%",
        end: "top 10%",
        scrub: true,
      },
    });

    zoomTl
      .to(cube, {
        scale: 1,
        y: 0,
        ease: "power2.out",
      })
      .to(
        text,
        {
          opacity: 1,
          x:0,
          ease: "power2.out",
          duration: 0.5,
        },
        ">+0.1"
      );

    // Rotation timeline - smooth y movement with easing
    const rotateTl = gsap.timeline({
      scrollTrigger: {
        trigger: cube,
        start: "top 3%",
        end: "bottom 105%",
        scrub: 2,
        //markers: true,
      },
    });

    rotateTl.to(cube, {
      rotateX: -90,
      y: 110,
      ease: "power2.inOut",
      duration: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      style={{ perspective: "1400px" }}
      className="flex justify-center items-center h-[120vh] overflow-x-hidden bg-gray-200 z-0"
    >
      <div
        ref={cubeRef}
        className="relative w-[74rem] h-[30rem] mb-[10rem] rounded-[40px] transform-style-preserve-3d"
        style={{
          transformStyle: "preserve-3d" ,
        }}
      >
        <div
          className="absolute w-full h-full rounded-[40px] bg-amber-500 p-20 flex items-center justify-between text-white"
          style={{ transform: "translateZ(244px)" }}
        >
          <div ref={textRef}>
            <p className="text-[28px] font-semibold text-gray-800">
              Behind The Brand
            </p>
            <h2 className="text-[40px] font-semibold leading-snug">
              We are not afraid. we are
              <br />
              your partners.
              <br />
              we build unique with you.
            </h2>
          </div>
         <div className="bg-white rounded-md  relative  w-50 h-50 " >
          <img src="/assets/Rectangle 4206.png" alt="Brand Graphic" className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <img src="/assets/Rectangle 4207.png" alt="Brand Graphic" className="absolute bottom-12 right-15 " />
          <img src="/assets/Ellipse 60.png" alt="Brand Graphic" className="absolute bottom-14 right-10" />
          <img src="/assets/Polygon 1.png" alt="Brand Graphic" className="absolute top-14 left-12" />
        </div>
        </div>

        <div
          className="absolute w-full h-full rounded-[40px] bg-[#fff6db] p-20 flex items-center justify-between text-black overflow-x-hidden"
          style={{
            transform: "rotateX(90deg) translateZ(244px)",
            backfaceVisibility: "hidden",
          }}
        >
          <div >
            <p className="text-[28px] font-semibold text-gray-800">
              Behind The Brand
            </p>
            <p className="text-[40px] font-semibold">
              we{" "}
              <span className="text-yellow-500 font-semibold">
                blend design
              </span>
              , tech, and creativity
              <br />
              to build{" "}
              <span className="text-yellow-500 font-semibold">
                products
              </span>{" "}
              that put
              <br />
              customers first.
            </p>
          </div>
          <div className="border border-yellow-500 rounded-md relative  w-50 h-50 p-2" >
          <img src="/assets/Rectangle 4206.png" alt="Brand Graphic" className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   rotate-[60deg]" />
          <img src="/assets/Rectangle 4207.png" alt="Brand Graphic" className="absolute bottom-12 right-15 " />
          <img src="/assets/Ellipse 60.png" alt="Brand Graphic" className="absolute bottom-8 right-18" />
          <img src="/assets/Polygon 1.png" alt="Brand Graphic" className="absolute top-10 left-18.5" />
          </div>

        </div>
      </div>
    </div>
  );
}