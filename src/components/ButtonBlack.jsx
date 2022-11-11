import React from 'react'

const ButtonBlack = ({text}) => {
  return (
    <div className='border-[1px] border-black w-28 h-10 flex items-center justify-center font-medium cursor-pointer hover:bg-black hover:text-white transition-all duration-300'>
        {text}
    </div>
  )
}

export default ButtonBlack