'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ContactPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left auto-scrolling section */}
      <div className="w-full md:w-1/2 p-4 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-row justify-center items-center gap-6 overflow-x-scroll whitespace-nowrap xl:mt-35 lg:mt-25 md:mt15 no-scrollbar "
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-80 h-[35rem] bg-orange-500 rounded-xl shadow-md flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Right contact form */}
      <div className="w-full relative md:w-1/2 p-8 bg-white shadow-lg flex flex-col overflow-hidden justify-center items-center">
          {/* <div className="absolute right-[-40rem] top-[-15rem] inset-0 opacity-20 z-0 pointer-events-none">
              <Image
                src="/bg.png"
                alt="Background Watermark"
                fill
                className="object-contain"
                priority
              />
          </div> */}
        <h2 className="text-2xl font-bold text-orange-400 underline mb-26">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-3 border text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="E-Mail"
              required
              className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone"
              required
              className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <textarea
            placeholder="Type Message"
            required
            className="w-full p-3 text-black h-62 bg-orange-200 rounded-tl-xl border-none rounded-br-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
