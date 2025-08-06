'use client';
import React from 'react';
import Image from 'next/image';

const OfficeBearers = () => {
  const members = [
    {
      src: '/ob3amit.png',
      alt: 'Amit',
      height: 'h-[26rem]',
      zIndex: 40,
      name: 'Amit Sharma',
      title: 'Vice President',
    },
    {
      src: '/ob2pawan.png',
      alt: 'Pawan',
      height: 'h-[26rem]',
      zIndex: 30,
      name: 'Shubham Kumar',
      title: 'Treasurer',
    },
    {
      src: '/obdheeraj.png',
      alt: 'Dheeraj',
      height: 'h-[26rem]',
      zIndex: 50,
      name: 'Dheeraj Khullar',
      title: 'President',
    },
    {
      src: '/ob4kapil.png',
      alt: 'Kapil',
      height: 'h-[26rem]',
      zIndex: 20,
      name: 'Shrey Malik',
      title: 'Secretary',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 py-12 overflow-x-auto">
      <h1 className='text-orange-400 font-semibold text-3xl mb-10'>
        BCCI Office Bearers
      </h1>

      <div className='h-fit flex flex-row justify-baseline items-end overflow-hidden'>
        {members.map((member, index) => (
          <div
            key={index}
            className={`relative group ${member.height} flex-shrink-0 -ml-20 first:ml-0 z-[${member.zIndex}] transition-transform duration-300`}
          >
            {/* Hover card - above image */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-400 text-white text-center px-4 py-2 rounded-md w-max shadow-md pointer-events-none z-50">
              <div className="font-bold text-lg">{member.name}</div>
              <div className="text-sm">{member.title}</div>

              {/* Triangle pointer */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-400 rotate-45"></div>
            </div>

            <Image
              src={member.src}
              alt={member.alt}
              width={300}
              height={600}
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeBearers;
