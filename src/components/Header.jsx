import React from 'react'
import GifLogo from '../Gifs/logo1.gif'

const Header = () => {
    return (
        <div className='flex py-2  justify-between text-black-500 bg-[#fdefea]  items-center'>
            <div className='flex items-center'>
                <img src={GifLogo} className="h-20 w-20" alt='...' />
                Shri Dau ji Ashram
            </div>
            <div className='flex text-right p-2 m-2 gap-x-7 items-center'>
                <a href='/' className='text-red-500 hover:text-blue-500'>Home </a>
                <a href='/About-Us' className='hover:text-blue-400'> About us</a>
                <a href='/Event' className='hover:text-blue-400'> Event</a>
                <a href='/Services' className='hover:text-blue-400'> Services</a>
                {/* <a href='/' className='hover:text-blue-400'></a> */}
                <button className='bg-[#f2b263] text-white text-sm px-2 py-2 rounded-3xl hover:bg-black'>  Shnkalp </button>
            </div>

        </div>
    )
}


export default Header