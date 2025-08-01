'use client';

import { useState, useEffect } from 'react';
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const screenWidth = hasMounted ? window.innerWidth : 1024;

  const activeService = services.find((s) => s.id === activeId);

  const handleInteraction = (id) => {
    // Toggle for mobile/tablet; hover handles desktop
    if (screenWidth < 768) {
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

      <h1 className=" inline-block text-4xl z-9 relative mt-15 mb-25 w-full font-extrabold text-orange-500 text-center after:content-[''] after:block after:h-[5px] after:w-[26%] md:after:w-[6%] after:bg-orange-500 after:mx-auto after:mt-1 after:rounded-full">
        Services
      </h1>

      <div className="relative z-10 gap-4 flex flex-col flex-wrap items-center md:flex-row lg:gap-0 lg:px-20 justify-center">
        {services.map((service) => {
          const isActive = activeId === service.id;

          return (
            <motion.div
              key={service.id}
              onClick={() => handleInteraction(service.id)}
              onMouseEnter={() => {
                if (screenWidth >= 768) setActiveId(service.id);
              }}
              onMouseLeave={() => {
                if (screenWidth >= 768) setActiveId(null);
              }}
              className="group relative rounded-2xl overflow-hidden md:h-[560px] h-[360px] shadow-md bg-white transition-all duration-300 cursor-pointer mx-auto"
              style={{
                width: isActive
                  ? screenWidth >= 768
                    ? '400px' // PC width when active
                    : '350px' // Mobile width when active
                  : screenWidth >= 768
                  ? '280px'
                  : '220px', // Default width
                zIndex: isActive ? 10 : 1,
              }}
              animate={{ scale: isActive ? 1 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <Image
                src={service.image}
                alt={`Service ${service.id}`}
                fill
                className="object-cover transition-transform duration-300 "
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
