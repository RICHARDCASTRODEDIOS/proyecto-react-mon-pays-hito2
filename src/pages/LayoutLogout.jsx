import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutLogout = () => {
  
  return (
    <header className='bg-black h-16 '>
        <div className='flex items-center text-white h-full  md:px-40 px-2 sm:px-8 justify-between'>
          <Link to="/">
            <h3 className=' text-2xl font-semibold cursor-pointer'>Mon-Pays</h3>
          </Link>
            
            <div className='flex justify-around items-center gap-3 sm:gap-8'>
              <Link to="/loginEmail">
                <p className='cursor-pointer text-lg'>Login</p>
              </Link>
              <Link to="/registerEmail">
                <p className='cursor-pointer text-lg'>Register</p>
              </Link>
            </div>
        </div>
        <Outlet />
    </header>
  )
}

export default LayoutLogout