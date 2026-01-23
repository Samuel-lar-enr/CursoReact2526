//Crear un componente buscar que filtre por pulsación 
//Por nombre de plato o ingrediente

import React, { useState } from 'react'



const BuscarPlato = () => {

  const [nombrePlato, setNombrePlato] = useState<string>("")

  

  return (
    <form >
        <input type="text" id="searchInput" placeholder="Buscar..." required
        onChange={(e)=>{
            setNombrePlato(e.target.value)
        }} />
        <button type="submit">🔍</button>
    </form>
  )
}

export default BuscarPlato