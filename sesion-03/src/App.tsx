import React, { Suspense, useState } from 'react'
import PlatosList from './components/PlatosList'
import LoadingFallback from './components/LoadingFallback'
import { fetchPlatos } from './utils/api'
import BuscarPlato from './components/BuscarPlato'
import Header from './components/header'

function App()  {
  //hooks
  const [platosPromise] = useState(()=>fetchPlatos())


  return (
  <div className='min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
       <Header />
        <main>
          <BuscarPlato />
          <Suspense fallback={<LoadingFallback message="Coockeando platos para ti 🔥🍽️" />}>
            <PlatosList platosPromise={platosPromise} />
          </Suspense>
        </main>
      </div>
  </div>
  )
}

export default App