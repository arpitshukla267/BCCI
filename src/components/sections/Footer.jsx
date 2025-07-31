import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      {/* Desktop Background Images */}
      <div className="relative hidden lg:block">
        <Image
          src="/footer-top.png"
          alt="Footer Top"
          width={2010}
          height={600}
          className="w-full h-[600px] mb-10 object-cover"
        />
        <div className="mt-[-23rem]">
          <Image
            src="/footer2.png"
            alt="Footer"
            width={1920}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
          <div className='md:mx-5 lg:mx-0'>
      <div className='flex flex-row lg:justify-around md:justify-center items-center lg:gap-0 md:gap-10 w-full absolute top-[31rem] '>
        <div className='flex flex-col gap-12'>
         <div className="flex items-center gap-4">
           <Image
             src="/logo.png"
             alt="BCCI Logo"
             width={60}
             height={200}
             className="object-fit"
           />
           <h1 className="text-white text-6xl font-extrabold">BCCI</h1>
         </div>
          <h5 className='text-white text-3md'>Drive your business to<br/> success with us </h5>
        </div>
        <div className='flex flex-col gap-13'>
          <h1 className='text-2xl'>How to find us</h1>
          <h1>Jhansi</h1>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='text-2xl'>Chamber</h1>
          <ul className='flex flex-col'>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-white hover:underline">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:underline">
              Services
            </Link>
            <Link href="/" className="text-white hover:underline">
              Contact Us
            </Link>
          </ul>
        </div>
        <div className='flex flex-col gap-12'>
          <h1 className='text-2xl'>Social Links</h1>
          <div className='flex gap-4'>
            <Link  href='https://www.facebook.com/'>
                <FaFacebook size={40}/>
            </Link>
            <Link href='https://www.instagram.com/'>
                 <FaInstagram size={40}/>
            </Link> 
            <Link href='https://www.youtube.com/' >
                 <FaYoutube size={40}/>
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Fallback background color for mobile/tablet */}
      {/* <div className="lg:hidden w-full h-[200px] bg-[#1a1a1a] mb-10"></div> */}

      {/* Footer Content */}
      <div className="w-full px-5 lg:px-20 py-10 lg:absolute mb-[-0.3rem] lg:top-[30rem] flex flex-col lg:hidden items-center justify-between gap-12 bg-[#1a1a1a]">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center lg:items-start gap-6 text-white mt-7">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="BCCI Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <h1 className="text-4xl lg:text-6xl font-extrabold">BCCI</h1>
          </div>
          <h5 className="text-center lg:text-left text-md lg:text-lg">
            Drive your business to <br /> success with us
          </h5>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center lg:items-start text-white gap-3">
          <h1 className="text-xl font-semibold">How to find us</h1>
          <p>Jhansi</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center lg:items-start text-white gap-3">
          <h1 className="text-xl font-semibold">Chamber</h1>
          <ul className="flex flex-col gap-1 items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/" className="hover:underline">Contact Us</Link>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center lg:items-start text-white gap-3">
          <h1 className="text-xl font-semibold">Social Links</h1>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/"><FaFacebook size={30} /></Link>
            <Link href="https://www.instagram.com/"><FaInstagram size={30} /></Link>
            <Link href="https://www.youtube.com/"><FaYoutube size={30} /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full bg-black text-white text-sm text-center mb-[-0.3rem] py-4">
        © 2025 Bundelkhand Chamber of Commerce and Industry
      </div>
    </div>
  );
}

export default Footer;
