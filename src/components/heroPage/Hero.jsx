import "./hero.css";
import bg_logo from "../../assets/bg_logo.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Hero() {
  const [text] = useTypewriter({
    words: ["Sale", "Communication", "Reputation"],
    loop: true,
    typeSpeed: 123,
    deleteSpeed: 56,
  });
  return (
    <div id="hero" className="hero">
      <img className="hero-bg" src={bg_logo} alt="backgromund color" />
      <h1>
        {" "}
        YOUR STORY <br />
        OUR STRATEGY
        <br />
        GLOBAL RECOGNITION
      </h1>
      <h3>Asia's First AI Powered PR Company</h3>
      <h2 style={{ fontWeight: "bold" }}>
        Give wings to your{" "}
        <span style={{ fontWeight: "bold", color: "#E67335~", opacity: "1" }}>
          {text}
        </span>
        <Cursor />
      </h2>
    </div>
  );
}
