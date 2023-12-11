import React from 'react'
import Login from '../Auth/Login'
import { Outlet } from 'react-router-dom'

const PrivatePages = () => {
    return (
        <>
            <Login />
            <Outlet />
        </>
    )
}

export default PrivatePages