'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function ContactPage() {
  const scrollRef = useRef(null);

  const contact = [
    {
      img:"/contact1.jpg",
    },
    {
      img:"/contact2.jpg",
    },
    {
      img:"/contact3.jpg",
    },
    {
      img:"/contact4.jpg",
    },
    {
      img:"/contact6.jpg",
    },
    {
      img:"/contact7.jpg",
    },
    {
      img:"/contact8.jpg",
    },
    {
      img:"/contact9.jpg",
    },
    {
      img:"/contact10.jpg",
    },
    {
      img:"/contact11.jpg",
    },
    {
      img:"/contact12.jpg",
    },
    {
      img:"/contact13.jpg",
    },
    {
      img:"/contact14.jpg",
    },
    {
      img:"/contact15.jpg",
    },
    {
      img:"/contact16.jpg",
    },
    {
      img:"/contact17.jpg",
    },
    {
      img:"/contact19.jpg",
    },
    {
      img:"/contact20.jpg",
    },
  ]

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
         {contact.map((item, i) => (
           <div
             key={i}
             className="w-80 md:h-[35rem] h-[25rem] bg-orange-500 rounded-xl shadow-md flex-shrink-0"
             style={{
               backgroundImage: `url(${item.img})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
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
<       h1 className=" inline-block text-4xl font-extrabold text-orange-500  mb-10 after:content-[''] after:block after:h-[5px] after:w-[60%] after:bg-orange-500 after:mx-auto after:mt-1 after:rounded-full">
          Contact Us
        </h1>        
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
