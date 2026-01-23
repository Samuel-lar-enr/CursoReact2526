import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import NotFOund from './components/NotFOund'
import About from './components/about'
import Home from './pages/home'

const App = () => {
  return (
    <>
      <div>
          <Header />
          <main className='max-w-4xl mx-auto mt-10 bg-white-50 shadow-md border border-slate-200 min-h-[500]'>
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