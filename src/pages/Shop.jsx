import React from 'react'
import ButtonBlack from '../components/ButtonBlack'
import DesignPropiedad from '../components/DesignPropiedad'
import imagen1 from '../img/casa2.jpg'

const Shop = () => {
  return (
    <main className='h-screen '>
        <div className='bg-black h-[25%] w-full border-t-[1px] border-gray-400 flex  flex-col justify-center'>
            <h1 className='text-white md:text-4xl text-2xl font-semibold md:px-40 px-2 sm:px-8'>Our Store</h1>
            <div className='xl:w-[50%]'>
                <p className='text-white md:text-lg text-base md:px-40 px-2 sm:px-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>

        <div className='flex items-center mt-12 px-2 md:px-40 gap-2 flex-wrap justify-center md:justify-start'>
            <ButtonBlack  text={"Categoria 1"} />
            <ButtonBlack  text={"Categoria 2"} />
            <ButtonBlack  text={"Categoria 3"} />
            <ButtonBlack  text={"Categoria 4"} />
        </div>

        <div className='w-full flex items-centers justify-center mt-20'>
            <div className='flex items-center justify-center w-60 h-12 border-[1px] border-black font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
                Post your property
            </div>
        </div>

        <div className='flex flex-wrap items-center mt-8 px-2  gap-10 justify-center'>
            <DesignPropiedad 
                nombre={'Propiedad'}
                precio={400}
                imagen={imagen1}
            />
            <DesignPropiedad 
                nombre={'Propiedad'}
                precio={400}
                imagen={imagen1}
            />
            <DesignPropiedad 
                nombre={'Propiedad'}
                precio={400}
                imagen={imagen1}
            />
            <DesignPropiedad 
                nombre={'Propiedad'}
                precio={400}
                imagen={imagen1}
            />
            <DesignPropiedad 
                nombre={'Propiedad'}
                precio={400}
                imagen={imagen1}
            />
            
        </div>
        <footer className='mt-10 h-20'>
                
        </footer>
    </main>
  )
}

export default Shop