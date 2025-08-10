'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react' // arrow icon
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'
import { motion } from 'framer-motion';

const tabs = ['Nominated Members', 'Service Members', 'Industry Members', 'Business Members'];

const data = Array.from({ length: 11 }).map((_, i) => ({
  id: i + 1,
  name: 'Sarah Eastern',
  executive: 'Text',
  phone: 'Sarah Eastern',
}));

export default function Page() {
  const [activeTab, setActiveTab] = useState('Nominated Members');
  const [isOpen, setIsOpen] = useState(false);

  const fadeInProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Nav />

      {/* Hero Section */}
      <div className="px-10">
        {/* Hero Section */}
        <div
          className="hidden w-full min-h-[400px] lg:flex flex-col items-center rounded-2xl justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/memberZone.png')" }}
        ></div>
        
        {/* Heading */}
         <motion.h1
           {...fadeInProps}
           className="inline-block md:text-7xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center mt-40 md:mt-10 md:mb-10 mb-10 after:content-[''] after:block md:after:h-[5px] after:h-[3px] after:w-[40%] md:after:w-[15%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full"
         >
           Members Zone
         </motion.h1>
      </div>

      {/* Mobile heading with arrow */}
      {/* <div className="text-center md:mt-10 mt-0">
        <h1 className="inline-flex md:hidden items-center gap-2 text-xl text-nowrap md:text-4xl font-extrabold text-orange-500 mb-4 relative after:content-[''] after:block md:after:h-[5px] after:h-[4px] after:w-[60%] after:bg-orange-500 after:mx-auto after:mt-1 after:rounded-full">
          Member&rsquo;s Zone
          <ChevronDown size={26} className="text-orange-500" />
        </h1>
      </div> */}

      {/* Content Section */}
      <div className="flex-1 container mx-auto px-4 sm:px-10 font-sans">

        {/* Mobile dropdown */}
        <div className="relative block md:hidden w-full max-w-full mb-0">
          {/* Dropdown header */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-3 rounded-lg bg-orange-500 text-white font-medium shadow-md focus:outline-none"
          >
            <span>{activeTab}</span>
            <ChevronDown
              size={22}
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        
          {/* Animated dropdown menu */}
          <div
            className={`absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            <div className="overflow-y-auto max-h-[300px]">
              {tabs.map((tab, index) => (
                <div key={tab}>
                  <button
                    onClick={() => {
                      setActiveTab(tab);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      activeTab === tab
                        ? 'bg-orange-500 text-white font-semibold'
                        : 'text-black hover:bg-orange-100'
                    }`}
                  >
                    {tab}
                  </button>
                  {index !== tabs.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-3 border-b border-gray-300 pb-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 text-md font-semibold transition-all duration-300 rounded-md 
                ${activeTab === tab 
                  ? 'text-orange-500 font-semibold' 
                  : 'text-gray-600 hover:text-orange-400'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full animate-[slideIn_0.3s_ease-in-out]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        {activeTab === 'Nominated Members' && (
          <div className="mt-8 overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white animate-fadeIn">
            <table className="min-w-full text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
                <tr>
                  <th className="p-4">S. No</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Executive Head</th>
                  <th className="p-4">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, name, executive, phone }, idx) => (
                  <tr
                    key={id}
                    className={`transition-colors duration-200 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-orange-50`}
                  >
                    <td className="p-4">{id}</td>
                    <td className="p-4 text-blue-600 cursor-pointer hover:underline">
                      {name}
                    </td>
                    <td className="p-4">{executive}</td>
                    <td className="p-4 text-blue-600 cursor-pointer hover:underline">
                      {phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className='mt-20 md:mt-10'>
        <Footer />
      </div>
      {/* Animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
