'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OfficeBearers = () => {
const members = [
  {
    src: '/ob3amit.png',
    alt: 'Amit',
    height: '22rem',
    width: '22rem',
    zIndex: 10,
    left: '3rem',
    name: 'Amit Singh',
    title: 'Vice President',
    brightness: '50',
    hoverTop: '0rem',
    hoverLeft: '-5rem',
    pointerBottom: '-top-3.5',
    pointerLeft: 'left-1/2',
    pointerTranslate: '-translate-x-1/2',
    pointerRotate: 'rotate-45'
  },
  {
    src: '/ob2pawan.png',
    alt: 'Pawan',
    height: '22rem',
    width: '25rem',
    zIndex: 30,
    name: 'Pawan Saraogi',
    left: '-4.5rem',
    title: 'Treasurer',
    brightness: '50',
    hoverTop: '-36rem',
    hoverLeft: '-26rem',
    pointerBottom: '-bottom-1.5',
    pointerLeft: '-right-1',
    pointerTranslate: '-translate-x-0',
    pointerRotate: 'rotate-85'
  },
  {
    src: '/obdheeraj.png',
    alt: 'Dheeraj',
    height: '28rem',
    width: '23rem',
    zIndex: 99,
    name: 'Dheeraj Khullar',
    left: '-4.5rem',
    title: 'President',
    brightness: '50',
    hoverTop: '-40rem',
    hoverLeft: '9rem',
    pointerBottom: '-bottom-1.5',
    pointerLeft: '-left-1',
    pointerTranslate: 'translate-x-0',
    pointerRotate: 'rotate-[94deg]'
  },
  {
    src: '/ob4kapil.png',
    alt: 'Kapil',
    height: '22rem',
    width: '25rem',
    zIndex: 20,
    name: 'Kapil Khanna',
    left: '-7.5rem',
    title: 'Secretary',
    brightness: '50',
    hoverTop: '0rem',
    hoverLeft: '-10rem',
    pointerBottom: '-top-3.5',
    pointerLeft: 'left-1/2',
    pointerTranslate: '-translate-x-1/2',
    pointerRotate: 'rotate-45'
  },
];

const fadeInProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
  };

  return (
    <div className="flex flex-col min-h-screen justify-between items-center px-4 py-2 overflow-hidden">
      <motion.h1
           {...fadeInProps}
           className="inline-block md:text-4xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center md:mb-10 after:content-[''] after:block after:h-[5px] after:w-[30%] md:after:w-[12%] after:bg-orange-500 after:mx-auto after:rounded-full"
         >
           Office Bearers
         </motion.h1>

      <div className='relative flex flex-row justify-center items-end w-full max-w-7xl min-h-[30rem] mt-20 mb-60'>
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative group flex-shrink-0 transition-transform duration-300 w-full max-w-[18rem]`}
          >
            {/* Hover card - above image */}
            <div
              style={{
                top: member.hoverTop,
                left: member.hoverLeft,
              }}
              className="absolute translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-400 text-white text-center px-4 py-2 rounded-md w-max shadow-md pointer-events-none z-[99]"
            >
              {/* Pointer */}
              <div
                className={`absolute w-10 h-11 z-10 bg-orange-400 ${member.pointerBottom} ${member.pointerLeft} ${member.pointerTranslate} ${member.pointerRotate}`}
              ></div>
            
              {/* Name and Title */}
              <div className="relative z-50 font-bold text-lg">{member.name}</div>
              <div className="relative z-40 text-sm">{member.title}</div>
            
              {/* Box with description */}
              <div className="bg-orange-500 text-white rounded-xl px-6 py-4 w-fit max-w-md skew-x-[3deg] mt-2 relative z-30">
                <div className="-skew-x-[9deg]">
                  <h3 className="text-lg font-bold">Strategic Thinkers</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed">
                    With decades of combined industry experience, our team is focused on long-term growth, smart execution, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>


            <div
            style={{zIndex: member.zIndex, left: member.left, width: member.width}}
             className={`absolute bottom-0  ${member.color} min-w-[${member.width}]`}>
            <Image
              src={member.src}
              alt={member.alt}
              width={300}
              height={600}
              className="object-contain  hover:brightness(100%)"
              style={{
                width: member.width,
                filter: `brightness(${member.brightness}%)`,
                // backdropFilter: grayscal
              }}
            />
            </div>
          </div>
        ))}
        <div className="absolute bottom-0 w-[100vw] left-10 h-24 bg-orange-500 -skew-x-[70deg] origin-top-right z-0" ></div>
      </div>
    </div>
  );
};

export default OfficeBearers;