import React from 'react'

function OfficeBariers() {
  return (
    <div className='h-screen'>
       <div className="flex flex-col items-start w-fit ml-20">
         <div className="text-orange-500 text-3xl whitespace-nowrap">BCCI Office Bearers</div>
         <div className="bg-orange-500 rounded-3xl h-1 w-full mt-1" />
       </div>
       <div className="relative w-full bg-white overflow-hidden">
       {/* Orange Slant Background */}
        <div className="absolute bottom-0 left-50 w-full h-24 bg-orange-500 -skew-x-[70deg] origin-top-right z-0" />
            {/* Image Row */}
            <div className="relative z-10 flex justify-center gap-[-4rem] md:gap-[-6rem] lg:gap-[-8rem] px-4 py-10">
              <div
                className="w-36 md:w-44 lg:w-52 h-60 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/ob1.jpeg')" }}
              ></div>
              <div
                className="w-36 md:w-44 lg:w-52 h-60 bg-center bg-no-repeat bg-contain -mt-6 md:-mt-10"
                style={{ backgroundImage: "url('/ob2.jpeg')" }}
              ></div>
              <div
                className="w-36 md:w-44 lg:w-52 h-60 bg-center bg-no-repeat bg-contain"
                style={{ backgroundImage: "url('/ob3.jpeg')" }}
              ></div>
            </div>
        </div>
        
        <div className='text-4xl text-black '>

        </div>
       
    </div>
  )
}

export default OfficeBariers