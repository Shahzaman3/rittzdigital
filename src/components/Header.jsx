"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContact, setShowContact] = React.useState(false);
  const handleContactClick = () => setShowContact((prev) => !prev);
  const handleClose = () => setShowContact(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } bg-white/70 backdrop-blur-md border-b border-[#e3e3e3] shadow-[0_2px_10px_rgba(0,0,0,0.05)]`}
      >
        <div className="w-full h-18 lg:h-20 drop-shadow-xl flex justify-between items-center">
          <a href="">
            <img
              className="items-center p-4 object-cover h-16 md:h-20"
              src="/assets/rittz_logo.png"
              alt="Peek Insights Logo"
            />
          </a>
          <div className="flex items-center gap-4 mr-4 text-xl font-light">
            <button
              onClick={handleContactClick}
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Talk To Us
              </span>
            </button>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#testimonials"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Testimonials
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href=""
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                No Code Nest
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#ourgoals"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Our Goals
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#whatwedo"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                What We Do
              </span>
            </a>
            <div className="h-12 w-12 mr-4 cursor-pointer lg:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M4 8H20M4 16H12"
                  stroke="#000000"
                  strokeWidth="0.696"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <Contact onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
