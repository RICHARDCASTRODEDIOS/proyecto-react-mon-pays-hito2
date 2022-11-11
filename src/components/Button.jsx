import React from 'react'

export const Button = ({text}) => {
  return (
    <>
        <button className='w-full bg-black text-white h-10 rounded-md hover:bg-gray-500 transition-all duration-500 hover:border-transparent'>{text}</button>
    </>
  )
}

