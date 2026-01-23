import React, { lazy, Suspense } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import NotFOund from './components/NotFOund'
import Home from './pages/Home'
import About from './components/About'
 const Saludo=  lazy(()=> import('./components/Saludo'))
//const About=  lazy(()=> import('./components/About'))


const App = () => {
  return (
    <>
      <div>
          <Header />
         
          <main className='max-w-4xl mx-auto mt-10 bg-white-50 shadow-md border border-slate-200 min-h-[500]'>
          <Suspense fallback={<h2>Cargando...</h2>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/saludo/:nombre' element={<Saludo />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFOund />} />

            </Routes>
          </Suspense>
          </main>
      </div>
    </>
  )
}

export default App