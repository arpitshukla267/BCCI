'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: (
      <>
        Visa <br /> Recommendation
      </>
    ),
    image: '/services1.jpeg',
  },
  {
    id: 2,
    title: (
      <>
        Investment <br /> Matchmaking
      </>
    ),
    image: '/services2.jpeg',
  },
  {
    id: 3,
    title: (
      <>
        Business <br /> Recommendation
      </>
    ),
    image: '/services3.jpeg',
  },
  {
    id: 4,
    title: (
      <>
        Economic <br /> Growth
      </>
    ),
    image: '/services4.jpeg',
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(null);
  const activeService = services.find((s) => s.id === activeId);

  const handleInteraction = (id) => {
    // Toggle for mobile/tablet; hover handles desktop
    if (window.innerWidth < 768) {
      setActiveId((prevId) => (prevId === id ? null : id));
    }
  };

  return (
    <section className="relative min-h-screen mt-20 mb-20 px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0"
            >
              <Image
                src={activeService.image}
                alt="background"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      </div>

      <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-orange-500 underline mb-20 text-center md:text-center mt-20">
        Services
      </h2>

      <div className="relative z-10 gap-4 flex flex-col flex-wrap items-center md:flex-row md:gap-10 justify-center">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
           <motion.div
             key={service.id}
             onClick={() => handleInteraction(service.id)}
             onMouseEnter={() => {
               if (window.innerWidth >= 768) setActiveId(service.id);
             }}
             onMouseLeave={() => {
               if (window.innerWidth >= 768) setActiveId(null);
             }}
             className="group relative rounded-2xl overflow-hidden md:h-[560px] h-[360px] shadow-md bg-white transition-all duration-300 cursor-pointer"
             style={{
               width: isActive
                 ? window.innerWidth >= 768
                   ? '400px' // PC width when active
                   : '350px' // Mobile width when active
                 : window.innerWidth >= 768
                 ? '280px'
                 :'240px',  // Default width
               zIndex: isActive ? 10 : 1,
             }}
             animate={{ scale: isActive ? 1 : 1 }}
             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
           >
              <Image
                src={service.image}
                alt={`Service ${service.id}`}
                fill
                className="object-cover transition-transform duration-300"
              />

              {isActive && (
                <motion.div
                  layoutId="orange-button"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-orange-400 to-orange-700 text-white font-semibold text-center rounded-xl shadow-xl pointer-events-none px-0 py-2 overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                >
                  {service.title}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
