'use client';
import React from 'react';
import Image from 'next/image';

function OfficeBearers() {
  const members = [
    { src: '/ob3amit.png', alt: 'Amit', zIndex: 10, height: 'h-[30rem]', scale: 'scale-160', mt: 'mt-2' },     // Leftmost
    { src: '/ob4kapil.png', alt: 'Kapil', zIndex: 20, height: 'h-[30rem]', scale: 'scale-170', mt: 'mt-2' },   // Middle-left
    { src: '/obdheeraj.png', alt: 'Dheeraj', zIndex: 30, height: 'h-[30rem]', scale: 'scale-210', mt: '-mt-18' },// Center
    { src: '/ob2pawan.png', alt: 'Pawan', zIndex: 20, height: 'h-[30rem]', scale: 'scale-180', mt: 'mt-2' },   // Middle-right
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Heading */}
      <div className="flex flex-col items-start w-fit ml-8 md:ml-20 mt-10">
        <div className="text-orange-500 text-3xl font-semibold whitespace-nowrap">
          BCCI Office Bearers
        </div>
        <div className="bg-orange-500 rounded-3xl h-1 w-full mt-1" />
      </div>

      {/* Orange Slant Background */}
      <div className="absolute top-1/2 z-99 translate-y-52 left-[12.5%] w-full h-[100px] bg-orange-500 -skew-x-[70deg] origin-top-right" />

      {/* Image Row */}
      <div className="relative z-10 flex justify-center items-end px-4 py-20">
        {members.map(({ src, alt, zIndex, height, scale, mt }, index) => (
          <div
            key={index}
            className={`relative w-36 md:w-44 lg:w-52 ${height} ${scale} ${mt}`}
            style={{ zIndex }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain self-start justify-start"
              priority
            />
          </div>
        ))}
      </div>

      {/* Footer Quote */}
      <div className="text-center text-xl md:text-3xl font-semibold text-black px-4 pb-10 mt-10 mb-10">
        "Empowering Businesses. Building Futures."
      </div>
    </div>
  );
}

export default OfficeBearers;
