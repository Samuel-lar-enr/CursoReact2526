//Crear un formulario llamado formularioUsuario que gestione el nombre, la edad y el id
interface Usuario{
    nombre:string,
    email:string
    edad:number
}


import React, { useState } from 'react'
import Tarjeta from './tarjeta'

function FormularioUsuario() {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre:"",
        email:"",
        edad:0
    })

    const actualizarCampo = (campo: keyof Usuario, valor: string | number) =>{
        setUsuario({
            ...usuario,
            [campo]:valor
        })
        
    }

    const handlerSubmit= (e: React.FormEvent) => {
        e.preventDefault()
    }
    
  return (
    // Formulario de datos
    <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
        <h3 className='text-xl font-bold mb-4 text-center'>
            Registro de usuarios:
        </h3>
        <form onSubmit={handlerSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-2'>Nombre:</label>
                <input
                    type="text"
                    value={usuario.nombre}
                    onChange={(e)=>{
                        actualizarCampo("nombre",e.target.value)
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>Email:</label>
                <input
                    type="email"
                    value={usuario.email}
                    onChange={(e)=>{
                        actualizarCampo("email",e.target.value)
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
            <div>
                <label className='block text-sm font-medium mb-2'>Edad:</label>
                <input
                    type="number"
                    value={usuario.edad}
                    onChange={(e)=>{
                        actualizarCampo("edad",parseInt(e.target.value))
                    }}  
                    className='w-full ax-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500'
                />
            </div>
            <button type='submit'
            className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-semibold'
            onClick={()=>{
                const datos:string | null= localStorage.getItem("Usuarios")
                if(datos){
                    const usuarios: Usuario[] = JSON.parse(datos)
                    usuarios.push(usuario)
                    localStorage.setItem("Usuarios",JSON.stringify(usuarios))
                }else{
                    localStorage.setItem("Usuarios",JSON.stringify([usuario]))
                }
            }}
            >
            Guardar usuario
            </button>
            Mostrar los datos que tengo actualmente
            <div className='mt-6 mb-6 bg-gray-200 rounded'>
                <h4 className='font-semibold mb-2'>Datos Actuales</h4>
                <pre className='text-sm'>
                    {JSON.stringify(usuario,null,2)}
                </pre>
            </div>
            
        </form>
        
    </div>
  )
}

export default FormularioUsuario