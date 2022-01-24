import React from 'react'

function ShortLinkBox() {
    return (
        <div className='rounded w-full  bg-white  flex flex-col gap-2 py-4 md:flex-row justify-between md:items-center md:px-6'>
            <div className='mx-4'>https://www.frontendmentor.io</div>
            <hr className='p-0 w-full md:hidden' />
            <div className='flex flex-col gap-2 md:flex-row md:items-center '>
            <div className='text-Cyan mx-4'> https://rel.ink/k4lkyk</div>
                <button className='bg-Cyan text-center py-2 rounded text-white font-semibold mx-4 mt-none hover:opacity-50 md:px-6 Copid:bg-Violet '>
                    {/* {'Copied'} */}
                    Copy
            </button>
            </div>
        </div>
    )
}

export default ShortLinkBox
