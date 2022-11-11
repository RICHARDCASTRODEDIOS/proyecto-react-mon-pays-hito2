import React from 'react'
import {Button} from '../components/Button'


const LoginEmail = () => {
  return (
    <div className='mt-20 '>
        <form className='w-3/4 h-80 bg-white gap-2 rounded-md md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='p-5 text-2xl font-bold md:pl-7'>Welcome Back</h1>
            <h2 className='pl-5 text-lg font-light text-gray-400 md:pl-7'>Login with email</h2>
            <div className='p-5 flex flex-col gap-3 md:pl-7'>
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Email" type="email" required />
                <input className='h-10 border-2 pl-5 md:w-11/12' placeholder="Password" type="password" required />
            </div>
            <div className='w-24 mt-5 mx-auto text-center'>
              <Button text={"Sign in"} />
            </div>
        </form>
        <div className='w-3/4 mt-10 text-center md:w-3/5 mx-auto lg:w-1/3'>
            <h1 className='font-semibold text-gray-400 '>Or Create an <a className='font-bold text-gray-500' href="./RegisterEmail">account</a></h1>
        </div>
    </div>
  )
}

export default LoginEmail