import React, { useState } from 'react'

import { NavLink, Route, Routes } from 'react-router-dom'

import PublicHome from './pages/PublicHome'
import SecretArea from './pages/SecretArea'
import { ProtectedRoute } from './utils/Protected'
import Navbar from '../02-navegacion/components/Navbar'
import Header from './components/Header'
import { isatty } from 'tty'


const App = () => {
  const [isAllowed, setIsAllowed] = useState<boolean>(false)
  return (
    <>
      <div>
          <Header />
          <nav className=' bg-slate-200 border-0 border-slate-400 p-8 flex justify-center items-center gap-12 shadow-sm top-0 z-50 sticky'>
              <NavLink 
              to= "/secret"
              className={({isActive}) => `
               ${isActive ? 'text-green-600' : 'hover:text-red-600' }
              `} >SecretArea</NavLink>

              <NavLink 
              to= "/"
              className={({isActive}) => `
               ${isActive ? 'text-green-600' : 'hover:text-red-600' }
              `} >Public</NavLink>
          </nav>
          <div className='flex justify-center items-center m-2'>
            <button 
            onClick={() => setIsAllowed(!isAllowed)}
            className={`px-10 py-3 rounded-xl text-xs uppercase transition-all active:scale-90  
             ${isAllowed 
             ? 'bg-green-600 text-white shadow-green-200 border-slate-700'
             : 'bg-red-600 text-white shadow-red-200 border-black'}
             `}>
               {isAllowed? "Logout" : "Login"}
            </button>
          </div>
          <main className='max-w-4xl mx-auto mt-10 bg-white-50 shadow-md border border-slate-200 min-h-[500]'>
             <Routes>
                <Route path='/' element={<PublicHome />} />
                <Route path='secret' element={
                  <ProtectedRoute isAllowed={isAllowed}>
                    <SecretArea />
                  </ProtectedRoute>
                } />
                
             </Routes>
          </main>
      </div>
    </>
  )
}

export default App