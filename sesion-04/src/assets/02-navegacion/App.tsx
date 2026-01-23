import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import NotFOund from './components/NotFOund'
import Home from './pages/Home'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div>
          <Navbar />
          <main className='max-w-4xl mx-auto mt-10 bg-white-50 shadow-md border border-slate-200 min-h-[500px]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<NotFOund />} />

            </Routes>
          </main>
      </div>
    </>
  )
}

export default App