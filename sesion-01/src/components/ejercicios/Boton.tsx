//Crear un componente llamado boton que le pase como props un textto, el tipo de botón y el evento on click
//El tipo de boton lo llamaré tipoBoton y tendrá 3 tipos, primary, secondary, danger
//-si es primary tendrá un background-azul-500 y hover:bg-azul-700
//si es secondary tendrá un bg-gray-500 y hover:bg-gray-600
//si es danger bg-red-500 y hover:bg-red-600
//todos tendrán un texto blanco

import React from 'react'

type TipoBoton = "primary" | "secondary" | "danger"


interface BotonProps {
    tipo: TipoBoton
    texto: string
    onClick: () => void
    submit: boolean
}

function Boton({texto, tipo, onClick, submit}:BotonProps){
    
    const estilos = {
        primary: "bg-blue-500 hover:bg-blue-700",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600",
    }



    return (
    <button
    type={submit ? "submit" : "button"}
    className={estilos[tipo]}
    onClick={onClick}
    >{texto}
    </button>
  )
}

export default Boton