import Link from 'next/link'
import React from 'react'

import { BsInstagram } from 'react-icons/bs'
import { ImFacebook2, ImTwitter, ImPinterest } from 'react-icons/im'

function Footer() {
    return (
        <div className='bg-DakrViolet flex flex-col justify-center items-center text-white text-center py-12 md:flex-row md:justify-between md:px-24 md:items-start md:pb-6 '>
            <Link href='/'>
                <a className=' inline-block mb-8'>
                    <img src='images/logo-white-fill.svg' className='' alt="logo" />
                </a>
            </Link>
            <div className='md:flex md:justify-between md:gap-20  '>
                <LinkBox title={'Features'} links={[{ name: 'Link Shortening', link: '/' }, { name: 'Branded Links', link: '/' }, { name: 'Analytics', link: '/' }]} />

                <LinkBox title={'Resources'} links={[{ name: 'Blog', link: '/' }, { name: ' Developers', link: '/' }, { name: 'Support', link: '/' }]} />

                <LinkBox title={'Company'} links={[{ name: 'About', link: '/' }, { name: ' Our Team', link: '/' }, { name: 'Careers', link: '/' }, { name: ' Contact', link: '/' }]} />
            </div>
            <div className='flex gap-6'>
                <Link href='/' >
                    <a className='fill-Cyan h-24'>
                        <ImFacebook2 className='h-8 w-8 hover:fill-Cyan' />
                    </a>
                </Link>
                <Link href='/' >
                    <a >  <ImTwitter className='h-8 w-8 hover:fill-Cyan' /> </a>
                </Link>
                <Link href='/' >
                    <a > <ImPinterest className='h-8 w-8 hover:fill-Cyan' /> </a>
                </Link>
                <Link href='/' >
                    <a >
                        <BsInstagram className='h-8 w-8 hover:fill-Cyan' />
                    </a>
                </Link>
            </div>

        </div >
    )
}

export default Footer
interface linkBoxProps {
    title: string,
    links: any,
}

// function LinkBox({ title, links }) {
function LinkBox({ title, links }: linkBoxProps) {
    // console.log(links)
    return (
        <>
            <div className='text-white mb-12'>
                <div className='font-semibold  mb-4'>
                    {title}
                </div>
                <div className='flex gap-2  text-sm flex-col '>
                    {links.map((link: any) => {
                        return (<div key={link.name}>
                            <Link href={link.link} >
                                <a className='text-gray-400 hover:text-Cyan'>{link.name}</a>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}
