import Link from 'next/link'
import { title } from 'process'
import React from 'react'

function Footer() {
    return (
        <div className='bg-DakrViolet flex flex-col justify-center items-center text-white text-center py-12 '>
            <Link href='/'>
                <div className=' inline-block mb-8'>
                    <img src='images/logo-white-fill.svg' className='' alt="logo" />
                </div>
            </Link>
            <div>
                <LinkBox heading={'Features'} links={[{ name: 'Link Shortening', link: '/' }, { name: 'Branded Links', link: '/' }, { name: 'Analytics', link: '/' }]} />

                <LinkBox heading={'Resources'} links={[{ name: 'Blog', link: '/' }, { name: ' Developers', link: '/' }, { name: 'Support', link: '/' }]} />

                <LinkBox heading={'Company'} links={[{ name: 'About', link: '/' }, { name: ' Our Team', link: '/' }, { name: 'Careers', link: '/' }, { name: ' Contact', link: '/' }]} />
            </div>
            <div className='flex gap-6'>
                <Link href='/' >
                    <a > <img src="images/icon-facebook.svg" alt="facebook" /> </a>
                </Link>
                <Link href='/' >
                    <a > <img src="images/icon-twitter.svg" alt="twitter" /> </a>
                </Link>
                <Link href='/' >
                    <a > <img src="images/icon-pinterest.svg" alt="piniterest" /> </a>
                </Link>
                <Link href='/' >
                    <a > <img src="images/icon-instagram.svg" alt="instagram" /> </a>
                </Link>
            </div>

        </div >
    )
}

export default Footer

function LinkBox({ heading, links }) {
    console.log(links)
    return (
        <>
            <div className='text-white mb-12'>
                <div className='font-semibold  mb-4'>
                    {heading}
                </div>
                <div className='flex gap-2  text-sm flex-col '>
                    {links.map(link => {
                        return (<div key={link.name}>
                            <Link href={link.link} >
                                <a className='text-gray-400'>{link.name}</a>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
        </>
    )
}
