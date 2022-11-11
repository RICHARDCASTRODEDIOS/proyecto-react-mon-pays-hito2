import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Button } from "../components/Button";

const Description = () => {

  const [addFav, setAddFav] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row lg:items-start items-center md:mt-32 mt-10 lg:px-20 xl:px-40 pb-4">
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 w-3/4 items-center justify-center h-56 overflow-y-scroll md:h-[70%]">
        <img className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center" src="https://i.pinimg.com/736x/21/28/4e/21284ec293da6c04197d6c9a1632157a.jpg" alt="Casa 1" />
        <img className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center" src="https://archivo.lasillavacia.com/archivos/historias/vivienda/bv.jpg" alt="Casa 2" />
        <img className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center" src="https://w0.peakpx.com/wallpaper/756/314/HD-wallpaper-ugly-houses-ugly-green-house-architecture.jpg" alt="Casa 3" />
        <img className="w-full h-full md:max-w-md max-w-sm bg-cover justify-self-center" src="https://c8.alamy.com/compes/r95d1a/esta-unica-imagen-muestra-una-casa-embrujada-abandonados-en-un-lago-de-hua-hin-en-tailandia-r95d1a.jpg" alt="Casa 4" />
      </div>
      <div className="flex flex-col w-3/4 mt-10 gap-4 lg:ml-10 lg:px-5">
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Lorem ipsum</h1>
                <p className="font-medium">$Price</p>
                <p className="font-light text-gray-400">Direccion</p>
            </div>
                <AiFillHeart className="cursor-pointer" color={`${addFav ? 'red': 'black' }`} onClick={()=> setAddFav(!addFav)} size={35} />
        </div>
        <div className="h-64 md:h-36 2xl:h-80 overflow-y-scroll md:overflow-auto">
            <p className="font-normal">Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces.Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless piecesRevamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless piecesRevamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless piecesRevamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless piecesRevamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless piecesRevamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces
            </p>
        </div>
        <p className="font-semibold text-lg">Cartegoria:</p>
             <div className="bg-black text-white w-32 h-8 flex justify-center items-center rounded-md font-medium">
              Categoria 1
             </div>
        <div className="w-56 mx-auto mt-2 md:mt-10">
              <Button text={"Contact us"} />
         </div>
        
        
      </div>
    </div>
  );
};

export default Description;
