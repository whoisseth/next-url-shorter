import React from 'react'
import { FcMenu } from 'react-icons/fc'
import { VscChromeClose } from 'react-icons/vsc'
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'

import { useState } from 'react'

function Navbar() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    console.log(showMe)
    // repeat styling  
    const gap = 'gap-10'
    const linkHover = 'hover:opacity-50  md:hover:text-Violet'
    return (
        <>
            <nav className={'  py-10 md:py-0 px-8 md:px-20 flex items-center  justify-between md:justify-start max-w-7xl mx-auto text-lg  '}>
                {/* 1 */}
                <div className='logo md:mr-10'>
                    <img src="/images/logo.svg" alt="" />
                </div>
                {/* 2 */}
                <div className={`${showMe ? '' : 'hidden'}    md:flex absolute md:static     md: items-center  rounded-xl    top-24  bg-Violet  md:bg-transparent  font-semibold  md:md:text-gray-400 text-white md:justify-between md:w-full flex-col md:flex-row  inset-x-0 mx-8 z-50`}>
                    {/* 1 */}
                    {/* <div className='bg-yellow-400'> */}
                    <div className={`links   flex flex-col   items-center gap-6 my-8  md:flex-row  md:${gap}  `}>
                        <Link href='/' >
                            <a className={linkHover}>Feature </a>
                        </Link>
                        <Link href='/' >
                            <a className={linkHover}>Pricing</a>
                        </Link>
                        <Link href='/'>
                            <a className={linkHover}>Resources</a>
                        </Link>
                    </div>
                    <hr className='border w-[80%]  mx-8 border-gray-600  md:hidden' />

                    {/* 2 */}
                    <div className={`right   flex w-full md:w-auto   items-center flex-col md:flex-row gap-8 my-8  md:${gap}`}>

                        <Link href='/'>
                            <a className={linkHover}>Login</a>
                        </Link>
                        <Link href='/'>
                            <a className=' hover:opacity-50 cursor btn w-[80%]  text-center  bg-Cyan  px-6 py-2 text-white rounded-full ' >Sign Up</a>
                        </Link>

                    </div>
                    {/* </div> */}
                </div>
                <div className='menu md:hidden'  >
                    {showMe ?
                        <VscChromeClose className='fill-gray-400 text-4xl cursor-pointer' onClick={toggle} /> :
                        <AiOutlineMenu className='fill-gray-400 text-4xl cursor-pointer' onClick={toggle} />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar
