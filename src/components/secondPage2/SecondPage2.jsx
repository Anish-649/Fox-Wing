import "./secondPage2.css";
import { useState } from "react";
import {motion} from "framer-motion";
import {useRef} from "react";
import CurveLine from "../curveLine/CurveLine";
import CountUp from "../countUp";
import LogoSlider from "../logoSlider/logoSlider";
import Reveal from "../../Reveal";

export default function SecondPage2() {
  
    const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);



  return (
    <div id="presence" className="secondPage2">
       <Reveal>

      <h1 className="logoSlider-header">Worked with</h1>
      </Reveal>
      <Reveal>
      <LogoSlider width={200} height={150} />
      </Reveal>
      <CurveLine />
      

      <div className="secondPage2-title">
        <Reveal>
        <h1>
          __WE GAIN <span>TRUST</span> BY WORKING <span>EFFICIENTLY</span>__
        </h1>
        </Reveal>
      </div>
<Reveal>
      <div className="gainTrust">
        <div className="workBox secondPage2-exp">
          <span className="speed">
            <CountUp end={6} duration={1500} decimals={0} />
            <h1 className="plus">+</h1>
          </span>
          <h2>Year Of Experience</h2>
        </div>

        <div className="workBox secondPage2-customer">
          <span className="speed">
            <CountUp end={2000} duration={1500} decimals={0} />
            <h1 className="plus">+</h1>
          </span>
          <h2>PR Deliverables (features, campaigns & Placements)</h2>
        </div>

        <div className="workBox secondPage2-work">
          <span className="speed">
            <CountUp end={50} duration={1500} decimals={0} />
            <h1 className="plus">+</h1>
          </span>
          <h2>Projects Successfully Executed</h2>
        </div>
      </div>
</Reveal>
 <Reveal>
      <div className="teamMember workBox">
       
        <p className={readMore ? "expanded" : "collapsed"}>At Fox Wing Media LLP, we believe public relations is more than press releases. 
  It’s the art of shaping how your story is heard, how your reputation is built, 
  and how your brand earns trust in a crowded digital age. <br/><br/>We are an award-winning PR and marketing team, powered by PhD-holder marketers, 
  seasoned strategists, and AI-driven innovation. With a blend of academic depth 
  and industry expertise.<br/><br/> we create PR that not only boosts visibility but also 
  drives measurable business outcomes.</p>
 
        <button className="readmore-btn" onClick={toggleReadMore}>
  {readMore ? "Read Less" : "Read More"}
</button>
      </div>
       </Reveal>
    </div>
  );
}
