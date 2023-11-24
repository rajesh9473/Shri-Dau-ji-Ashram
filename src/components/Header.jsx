import React, { useState } from 'react'
import GifLogo from '../Gifs/logo1.gif'
import { isMobile } from 'react-device-detect'
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="grid grid-cols-2 w-full text-black-500 border-b border-black bg-[#fdefea]">
            <div className='flex items-center'>
                <img src={GifLogo} className="h-20 w-20" alt='...' />
                Shri Dau ji Ashram
            </div>
            <div className='flex items-center justify-end p-4'>

                {
                    isMobile ?

                        <div>
                            {
                                openMenu ?
                                    <GiSplitCross onClick={() => setOpenMenu(false)} size={25} /> :
                                    <GiHamburgerMenu onClick={() => setOpenMenu(true)} size={25} />
                            }

                            {
                                openMenu && <div className='absolute'>
                                    <ul>
                                        <li>ok</li>
                                        <li>ok</li>
                                        <li>ok</li>
                                        <li>ok</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        :
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