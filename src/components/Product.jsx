"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function NoCodeNestShowcasePro() {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const bgBlobRef = useRef(null);

  useEffect(() => {
    // Scroll fade & float
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      }
    );

    // Parallax blob float
    gsap.to(bgBlobRef.current, {
      y: -30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 6,
    });
  }, []);

  // 3D tilt on hover effect
  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / 20).toFixed(2);
    const rotateY = (x / 20).toFixed(2);

    imageRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section className="relative flex justify-center items-center py-20 px-4 md:px-8 bg-gradient-to-br from-[#fdfdfd] via-[#fafafa] to-[#f0f0f0] overflow-hidden">
      {/* Floating gradient blob behind */}
      <div
        ref={bgBlobRef}
        className="absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-full opacity-25 blur-3xl"
      />

      <div
        ref={cardRef}
        className="relative max-w-6xl w-full bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-200 hover:shadow-3xl transition-shadow duration-500"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image with tilt */}
          <div
            className="relative w-full aspect-square md:aspect-auto cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={imageRef}
              className="transition-transform duration-300 ease-out"
            >
              <img
                src="/assets/nocodenest.png" // Replace with your product image
                alt="NoCode Nest"
                width={600}
                height={600}
                className="object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Text & CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              NoCode Nest
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Build stunning websites without code. Pixel-perfect design, fast
              launch & fully responsive — crafted for creators.
            </p>

            {/* Pixelated / glassy CTA */}
            <a
              href="https://nocodenest.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-gray-300 text-gray-800 font-semibold rounded-full shadow-md 
             hover:bg-white/40 hover:scale-105 hover:shadow-lg 
             active:scale-100 active:shadow-md 
             transition-all duration-300 ease-in-out"
              style={{ fontFamily: "monospace" }}
            >
              Explore NoCode Nest{" "}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle parallax gradient lines or shapes (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-px h-1/2 bg-gradient-to-b from-purple-400 via-transparent to-transparent opacity-20 animate-pulse" />
        <div className="absolute right-0 bottom-1/4 w-px h-1/3 bg-gradient-to-t from-indigo-400 via-transparent to-transparent opacity-20 animate-pulse" />
      </div>
    </section>
  );
}
