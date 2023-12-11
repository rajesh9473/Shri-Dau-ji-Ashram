import { input } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const LoginX = ({ open, handleclose }) => {
    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(value => ({ ...value, [name]: value }))

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null)


        try {
            const { mobileNo, passward } = inputs;

            const response = await fetch(API_URL + `/api/v1/user/login?mobileNo=${mobileNo}&password=${passward}`
            );
            if (!response.ok) {
                throw new Error('login failed');
            }
            const data = await response.json();
            console.log('Login successful', data);
            navigate('/login');
        } catch (error) {
            console.error('login error', error);
            setError('Login faild. please check your passward')
        }
    }

    return (
        <div className='container max-w-2xl mx-auto'>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
                <div>
                    <input type="text" className='border w-full border-black rounded-md active:text-yellow-900 hover: m-1 p-2' placeholder='Enter Here' name="" id="" />
                </div>
            </div>
            <button onClick={handleSubmit}>
                ok
            </button>

        </div>
    )
}


export default LoginX