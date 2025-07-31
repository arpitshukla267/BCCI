'use client';
import React from 'react';
import Nav from '@/components/sections/Nav';
import Image from 'next/image';
import Footer from '@/components/sections/Footer';

function Page() {
  const cards = [
    {
      name: 'Investment Matchmaking',
      img: '/services1.jpeg',
      description:
        'The Bundelkhand Chamber provides customized investment facilitation services, including product information, joint venture identification, and procedural support. It aims to be a one-stop center for investment-related assistance. The Chamber organizes B2B platforms like Buyer-Seller Meets and investor meetings. With global partnerships, it acts as a mediator between Indian and international corporates. The department is headed by Dhiraj Khullar.',
    },
    {
      name: 'Business-Information-Services',
      img: '/services2.jpeg',
      description:
        'The Bundelkhand Chamber has set up a Trade Facilitation Desk to support trade and business ties between the Uttar Pradesh Government and both members and non-members. Serving as a single-window platform, it offers services like company/address search, business matchmaking, and access to buyers, sellers, and partners across India. It also provides research reports, trade regulation info, office space leasing with IT facilities, and organizes B2B meetings. Services are reasonably priced, with details available on request.',
    },
    {
      name: 'Visa-Recommendation',
      img: '/services3.jpeg',
      description:
        'The Bundelkhand Chamber issues visa recommendation letters to representatives traveling abroad for business purposes, as some embassies require certification from recognized chambers. This service is available to both member and non-member firms. To apply, firms must submit a request letter (on official letterhead) addressed to the Chamber President, a photocopy of the applicant’s passport, the invitation letter from the visiting country, and the applicant’s signature on the request. All documents must be certified with the applicant’s signature and stamp.',
    },
  ];

  return (
    <div className='h-auto'>
      <div> 
      <Nav />
      </div>
      <div className="px-10">
        {/* Hero Section */}
        <div
          className="hidden w-full min-h-[400px] lg:flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/servicePage.png')" }}
        ></div>

        <div
          className="block w-full mt-30 lg:hidden text-center text-orange-500 text-3xl sm:text-xl font-bold p-10 bg-white relative "
        >
          Services
        </div>
        </div>
        <div className='hidden xl:flex absolute left-0 w-full'>
         <div className='absolute left-[-5.5rem] top-[10rem] text-black rotate-270 text-3xl tracking-wide'>Connect with us</div>
         <div className='h-[20rem] w-1 rounded-4xl bg-black absolute left-10'></div>
        </div>

      {/* Cards Section */}
     <div className='md:px-10 xl:px-0 lg:mb-0 md:mb-20 mb-20'>
      <div className="w-full max-w-6xl mx-auto py-2 px-10 md:px-0 md:py-12 grid md:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div key={index} className="flip-card hover:scale-115">
            <div className="flip-card-inner flex">
              {/* Front Side */}
              <div className="flip-card-front lg:p-5 md:p-2">
                <Image
                  src={card.img}
                  alt={card.name}
                  width={400}
                  height={300}
                  className="object-cover w-full lg:h-[320px] md:h-[270px] h-[300px] md:rounded-xl lg:rounded-none"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold capitalize text-black">
                    {card.name.toLowerCase()}
                  </h2>
                </div>
              </div>

              {/* Back Side */}
              <div className="flip-card-back p-4">
                <p className="lg:text-sm md:text-xs text-white">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     </div> 
     <Footer /> 
    </div>
  );
}

export default Page;
