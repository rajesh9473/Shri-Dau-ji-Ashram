import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Modal from './Modal'
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const GlobalModal = ({ open, handleClose }) => {


    const [inputs, setInputs] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null)
        try {
            const { mobileNo, password } = inputs;

            // Replace with your actual API endpoint for login
            const response = await fetch(
                API_URL + `/api/v1/user/login?mobileNo=${mobileNo}&password=${password}`
            );

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Assuming the API returns a token upon successful login
            const data = await response.json();
            console.log('Login successful', data);

            // Redirect to the desired route after successful login
            navigate('/login');
        } catch (error) {
            console.error('Login error', error);
            setError('Login failed. Please check your credentials.');
        }

    }



    return (
        <Modal isOpen={open}>
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <div className='grid grid-cols-1  gap-1 '>
                <label >Mobile Number</label>
                <input
                    type="text"
                    name="mobileNo"
                    value={inputs.mobileNo || ""}
                    onChange={handleChange}
                    className='border-black border w-full rounded-sm p-2'
                    placeholder='Enter your ID' />
                <div>
                    <label >Password</label>
                    <input
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                        className='border-black border w-full rounded-sm p-2'
                        placeholder='Enter your passward' />

                </div>

            </div>
            <div className=' flex gap-2'>
                <button onClick={handleClose} className="mt-4 bg-gray-300 p-2">
                    Close
                </button>
                <button onClick={handleSubmit} className='mt-4 bg-yellow-300 p-2' >
                    Login
                </button>
               </div>
            </Modal>



    )
}


export default GlobalModal

