import React from 'react'
import { Button } from '../components/Button'

const RegisterEmail = () => {
  return (
    <div className='mt-20'>
        <form className='w-3/4 pb-5 bg-white gap-2 rounded-md md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='p-5 text-2xl font-bold md:pl-7'>Welcome Back</h1>
            <h2 className='pl-5 text-lg font-light text-gray-400 md:pl-7'>Sign Up</h2>
            <div className='p-5 flex flex-col gap-3 md:pl-7'>
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Name" type="text" />
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Email" type="email" />
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Password" type="password" />
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Repeat Password" type="password" />
            </div>
            <div className='w-24 mt-5 mx-auto text-center'>
              <Button text={"Sign Up"} />
            </div>
        </form>
        <div className='w-3/4 mt-10 text-center md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='font-semibold text-gray-400 '>Do you have account ? <a className='font-bold text-gray-500' href="./LoginEmail">Sign in</a></h1>
            
        </div>
    </div>
  )
}

export default RegisterEmail