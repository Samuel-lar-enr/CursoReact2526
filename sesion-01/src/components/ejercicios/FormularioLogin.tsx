//Crear un formulario de login con validación básica
//debe de tener 2 campos email y password
//hay que validar que los campos no estén vacios
//hay que validar con alguna expresión regular que el formato del email sea valido
//hay que mostrar-ocultar la contraseña con un botoncito
//hay que mostrar mensajes de error personalizados
//(opcional) contraseña con un minimo de caracteres

import React, { useState } from 'react'
import Boton from './Boton'

interface Credenciales {
    email: string
    password: string
}

function FormularioLogin() {
    //hooks
    const [credenciales, setCredenciales] = useState<Credenciales>({
        email: '',
        password: ''
    })
    const [errores, setErrores] = useState({email:"",password:""})
    const [showPassword, setShowPassword] = useState(false)

    //efectos

    //funciones
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        alert("enviado...")
        if(validarFormulario()){
            console.log("login exitoso",credenciales)
        }else{

        }
    }

    const emailValido = (email:string):boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
    
    const validarFormulario = ():boolean => {
        const posiblesErrorres:Credenciales= {email:"",password:""}
        if(!credenciales.email.trim()){
            posiblesErrorres.email = "Error, falta un email"
            
        }else if (!emailValido(credenciales.email)){
            posiblesErrorres.email = "Error, email no valido"
            
        }
        if(!credenciales.password.trim()){
            posiblesErrorres.password = "Error, falta un password"
            
        }else if (credenciales.password.length < 6){
            posiblesErrorres.password = "Error, password debe tener al menos 6 caracteres"
            
        }
        setErrores(posiblesErrorres)
        return Object.keys(posiblesErrorres).length === 0
    }

  return (
   <div className='max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mg-6 text-center'>Formulario de Login</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-1'>Email:</label>
                <input 
                type="email"
                className='w-full px-3 pt-2 rounded border focus:outline-none focus:ring-4y'  
                placeholder='tu@email.com'
                value={credenciales.email}
                required
                onChange={(e)=>
                    setCredenciales({
                        ...credenciales,
                        email: e.target.value
                    } )
                }

                />
            </div>
            <div>
                <label className='block text-sm font-medium mb-1'>Password:</label>
                <input 
                type={showPassword ? 'text' : 'password'}
                className='w-full px-3 pt-2 rounded border focus:outline-none focus:ring-4y'  
                placeholder='Introduce password'
                value={credenciales.password}
                required
                onChange={(e)=>
                    setCredenciales({
                        ...credenciales,
                        password: e.target.value
                    } )
                }

                />
            </div>
            <button 
                type='button'
                onClick={()=>
                    setShowPassword(!showPassword)
                }
                >{showPassword ? "🙈" : "🙉"} 
            </button>
            <div>
                <Boton
                tipo="primary"
                onClick={()=>handleSubmit}
                texto='Enviar'
                submit={true}
                />
            </div>
            <label></label>
            
        </form>
   </div>
  )
}

export default FormularioLogin

