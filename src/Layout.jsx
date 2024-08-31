import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

const Layout = () => {
  return (
    <div className='h-screen bg-[#4801ff]'>
        <Navigation/>
        <Outlet/>
    </div>
)
}

export default Layout