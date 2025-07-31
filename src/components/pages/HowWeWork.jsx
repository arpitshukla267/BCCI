"use client";
import Image from "next/image";
import React, { useState } from "react";

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
      image: "/howwework1.png",
      description: "We work towards the economic development of the Bundelkhand region.",
    },
    {
      title: <>Training And <br /> Resources</>,
      image: "/howwework4.png",
      description: "We provide training and resources to help businesses grow and succeed.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // ✅ Determine card positioning and movement
  const getCardClasses = (index) => {
    const isHovered = hoveredIndex !== null;
    const isHoveredEven = hoveredIndex % 2 === 0;
    const isCurrentEven = index % 2 === 0;

    const baseClasses = `
      group w-full md:w-1/4 transition-all duration-500 ease-in-out 
      overflow-hidden bg-transparent rounded-xl
      flex flex-col items-center transform
    `;

    // Zigzag layout
    const defaultPos = isCurrentEven ? "md:self-start items-start" : "md:self-end items-end";

    // Movement on hover
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
    <div className="relative bg-white min-h-fit overflow-hidden pb-6 px-4 mt-94 md:mt-[-5rem]">
      {/* ✅ Background watermark image */}
          <div className="absolute right-[-55rem] inset-0 opacity-20 z-0 pointer-events-none">
            <Image
              src="/bg.png"
              alt="Background Watermark"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block absolute left-[-5rem] top-[3rem] opacity-50 z-0 pointer-events-none rotate-[250deg]">
            <Image
              src="/bg.png"
              alt="Background Watermark"
              width={600}   // set custom width
              height={300}  // set custom height
              className="object-contain"
              priority
            />
          </div>


      {/* ✅ All content stays above the background */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center text-orange-500 underline mb-4 md:mb-34">
          How We Work
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:px-20 items-start gap-6 mt-20 md:mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={getCardClasses(index)}
            >
              <div className="flex flex-col  bg-transparent items-center text-center md:p-4 transition-all duration-300 w-full">
                <Image
                  src={card.image}
                  alt={`Image for ${index}`}
                  width={220}
                  height={64}
                  className="mb-4 max-w-60 object-contain"
                />
                <h3 className="text-xl bg-orange-500 text-white font-semibold rounded-b-[100rem] min-h-[7.5rem] px-15 py-5">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Description below */}
        <div className="mt-30 h-20 flex items-center justify-center px-6">
          {hoveredIndex !== null && (
            <p
              key={hoveredIndex}
              className={`
                transition-all duration-500 ease-in-out transform
                opacity-0 translate-y-5
                animate-fade-in-up
                text-xl text-orange-600 text-center max-w-2xl font-semibold
              `}
            >
              {cards[hoveredIndex].description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
