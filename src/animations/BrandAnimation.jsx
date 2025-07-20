"use client";
import gsap from "gsap";

export const brandImageAnimation = () => {
  gsap.utils.toArray(".brand-img").forEach((img, i) => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: i * 0.5,
    });

    tl.to(img, {
      x: () => Math.random() * 30 - 15,
      y: () => Math.random() * 30 - 15,
      rotation: () => Math.random() * 20 - 10,
      duration: 2.5,
      ease: "sine.inOut",
    });

    tl.to(img, {
      scaleX: () => 1 + Math.random() * 0.2,
      scaleY: () => 1 - Math.random() * 0.2,
      duration: 0.6,
      ease: "power1.inOut",
    });

    tl.to(img, {
      scale: 1,
      x: () => Math.random() * 20 - 10,
      y: () => Math.random() * 20 - 10,
      rotation: () => Math.random() * 15 - 7,
      duration: 2,
      ease: "power1.inOut",
    });
  });
};
