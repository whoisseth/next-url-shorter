import React from 'react'

function BoostLinks() {
    return (
        <div className='relative py-[6rem] bg-Violet text-center text-white flex flex-col justify-center items-center overflow-hidden md:py-[4rem]'>
            <div className='absolute z-30 md:hidden'><img src="/images/bg-boost-mobile.svg" alt="" /></div>
            <div className='absolute z-30 hidden md:block h-full'><img src="/images/bg-boost-desktop.svg" alt="" /></div>
            <div className='font-semibold text-2xl mb-4 z-50'>Boost your links today</div>
            <button className='bg-Cyan py-2 px-6 text-lg  z-50 font-semibold rounded-full hover:bg-cyan-300 hover:shadow'>
                Get Started
            </button>
        </div>
    )
}

export default BoostLinks
