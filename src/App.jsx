
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/heroPage/Hero'
import SecondPage2 from './components/secondPage2/SecondPage2'
import ThirdPage from './components/thirdPage/ThirdPage'
import FourthPage from './components/fourthPage/FourthPage'
import FifthPage from './components/fifthPage/FifthPage'
import SixthPage from './components/sixthPage/SixthPage'

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <SecondPage2/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
      <SixthPage/>
 </div>
  )
}

export default App
