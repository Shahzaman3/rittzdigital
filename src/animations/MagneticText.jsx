"use client";
import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticText() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    lettersRef.current.forEach((letter) => {
      const letterRect = letter.getBoundingClientRect();
      const letterX = letterRect.left - rect.left + letterRect.width / 2;
      const letterY = letterRect.top - rect.top + letterRect.height / 2;

      const dx = letterX - mouseX;
      const dy = letterY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      const force = Math.min(5000 / dist, 500);

      gsap.to(letter, {
        x: (dx / dist) * force,
        y: (dy / dist) * force,
        duration: 2,
        ease: "power3.out",
      });
    });
  };

  const handleMouseLeave = () => {
    lettersRef.current.forEach((letter) => {
      gsap.to(letter, {
        x: 0,
        y: 0,
        duration: 6,
        delay: 0.2,
        ease: "elastic.out(1, 0.3)",
      });
    });
  };

  const renderText = (text, extraClasses = "") =>
    text.split("").map((char, index) => (
      <span
        key={`${char}-${index}`}
        ref={addToRefs}
        className={`inline-block ${extraClasses}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <div
      ref={containerRef}
      className="text-5xl cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-wrap leading-tight">
        <span className="font-bold text-6xl">
          {renderText("W")}
        </span>
        {renderText("e Build Products")}
      </div>
      <br />
      <div className="flex flex-wrap">
        {renderText("That ")}
        <span className="font-bold">{renderText("Scale —")}</span>
      </div>
      <br />
      <div className="flex flex-wrap">
        <span className="font-bold">{renderText("No Code Required.")}</span>
      </div>
    </div>
  );
}
