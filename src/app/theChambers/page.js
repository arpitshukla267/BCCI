"use client";
import Image from "next/image";
import Nav from "@/components/sections/Nav";
import React from "react";
import Footer from "@/components/sections/Footer";

function Page() {
  const members = [
    { name: "Dheeraj Khullar (धीरज खुल्लर)", img: "/dheeraj.jpeg" },
    { name: "Amit Singh (अमित सिंह )", img: "/amit.jpeg" },
    { name: "Pawan Saravgi (पवन सरावगी )", img: "/pavan.jpeg" },
    { name: "Shiva Lekhdari (शिवा लेखधारी )", img: "/shiva.jpeg" },
  ];

  const executive = [
    { name:(<>Dheeraj Khullar <br/>(धीरज खुल्लर)</>), img: "/dheeraj.jpeg" },
    { name:(<>Amit Singh<br/> (अमित सिंह )</>), img: "/amit.jpeg" },
    { name:(<>Pawan Saravgi<br/> (पवन सरावगी )</>), img: "/pavan.jpeg" },
    { name: (<>Shiva Lekhdari<br/> (शिवा लेखधारी )</>), img: "/shiva.jpeg" },
    { name:(<>Dheeraj Khullar <br/>(धीरज खुल्लर)</>), img: "/dheeraj.jpeg" },
    { name:(<>Amit Singh<br/> (अमित सिंह )</>), img: "/amit.jpeg" },
    { name:(<>Pawan Saravgi<br/> (पवन सरावगी )</>), img: "/pavan.jpeg" },
    { name: (<>Shiva Lekhdari<br/> (शिवा लेखधारी )</>), img: "/shiva.jpeg" },
    
  ]

  return (
    <div className="h-fit overflow-hidden">
      <div>  
      <Nav />
      </div>
      {/* Hero */}
      <div className="px-10">
        {/* Hero Section */}
        <div
          className="hidden w-full min-h-[400px] lg:flex flex-col rounded-2xl items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/theChamber.jpg')" }}
        >
        </div>
      </div>

      <div className='hidden xl:flex absolute left-0 w-full'>
       <div className='absolute left-[-5.5rem] top-[10rem] text-black rotate-270 text-3xl tracking-wide'>Connect with us</div>
       <div className='h-[20rem] w-1 rounded-4xl bg-black absolute left-10'></div>
      </div>
      
      <h1 className="hidden md:block text-7xl text-center mt-18 text-orange-500 font-extrabold animate-bounce">The Chamber</h1>

     <div className="relative"> 
        <div className="block absolute lg:left-[-5rem] md:top-[3rem] top-[15rem] left-[-7rem] opacity-50 z-0 pointer-events-none rotate-[250deg]">
            <Image
              src="/bg.png"
              alt="Background Watermark"
              width={800}   // set custom width
              height={500}  // set custom height
              className="object-contain"
              priority
            />
        </div>
        
        <h1 className=" inline-block md:text-4xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center mt-40 md:mb-10 mb-10 after:content-[''] after:block after:h-[5px] after:w-[30%] md:after:w-[15%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full">
          BCCI Office Bearers
        </h1>

      {/* ✅ Zigzag Members */}
      <div className="relative w-full lg:px-40 lg:mt-10 lg:space-y-[-80px] space-y-8">
        {members.map((member, index) => (
          <div
            key={index}
            className={`flex md:flex-row flex-col justify-center lg:items-center ${
              index % 2 === 0 ? "lg:justify-start items-start" : "lg:justify-end items-end"
            }`}
          >
            {index % 2 === 0 ? (
              <div className="flex items-center space-x-4 ml-5 hover:scale-125 duration-300">
                {/* Member Image */}
                <div className="relative lg:w-62 w-40 lg:h-62 h-40">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-fit border-4 border-white bg-amber-200 shadow-lg"
                  />
                </div>
                {/* Speech Bubble */}
                <div className="relative bg-orange-500 text-white lg:px-6 px-3 py-2 lg:py-4 rounded-lg lg:max-w-[200px] max-w-[150px]">
                  <p className="lg:text-md text-sm font-semibold">{member.name}</p>
                  <div className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-r-orange-500 border-t-transparent border-b-transparent"></div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4 flex-row-reverse hover:scale-125 duration-300">
                {/* Member Image */}
                <div className="relative lg:w-62 w-40 lg:h-62 h-40">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-fit border-4 bg-amber-200 border-white shadow-lg"
                  />
                </div>
                {/* Speech Bubble */}
                <div className="relative bg-orange-500 text-white lg:px-6 px-3 py-2 m-5 lg:py-4 rounded-lg lg:max-w-[200px] max-w-[150px]">
                  <p className="lg:text-md text-sm font-semibold">{member.name}</p>
                  <div className="absolute top-1/2 right-[-10px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-l-orange-500 border-t-transparent border-b-transparent"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
     </div> 
     <div className="relative overflow-hidden mb-10 lg:mb-[-8rem]">
        <div className=" overflow-hidden mt-20">
            <div className="hidden md:block absolute left-[-4rem] top-[8rem] opacity-50 z-0 pointer-events-none rotate-[270deg]">
              <Image
                src="/bg.png"
                alt="Background Watermark"
                width={600}   // set custom width
                height={300}  // set custom height
                className="object-contain"
                priority
              />
            </div> 
            <h1 className=" inline-block md:text-4xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center mt-10 md:mb-0  after:content-[''] after:block after:h-[5px] after:w-[30%] md:after:w-[15%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full">
                Executive Members
            </h1>

            <div className="md:overflow-hidden overflow-x-auto w-full md:mt-0 z-5 mt-0 no-scrollbar">
              <div className="flex animate-marquee space-x-6 z-5 md:p-20 py-10 mb-15 md:mb-0">
                {executive.map((member, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="relative w-32 h-32 rounded-full border bg-white border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-fit"
                      />
                    </div>
                    <h1 className="text-nowrap text-center text-black transition-transform duration-300 group-hover:scale-110 group-hover:mt-6">
                      {member.name}
                    </h1>
                  </div>
                ))}
                {/* Duplicate for seamless infinite loop */}
                {executive.map((member, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="relative w-32 h-32 rounded-full border bg-white border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-fit"
                      />
                    </div>
                    <h1 className="text-nowrap text-center text-black transition-transform duration-500 group-hover:scale-110 group-hover:mt-6 ">
                      {member.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className=" overflow-hidden md:mt-20">
            <div className=" block absolute right-[-4rem] top-[30rem] opacity-50 z-0 pointer-events-none rotate-[380deg]">
              <Image
                src="/bg.png"
                alt="Background Watermark"
                width={600}   // set custom width
                height={300}  // set custom height
                className="object-fit"
                priority
              />
            </div>
            <h1 className=" inline-block md:text-4xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center md:mt-0 md:mb-0 after:content-[''] after:block after:h-[5px] after:w-[30%] md:after:w-[15%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full">
                Committee Members
            </h1>       
            <div className="md:overflow-hidden overflow-x-auto w-full md:mt-0 mt-0 z-5 no-scrollbar">
              <div className="flex animate-marquee space-x-6 z-5 md:p-20 p-10 mb-15 md:mb-0">
                {executive.map((member, index) => (
                 <div key={index} className="flex-shrink-0 group">
                   <div className="relative w-32 h-32 rounded-full border bg-white border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                     <Image
                       src={member.img}
                       alt={member.name}
                       fill
                       className="object-fit"
                     />
                   </div>
                   <h1 className="text-nowrap text-center text-black transition-transform duration-300 group-hover:scale-110 group-hover:mt-6">
                     {member.name}
                   </h1>
                 </div>
                ))}
                {/* Duplicate for seamless infinite loop */}
                {executive.map((member, index) => (
                 <div key={index} className="flex-shrink-0 group">
                   <div className="relative w-32 h-32 rounded-full border bg-white border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                     <Image
                       src={member.img}
                       alt={member.name}
                       fill
                       className="object-fit"
                     />
                   </div>
                   <h1 className="text-nowrap text-center text-black transition-transform duration-300 group-hover:scale-110 group-hover:mt-6">
                     {member.name}
                   </h1>
                 </div>
                ))}
              </div>
            </div>
        </div>
        <div className="relative overflow-hidden md:mt-20">
            {/* <div className="hidden md:block absolute right-[-4rem] top-[3rem] opacity-50 z-0 pointer-events-none rotate-[380deg]">
              <Image
                src="/bg.png"
                alt="Background Watermark"
                width={600}   // set custom width
                height={300}  // set custom height
                className="object-contain"
                priority
              />
            </div> */}
            <h1 className=" inline-block md:text-4xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center md:mb-0  after:content-[''] after:block after:h-[5px] after:w-[30%] md:after:w-[15%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full">
                BCCI Office Bearers
            </h1>
            <div className="md:overflow-hidden overflow-x-auto w-full mb-10 lg:mb-0 md:mt-0 mt-0 z-5 no-scrollbar">
              <div className="flex animate-marquee space-x-6 z-5 md:p-20 p-10">
                {executive.map((member, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="relative w-32 h-32 rounded-full border border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-fit"
                      />
                    </div>
                    <h1 className="text-nowrap text-center text-black transition-transform duration-300 group-hover:scale-110 group-hover:mt-6">
                      {member.name}
                    </h1>
                  </div>
                ))}
                {/* Duplicate for seamless infinite loop */}
                {executive.map((member, index) => (
                  <div key={index} className="flex-shrink-0 group">
                    <div className="relative w-32 h-32 rounded-full border border-gray-300 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h1 className="text-nowrap text-center text-black transition-transform duration-300 group-hover:scale-110 group-hover:mt-6">
                      {member.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>  
      <Footer />
    </div>
  );
}

export default Page;
