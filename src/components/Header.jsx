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
                                openMenu && <div className='absolute bg-white right-0 p-2'>
                                    <ul>
                                        <li>
                                            <a href='/' className='text-red-500 hover:text-blue row-span-3'>Home </a>
                                        </li>
                                        <li>
                                            <a href='/About-Us' className='hover:text-blue-40 row-span-3'> About us</a>

                                        </li>
                                        <li>
                                            <a href='/Event' className='hover:text-blue-40 row-span-3'> Event</a>

                                        </li>
                                        <li>
                                            <a href='/Services' className='hover:text-blue-40 row-span-3'> Services</a>

                                        </li>
                                        <li>
                                            <a href='/shankalp' className='hover:text-blue-40 row-span-3'> Shankalp</a>

                                        </li>

                                    </ul>
                                </div>
                            }
                        </div>
                        :
                        <div className="grid grid-cols-5 grid-flow-row text-center items-center">
                            <a href='/' className='text-red-500 hover:text-blue row-span-3'>Home </a>
                            <a href='/About-Us' className='hover:text-blue-40 row-span-3'> About us</a>
                            <a href='/Event' className='hover:text-blue-40 row-span-3'> Event</a>
                            <a href='/Services' className='hover:text-blue-40 row-span-3'> Services</a>
                            <a role='button' href='/Shankalp' className=' bg-[#f263b2] text-white text-sm px-5 py-2 rounded-3xl hover:bg-transparent hover:border-2 hover:text-black row-span-3'>
                                Shnkalp
                            </a>
                        </div>
                }
            </div>
        </div>
    )
}


export default Header