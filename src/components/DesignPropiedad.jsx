import React from 'react'
import { Link } from 'react-router-dom'

const DesignPropiedad = ({imagen, precio, nombre}) => {
  return (
    <Link to="/description" className='cursor-pointer'>
        <div className='h-72 w-72'>
            <img src={imagen} alt={nombre} className="h-full w-full object-cover hover:scale-110 transition-all duration-00" />
        </div>
        <div className='mt-4'>
            <p className='text-lg font-bold'>{nombre}</p>
            <p className='font-medium'>${precio}</p>
        </div>
    </Link>
  )
}

export default DesignPropiedad