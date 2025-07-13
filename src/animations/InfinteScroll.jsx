"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export default function InfiniteScroll({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 130,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    let rafId;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-t-2 border-b-2 border-t-dotted border-b-dotted border-transparent"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      <div className="absolute top-0 left-0 w-full h-1/4 bg-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-transparent z-10 pointer-events-none"></div>

      <div
        className="flex flex-col overscroll-contain px-4 origin-center"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center border-2 border-white rounded-[15px] select-none box-border relative"
            key={i}
            style={{
              height: `${itemMinHeight}px`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
