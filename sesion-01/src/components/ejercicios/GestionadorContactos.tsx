//Crear un componente que gestione una lista de contactos, el usuario debe de porder 
//agragar y eliminar contactos, para ello los requisitos son:
//Crear una Interfaz llamado COntacto con: id,nombre,tlfno, email
//-El componente debe de tener un form con 3 input (nombre,tlfno, email), un bton para agregar contacto , 
// una lista que muestre los contactos un bbotno para eliminar contacto
//-las funcionalidades deben ser:
//-Agregar un nuevo contacto (generar un id automatico con alguna libreria npm)
//-Eliminar un contacto por su id
//-limpiar el form despues de agregar
//-mostrar un mensaje si no hay contactos almacenados

import uniqid from 'uniqid';



interface ContactoProps {
    id: string
    nombre: string
    telefono: number
    email: string
}

import React, { useState } from 'react'

function GestionadorContactos() {

    const [contacto, setContacto] = useState<ContactoProps>({
            id:uniqid(),
            nombre:"",
            telefono:0,
            email:""
        })
    
    const clear = ():void =>{
        setContacto({
            id:uniqid(),
            nombre: "",
            telefono:0,
            email:""
        })
    }
    
    const actualizarCampo = (campo : keyof ContactoProps, value: string | number) => {
        setContacto({
            ...contacto,
            [campo]:value
        })
        
    }

    const handlerSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        
    }

  return (
    
        // Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4 text-center'>
            Añadir Contacto:
        </h3>
        <form onSubmit={handlerSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-2'>Nombre:</label>
                <input
                    type="text"
                    value={contacto.nombre}
                    onChange={(e)=>{
                        actualizarCampo("nombre",e.target.value)
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
           
            <div>
                <label className='block text-sm font-medium mb-2'>telefono:</label>
                <input
                    type="number"
                    value={contacto.telefono}
                    onChange={(e)=>{
                        actualizarCampo("telefono",parseInt(e.target.value))
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>Email:</label>
                <input
                    type="email"
                    value={contacto.email}
                    onChange={(e)=>{
                        actualizarCampo("email",e.target.value)
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
            <button type='submit'
            className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-semibold'
            onClick={()=>{
                const datos:string | null= localStorage.getItem("contactos")
                if(datos){
                    const contactos: ContactoProps[] = JSON.parse(datos)
                    contactos.push(contacto)
                    localStorage.setItem("contactos",JSON.stringify(contactos))
                }else{
                    localStorage.setItem("contactos",JSON.stringify([contacto]))
                }
               clear()
                
            }}
            >
            Guardar contacto
            </button>
            Mostrar los datos que tengo actualmente
            <div className='mt-6 mb-6 bg-gray-200 rounded'>
                <h4 className='font-semibold mb-2'>Datos Actuales</h4>
                <pre className='text-sm'>
                    {JSON.stringify(contacto,null,2)}
                </pre>
            </div>
            <div className="mt-4">
            {
                !localStorage.getItem("contactos") && (
                    <div className="bg-red-500 text-white p-3 rounded text-center font-semibold">
                    No hay contactos
                    </div>
                )
            }
            </div>
        </form>
        
    </div>
    
    
  )
}

export default GestionadorContactos


