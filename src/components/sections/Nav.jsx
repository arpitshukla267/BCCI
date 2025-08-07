'use client';
import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";  // Add this line
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";  // Assuming you want to use Link for navigation
 // Assuming Nav is in the same directory

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
    }

    return () => {
      // Cleanup on unmount
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="w-full md:sticky md:top-0 fixed top-0 z-50 bg-white pb-5">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 md:px-10 pt-4 relative">
        {/* Left Logo */}
        <div className="w-[80px] sm:w-[120px] md:w-[130px]">
          <a href="/"><img src="/logo.png" alt="logo" className="w-full h-full object-contain" /></a>
        </div>

        {/* Title (next to logo, on larger screens only) */}
        <div className="sm:block ml-2 flex-1 text-nowrap">
          <h1 className="uppercase font-bold text-black text-sm md:text-xl lg:text-3xl md:leading-2 lg:leading-5">
            bundelkhand chamber <br />
            <span className="text-blue-400 text-sm md:mt-[-5] sm:text-base md:text-lg">
              of commerce & industry
            </span>
          </h1>
        </div>

        {/* Center Image (Emblem or other visual) */}
        <div className="hidden flex-1 md:flex justify-center">
          <img
            src="/nav1.png"
            alt="nav1"
            className="w-[60%] h-full absolute xl:bottom-[-1.8rem] xl:left-[20rem] md:bottom-[-3.2rem] md:left-[14rem] md:w-[50%] lg:w-[60%] lg:bottom-[-3.2rem] lg:left-[13rem] z-0 object-contain"
          />
        </div>
  

        {/* Right Statue */}
        <div className="hidden md:block w-[80px] sm:w-[100px] md:w-[130px] lg:w-[160px]">
          <img src="/statue.png" alt="statue" className="w-full h-full object-contain" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-30 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiOutlineX className="text-3xl text-[#F15A24]" />
          ) : (
            <RxHamburgerMenu className="text-3xl text-[#F15A24]" />
          )}
        </div>
      </div>

      {/* Orange Curve Strip */}
      <div className="px-4 sm:px-10">
        <div className="w-full h-[14px] bg-[#F15A24] rounded-tl-3xl z-1 rounded-br-3xl md:mb-5 mb-[-8px]"></div>
      </div>
     <div className="px-10">
      {/* Desktop Nav */}
      <div className="hidden md:flex w-full bg-[#F15A24] py-3 rounded-tl-3xl rounded-br-3xl px-4 sm:px-10">
        <ul className="flex lg:justify-around items-center w-full uppercase text-white lg:font-semibold md:justify-between text-sm sm:text-base">
          <Link href="/theChambers">The Chambers</Link>
          <Link href="/servicesPage">Services</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/memberZone">Member&rsquo;s Zone</Link>
          {/* <Link href="/internationalPublication">International Publication</Link> */}
          <Link href="/media">Media</Link>        
        </ul>
      </div>
     </div>
      {/* Mobile Nav */}
      <AnimatePresence>
       <div className="px-4"> 
        {menuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden w-full bg-[#F15A24] rounded-tl-3xl rounded-br-3xl px-4 mt-5 z-40 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 text-white uppercase font-semibold text-sm py-4">
              <Link href="/theChambers" className="border-b border-white border-b-[1px] pb-1">The Chamber</Link>
              <Link href="/servicesPage" className="border-b border-white border-b-[1px] pb-2 mt-[-5px]" >Services</Link>
              <Link href="/sectors" className="border-b border-white border-b-[1px] pb-2 mt-[-5px]">Sectors</Link>
              <Link href="/memberZone" className="border-b border-white border-b-[1px] pb-2 mt-[-5px]">Member&rsquo;s Zone</Link>
              {/* <Link href="/internationalPublication" className="border-b border-white border-b-[1px] pb-2 mt-[-5px]">International Publication</Link> */}
              <Link href="/media" className="mt-[-5px]">Media</Link>        
            </ul>
          </motion.div>
        )}
       </div> 
      </AnimatePresence>
    </div>
  );
}

export default Nav;
