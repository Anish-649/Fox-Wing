import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/heroPage/Hero'
import SecondPage from './components/secondPage/SecondPage'
import SecondPage2 from './components/secondPage2/SecondPage2'
import CurveLine from './components/curveLine/CurveLine'

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <SecondPage/>
      <SecondPage2/>
    
    </div>
  )
}

export default App
