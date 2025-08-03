import React from 'react'
import Nav from '@/components/sections/Nav'
import Footer from '@/components/sections/Footer'

function page() {
  return (
    <div>
        <div>
            <Nav />
        </div>
        
      <div className="px-10">
        {/* Hero Section */}
        <div
          className="hidden w-full min-h-[400px] lg:flex flex-col items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/memberZone.png')" }}
        ></div>
        <div className='hidden xl:flex absolute left-0 w-full'>
         <div className='absolute left-[-5.5rem] top-[10rem] text-black rotate-270 text-3xl tracking-wide'>Connect with us</div>
         <div className='h-[20rem] w-1 rounded-4xl bg-black absolute left-10'></div>
        </div>

        <div className="text-center md:mt-10 mt-40">
            <h1 className=" inline-block md:hidden text-4xl font-extrabold text-orange-500  mb-10 after:content-[''] after:block after:h-[5px] after:w-[60%] after:bg-orange-500 after:mx-auto after:mt-1 after:rounded-full">
              Member&rsquo;s Zone
            </h1>
        </div>

        <div className='flex justify-center items-center h-[40vh] text-2xl text-gray-500'>Member&rsquo;s List In Process......</div>
      </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default page