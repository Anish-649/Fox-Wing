
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/heroPage/Hero'
import SecondPage2 from './components/secondPage2/SecondPage2'
import ThirdPage from './components/thirdPage/ThirdPage'
import FourthPage from './components/fourthPage/FourthPage'
import FifthPage from './components/fifthPage/FifthPage'
import Events from './components/events/Events'



function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <SecondPage2/>
      <ThirdPage/>
      <FourthPage/>
      <FifthPage/>
   
    <Events/> 
    </div>
  )
}

export default App
