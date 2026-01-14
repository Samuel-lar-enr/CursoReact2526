import React, { useState } from 'react'
//Uso de formularios con typeScript
interface Usuario{
    nombre:string,
    edad:number
    email:string
}




function Ejercicio3() {
    const [usuario, setUsuario] = useState<Usuario>({nombre:"",edad:0,email:""})

    const actualizarCampo= ( campo: keyof Usuario, valor: string| number) => {
        setUsuario({
            ...usuario,
            [campo]:valor
        })
    }

    actualizarCampo("email","a@gmail.com")
  return (
    <>
        <div>Ejercicio3</div>
        <input value={usuario.nombre} onChange={(event)=>{actualizarCampo("nombre",event.target.value)}}></input>
    </>
  )
}

export default Ejercicio3