import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Exam8 from './pages/Exam8'
import "./styles/tailwind.css"
import Navbar from './components/Navbar'
import Exam11 from './pages/Exam11'
import Exam4 from './pages/Exam4'
import Exam5 from './pages/Exam5'
import Exam12 from './pages/Exam12'
import Exam7 from './pages/Exam7'
import Exam123 from './pages/Exam123'
import "./styles/styles.css"
const App = () => {
  return (
    <>
    <Navbar />
    <div className="m-24">
    <Routes>
    <Route path='/' element={ <Exam123 /> } />
    <Route path="/exam4" element={ <Exam4 /> } />
    <Route path="/exam5" element={ <Exam5 /> } />
    <Route path='/exam8' element={ <Exam8 /> } />
    <Route path='/exam7' element={ <Exam7 /> } />
    <Route path='/exam11' element={ <Exam11 /> } />
    <Route path='/exam12' element={ <Exam12 /> } />
    </Routes>
    </div>
    </>
  )
}

export default App