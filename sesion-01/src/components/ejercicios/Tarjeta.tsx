import React, { useState } from 'react'
// USO RENDERIZADO CONDICIONAL EN COMPONENTES Y PROPIEDADES
interface TarjetaProps {
    titulo:string,
    description:string,
    imagen?:string,
    favorite?:boolean,
}

const Tarjeta = ({
    titulo,
    description,
    imagen,
    favorite= false,
}:TarjetaProps) => {

  const [fav, setFav] = useState(favorite)



  return (
    <div className={`rounded-lg shadow-md p-6  ${
      fav ? 'bg-yellow-100 border-2 border-amber-600': 'bg-gray-100' }
      `}
      onClick={()=>{
        setFav(!fav)
      }} 
      >
      {
        //pinto la imagen si exite
        imagen && (
          <img className='w-full h-48 obeject-cover rounded-md mb-4' src={imagen} alt={titulo} />
        )}

        <h3 className='text-xl font-bold mb-2'>{titulo}</h3>
        <p className='text-gray-500 mb-2'>{description}</p>
        {fav && (
          <span className=''
          >⭐
          </span>
        )}

    </div>
  )
}

export default Tarjeta