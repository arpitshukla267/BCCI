import Footer from '@/components/sections/Footer'
import Nav from '@/components/sections/Nav'
import React from 'react'

function page() {
  return (
    <div>
        <div>
            <Nav />
        </div>
        <div className="text-center md:mt-10 mt-80">
            <h1 className=" inline-block text-4xl font-extrabold text-orange-500  mb-10 after:content-[''] after:block after:h-[5px] after:w-[60%] after:bg-orange-500 after:mx-auto after:mt-1 after:rounded-full">
              International Publication
            </h1>
        </div>
        <div className='flex justify-center items-center h-[40vh] text-2xl text-gray-500'>International Publication In Process......</div>
        <Footer />

    </div>
  )
}

export default page