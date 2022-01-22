import React from 'react'

function ShortLinkBox() {
    return (
        <div className='rounded  bg-white  flex flex-col gap-2 py-4 '>
            <div className='mx-4'>https://www.frontendmentor.io</div>
            <hr className='p-0 w-full' />
            <div className='text-Cyan mx-4'> https://rel.ink/k4lkyk</div>
            <button className='bg-Cyan text-center py-2 rounded text-white font-semibold mx-4 mt-none hover:opacity-50 '>
                Copy
            </button>
        </div>
    )
}

export default ShortLinkBox
