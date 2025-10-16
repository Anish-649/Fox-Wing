import "./hero.css"
import bg_logo from "../../assets/bg_logo.webp";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <img className="hero-bg" src={bg_logo} alt="backgromund color"/>
      <h1> ASIA’S FIRST <br/>AI-POWERED<br/> PR MARKETING AGENCY</h1>
      <h3>The Leading PR Agency with Proven Success.</h3>
    </div>
  )
}
