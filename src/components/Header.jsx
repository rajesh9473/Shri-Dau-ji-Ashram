import React from 'react'
import GifLogo from '../Gifs/logo1.gif'
import { isMobile } from 'react-device-detect'

const Header = () => {
    return (
        <div>
            {/* <div className='flex items-center'>
                <img src={GifLogo} className="h-20 w-20" alt='...' />
                Shri Dau ji Ashram
            </div>
            <div class="grid grid-rows-4 grid-flow-row gap-4">
                <a href='/' className='text-red-500 hover:text-blue row-span-3'>Home </a>
                <a href='/About-Us' className='hover:text-blue-40 row-span-3'> About us</a>
                <a href='/Event' className='hover:text-blue-40 row-span-3'> Event</a>
                <a href='/Services' className='hover:text-blue-40 row-span-3'> Services</a>
                <button className='bg-[#f2b263] text-white text-sm px-2 py-2 rounded-3xl hover:bg-black'>  Shnkalp </button>
            </div> */}


            <div className="grid grid-cols-2 text-black-500 bg-[#fdefea]">
                <div className='flex items-center'>
                    <img src={GifLogo} className="h-20 w-20" alt='...' />
                    Shri Dau ji Ashram
                </div>
                {
                    isMobile ? 'breadIcon' :
                        <div class="grid grid-cols-5 grid-flow-row text-center items-center">
                            <a href='/' className='text-red-500 hover:text-blue row-span-3'>Home </a>
                            <a href='/About-Us' className='hover:text-blue-40 row-span-3'> About us</a>
                            <a href='/Event' className='hover:text-blue-40 row-span-3'> Event</a>
                            <a href='/Services' className='hover:text-blue-40 row-span-3'> Services</a>
                            <a href='/Shankalp' className='hover:text-blue-40 row-span-3'>
                                <button className='bg-[#f2b263] text-white text-sm px-5 py-2 rounded-3xl hover:bg-black'>  Shnkalp </button>
                            </a>

                        </div>
                }
            </div>


        </div>
    )
}


export default Header