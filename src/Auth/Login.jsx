import React from 'react'
import GifLogo from '../Gifs/logo1.gif'
import { useState } from 'react'
import GlobalModal from '../components/GlobalModal'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [eventManage, setEventManage] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        navigate('/')
    }


    return (
        <div>
            {/* Dashboard Header */}
            <div className='grid grid-cols-2 w-full'>
                <div className='flex items-center'>
                    <img src={GifLogo} className="h-20 w-20" alt='...' />
                    Shri Dau ji Ashram
                </div>
                <div className="grid grid-cols-2 grid-flow-row text-center items-center">
                    <a href='#' onClick={() => setEventManage(!eventManage)} className='text-red-500 hover:text-blue row-span-3'>Event </a>
                    <button onClick={handleLogOut} className=' bg-[#f2b663] text-white text-sm px-4 py-2 rounded-3xl hover:border-2 hover:text-black row-span-3'>
                        Logout
                    </button>
                </div>
            </div>

            <div>
                {eventManage ?

                    <div className="grid grid-cols w-full">
                        event
                        <div>
                            <img className="h-[450px] w-full" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=".." />
                        </div>
                        <input type='file' className='border-black border my-2' placeholder='update your image' />
                        <input type='text' className='border-black border my-2' placeholder='update your image' />
                        <input type='datetime-local' className='border-black border my-2' placeholder='Update Date and Time' />
                        <textarea className='border-black border' name="" id="" cols="30" rows="10"></textarea>

                        <button className='onclick bg-orange-400 rounded-md mx-10 my-10'>submit event</button>

                    </div>
                    :
                    <div className="grid grid-cols w-full">
                        orkuch
                        <div>
                            <img className="h-[450px] w-full" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=".." />
                        </div>
                        <input type='file' className='border-black border my-2' placeholder='update your image' />
                        <input type='text' className='border-black border my-2' placeholder='update your image' />
                        <input type='datetime-local' className='border-black border my-2' placeholder='Update Date and Time' />
                        <textarea className='border-black border' name="" id="" cols="30" rows="10"></textarea>

                        <button className='bg-orange-400 rounded-md mx-10 my-10'>submit orkuch</button>

                    </div>
                }
            </div>

        </div>
    )
}

export default Login
