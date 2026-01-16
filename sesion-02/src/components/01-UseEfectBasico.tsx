import React, { useEffect, useState } from 'react'

function UseEfectBasico() {
    //hooks´
    const [isTabActive, setIsTabActive] = useState(true)
    //efects
    useEffect(() => {
    //   const active = document.visibilityState === 'visible'
    //   setIsTabActive(active)
    //   document.title = active ? "React 19" : "¡vuelve 🙀!"


    }, [])
    
    //functions

  return (
    <div className={`p-8 rounded-3xl transition-colors-all duration-300 border-2
        ${isTabActive ? "bg-white border-sky-500 shadow-md": "bg-slate-50 border-slate-600 opacity-60"}`}>
            <h2 className='text-2xl font-bold text-slate-800 mb-4'>Estado de la pestaña: {isTabActive ? "🟢" : "🔴"}</h2>
    </div>
  )
}

export default UseEfectBasico