import React, { useState } from 'react'

interface Usuario{
    nombre:string,
    edad:number
    email:string
}

interface Producto{
    id:number,
    nombre:string,
    precio:number
}

type Estado= "pendiente" | "aprobado" | "rechazado"

// God mode
// voy a crear un type llamado CamposUsuario que tenga como posibles valores las claves de la interfaz de Usuario
type CamposUsuario= keyof Usuario


function Ejercicio2() {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [productos, setPorductos] = useState<Producto | null>(null)
    const [estado, setEstado] = useState<Estado>("pendiente")
    //cuando lo vaya a renderizar podré gestionar con el null si no hay productos
    if(productos==null){
        return <p>Cargando productos...</p>
    }else{
        <h1>{productos.nombre}</h1>
    }
  return (
    <div>Ejercicio2</div>
  )
}

export default Ejercicio2