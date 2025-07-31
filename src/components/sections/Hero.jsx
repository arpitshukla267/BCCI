"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";

const images = [
  {
    src: "/hero1.jpeg",
    heading: (
      <>
        Empowering Businesses <br /> in Bundelkhand
      </>
    ),
    button: "Join Us Today",
  },
  {
    src: "/hero2.jpeg",
    heading: (
      <>
        Networking for Growth <br /> & Innovation
      </>
    ),
    button: "Become a Member",
  },
  {
    src: "/hero3.jpeg",
    heading: (
      <>
        Collaborate. Innovate. <br /> Succeed.
      </>
    ),
    button: "Explore Services",
  },
  {
    src: "/hero1.jpeg",
    heading: (
      <>
        Empowering Businesses <br /> in Bundelkhand
      </>
    ),
    button: "Join Us Today",
  },
  {
    src: "/hero2.jpeg",
    heading: (
      <>
        Networking for Growth <br /> & Innovation
      </>
    ),
    button: "Become a Member",
  },
  {
    src: "/hero3.jpeg",
    heading: (
      <>
        Collaborate. Innovate. <br /> Succeed.
      </>
    ),
    button: "Explore Services",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Nav />
      <h1 className="md:hidden mt-40 text-5xl font-bold text-black relative z-20 px-5">
        For<br/>business.<br/>For you.
      </h1>
      {/* ---- DESKTOP (fade animation) ---- */}
      {!isMobile && (
       <div className="lg:px-20 md:px-10"> 
        <div className="relative w-full h-[500px] overflow-hidden mt-10 rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[index].src}
              src={images[index].src}
              alt={`Hero ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-10">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              {images[index].heading}
            </h1>
            <button className="bg-orange-500 px-6 py-3 rounded shadow hover:bg-orange-600 w-fit">
              {images[index].button}
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  i === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
       </div> 
      )}

      {/* ---- MOBILE (partial slide animation) ---- */}
      {isMobile && (
        <div className="relative w-full overflow-hidden mt-15">
          <motion.div
            className="flex items-center"
            animate={{ x: `-${index * 85}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {images.map((img, i) => {
              const isActive = i === index;
              return (
                <motion.div
                  key={i}
                  className="relative flex-shrink-0"
                  style={{
                    width: "80%",
                    margin: "0 10px",
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={img.src}
                    alt={`Slide ${i}`}
                    className="rounded-2xl w-full h-[450px] object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  i === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
