"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    setShowContact((prev) => !prev);
    setMobileMenuOpen(false);
  };

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
      {!mobileMenuOpen && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
          } bg-white/70 backdrop-blur-md border-b border-[#e3e3e3] shadow-[0_2px_10px_rgba(0,0,0,0.05)]`}
        >
          <div className="w-full h-18 lg:h-20 flex justify-between items-center px-4 md:px-8">
            <a href="/">
              <img
                className="h-8 md:h-12 lg:h-16 object-contain"
                src="/assets/rittz_logo.png"
                alt="Rittz Digital Logo"
              />
            </a>

            <div className="flex items-center gap-4 text-xl font-light">
              <button
                onClick={handleContactClick}
                className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              >
                <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  Talk To Us
                </span>
              </button>
              {["#testimonials", "#Our Goals", "#What We Do"].map((link, i) => (
                <a
                  key={i}
                  href={link}
                  className="hidden font-normal text-lg lg:block relative overflow-hidden group"
                >
                  <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                    {link
                      .replace("#", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
                  </span>
                </a>
              ))}
              <a
                className="hidden font-normal text-lg lg:block relative overflow-hidden group"
                href="https://nocodenest.vercel.app/"
                target="_blank"
              >
                <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                  No Code Nest
                </span>
              </a>

              <div
                className="h-12 w-12 ml-2 cursor-pointer lg:hidden"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
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
      )}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-[100dvh] w-full pl-[12rem] pt-12 bg-black/80 backdrop-blur-lg z-40 text-white flex flex-col justify-center items-start px-10 gap-8 text-3xl font-medium lg:hidden"
          >
            <button
              className="absolute top-5 right-5 text-white text-4xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>

            <div className="absolute top-18 left-0 w-full h-[1px] bg-white" />
            <div className="absolute top-0 left-30 h-full w-[1px] bg-white" />

            <a
              onClick={handleContactClick}
              className="transition-all duration-200 hover:w-full hover:h-[3rem] hover:bg-white hover:text-gray-700 px-2 rounded"
            >
              Talk To Us
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="transition-all duration-200 hover:w-full hover:h-[3rem] hover:bg-white hover:text-gray-700 px-2 rounded"
            >
              Testimonials
            </a>
            <a
              href="https://nocodenest.vercel.app/"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="transition-all duration-200 hover:w-full hover:h-[3rem] hover:bg-white hover:text-gray-700 px-2 rounded"
            >
              No Code Nest
            </a>
            <a
              href="#Our Goals"
              onClick={() => setMobileMenuOpen(false)}
              className="transition-all duration-200 hover:w-full hover:h-[3rem] hover:bg-white hover:text-gray-700 px-2 rounded"
            >
              Our Goals
            </a>
            <a
              href="#What We Do"
              onClick={() => setMobileMenuOpen(false)}
              className="transition-all duration-200 hover:w-full hover:h-[3rem] hover:bg-white hover:text-gray-700 px-2 rounded"
            >
              What We Do
            </a>
          </motion.div>
        )}
      </AnimatePresence>

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