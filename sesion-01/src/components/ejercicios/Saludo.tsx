//Crear un componente saludo que mande un saludo personalizado a través de las props
 import React from 'react'
 
 interface SaludoProps {
    nombre: string
    edad: number
 }

 const Saludo = ({nombre,edad}: SaludoProps) => {
   return (
     <div className='p-4 bg-green-300 rounded-lg shadow mt-4'>
        <h2 className='text-xl font-semibold'>
            Hola {nombre}
        </h2>
        <p className='text-gray-700 font-medium'>
            tienes {edad} años
        </p>
     </div>
   )
 }
 
 export default Saludo