import React from 'react'
import casa1 from '../img/casa1.jpg'

const CardWish = ({id, nombre, descripcion}) => {
    return (
        <>
            <div className="flex flex-col items-center gap-5 justify-center w-screen ">
                <h1 className="font-bold text-2xl mt-5">Wish List</h1>

                <div key={id} className="w-full border-b-2 border-b-gray-300 flex flex-col p-10 justify-center items-center md:items-start md:flex-row">
                    <img
                        className="w-36 place-self-center md:w-1/3"
                        src={casa1}
                        alt="list"
                    />
                    <div className="flex flex-col text-center gap-5 p-5">
                        <h1 className="font-semibold text-xl">
                            Casa de lujo
                        </h1>
                        <div className="h-24 overflow-y-scroll md:h-2/3 lg:h-44">
                            <p className="text-sm text-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum nulla eu turpis sodales, quis vehicula nisl commodo. Fusce sed ipsum sodales odio vulputate vestibulum. Sed dui nulla, commodo eget tempus ac, blandit accumsan risus. Phasellus ultrices eu purus eget sagittis. Etiam scelerisque urna eros.
                            </p>
                        </div>
                        <div  className="w-1/3 mx-auto">
                            <button className="w-full min-w-[80px] bg-red-700 text-white h-10 rounded-md hover:bg-gray-400 transition-all duration-500 hover:border-transparent font-semibold">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            
                
            
        </>
    )
}

export default CardWish