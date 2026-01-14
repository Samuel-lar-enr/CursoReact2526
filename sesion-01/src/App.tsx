import React from 'react'
import Header from './components/ejercicios/Header'
import Saludo from './components/ejercicios/Saludo'
import Tarjeta from './components/ejercicios/tarjeta'
import FormularioUsuario from './components/ejercicios/FormularioUsuario'
import GestionadorContactos from './components/ejercicios/GestionadorContactos'

const App = () => {
  return (
    
    <div className='min-h-screen bg-gray-300'>
      <Header />
      <main className='container bg-gray-100 mx-auto p-4'>
        <Saludo nombre="Samuel" edad={25}/>
        <Saludo nombre="Samuel" edad={25}/>
        <Saludo nombre="Samuel" edad={25}/>
        <Saludo nombre="Samuel" edad={25}/>
        <Saludo nombre="Samuel" edad={25}/>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          <Tarjeta  
            titulo='React 19'
            description='Última versión de la librería React para javaScript'
            imagen='https://i.pinimg.com/originals/2a/c4/58/2ac45868f16c88f0aedcbf91752f8fa3.gif'
          />

          <Tarjeta  
            titulo='React 19'
            description='Última versión de la librería React para javaScript'
            imagen='https://media.tenor.com/cPWuglL3WXoAAAAM/ulrik-dum-dum.gif'
            favorite={true}
          />

          <Tarjeta  
            titulo='React 19'
            description='Última versión de la librería React para javaScript'
            imagen='https://media.tenor.com/cPWuglL3WXoAAAAM/ulrik-dum-dum.gif'
          />

          <Tarjeta  
            titulo='React 19'
            description='Última versión de la librería React para javaScript'
            imagen='https://i.pinimg.com/originals/2a/c4/58/2ac45868f16c88f0aedcbf91752f8fa3.gif'
            favorite={true}
          />

          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
          </div>

        </div>

        <FormularioUsuario />

        <GestionadorContactos />
        
          
      </main>
    </div>
  
  )
}

export default App