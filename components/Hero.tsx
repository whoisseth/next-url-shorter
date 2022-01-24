import React from 'react'
function Hero() {
    return (
        <div className=' static md:ml-20   flex flex-col md:flex-row mb-[10rem] ' >
            {/* Image div */}
            <div className=' h-[21.5rem]     md:h-[28rem] order-1 relative   md:order-2  overflow-hidden   md:w-full  md:items-center md:flex  ' >

                <div className=' absolute  w-[28rem] md:w-[40rem] md:right-[-5rem]   right-[-7.6rem]'>
                    <img className='h-full w-full' src="/images/illustration-working.svg" alt="" />
                </div>
            </div>
            {/* Description div */}
            <div className='mx-10 md:mx-0 order-2 md:order-1 flex flex-col items-center md:items-start  text-center md:text-left gap-4 md:h-[28rem] md:w-[60rem]  md:justify-center '>
                <div className='text-4xl font-semibold text-DakrViolet md:text-6xl md:font-bold'>More than just shorter links</div>
                <div className='text-gray-400   md:text-xl'> Build your brand’s recognition and get detailed insights on how your links are performing.</div>
                <button className='hover:opacity-50 cursor md:mt-4  text-md text-center  bg-Cyan  px-10 py-3 text-white rounded-full font-semibold'>Get Started</button>
            </div>

        </div>
    )
}

export default Hero
