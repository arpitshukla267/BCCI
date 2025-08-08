"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";

export default function HowWeWork() {   
  const cards = [
    {
      title: <>Networking <br /> Events</>,
      image: "/howwework1.png",
      description: "We organize events to connect businesses and foster collaboration.",
    },
    {
      title: <>Business <br /> Promotion</>,
      image: "/howwework2.png",
      description: "We promote local businesses through various channels to increase visibility.",
    },
    {
      title: <>Economic <br /> Development</>,
      image: "/howwework3.png",
      description: "We work towards the economic development of the Bundelkhand region.",
    },
    {
      title: <>Training And <br /> Resources</>,
      image: "/howwework4.png",
      description: "We provide training and resources to help businesses grow and succeed.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getCardClasses = (index) => {
    const isHovered = hoveredIndex !== null;
    const isHoveredEven = hoveredIndex % 2 === 0;
    const isCurrentEven = index % 2 === 0;

    const baseClasses = `
      group w-full md:w-1/4 transition-all duration-500 ease-in-out 
      overflow-hidden bg-opacity-0 rounded-xl
      flex flex-col items-center transform hover:scale-105 bg-transparent
    `;

    const defaultPos = isCurrentEven ? "md:self-start items-start" : "md:self-end items-end";

    let movement = "";
    if (isHovered) {
      if (isHoveredEven) {
        movement = isCurrentEven ? "md:-translate-y-10" : "md:translate-y-25";
      } else {
        movement = isCurrentEven ? "md:translate-y-40" : "md:-translate-y-30";
      }
    }

    return `${baseClasses} ${defaultPos} ${movement}`;
  };

  return (
    <div className="relative bg-transparent min-h-screen overflow-hidden pb-12 px-4 mt-[10rem] md:mt-[-5rem]">

      {/* 🎨 Blurred animated background blob */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-300 rounded-full filter blur-3xl opacity-30 animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] bg-yellow-200 rounded-full filter blur-2xl opacity-20 animate-ping z-0 pointer-events-none" />

      {/* ✅ Watermark image */}
      <div className="absolute right-[-55rem] inset-0 opacity-20 z-0 pointer-events-none">
        <Image src="/bg.png" alt="Background Watermark" fill className="object-contain" priority />
      </div>
      <div className="hidden md:block absolute left-[-5rem] top-[3rem] opacity-50 z-0 pointer-events-none rotate-[250deg]">
        <Image src="/bg.png" alt="Background Watermark" width={600} height={300} className="object-contain" priority />
      </div>

      {/* ✨ Main content */}
      <div className="relative z-10 ">
        <h1 className=" inline-block text-4xl w-full font-extrabold text-orange-500 text-center mt-10 md:mb-30 after:content-[''] after:block after:h-[5px] after:w-[45%] md:after:w-[12%] after:bg-orange-500 after:mx-auto after:mt-0 after:rounded-full">
          How We Work
        </h1>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row md:px-20 items-start bg-transparent gap-6 mt-20 md:mt-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={getCardClasses(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center md:p-4 transition-all duration-300 w-full">
                <Image
                  src={card.image}
                  alt={`Image for ${index}`}
                  width={220}
                  height={64}
                  className="md:mb-4 mb-1 md:max-w-60 max-w-40 object-contain"
                />
                <h3 className="md:text-md w-45 text-md bg-orange-500 text-white font-semibold rounded-b-[100rem] md:min-h-[7rem] min-h-[6rem] md:px-10 px-10 md:py-6 py-4">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description with animation */}
        <div className="md:mt-35 mt-15 h-20 flex items-center justify-center px-6 min-h-[4rem]">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
              <motion.p
                key={hoveredIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-xl text-orange-600 text-center max-w-2xl font-semibold"
              >
                {cards[hoveredIndex].description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
