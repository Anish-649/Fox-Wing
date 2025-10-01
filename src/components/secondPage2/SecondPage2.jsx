import "./secondPage2.css"
import CurveLine from '../curveLine/CurveLine'
import CountUp from "../countUp"
import LogoSlider from "../logoSlider/logoSlider";
export default function SecondPage2() {
    return (
      <div className="secondPage2">
        <LogoSlider width={200} height={150}/>
        <CurveLine />
        <div className="secondPage2-title">
          <h1>
            __WE GAIN <span>TRUST</span> BY WORKING <span>EFFICIENTLY</span>__
          </h1>
        </div>
        <div className="gainTrust">
          <div className="workBox secondPage2-exp">
            <CountUp end={6} duration={1000} decimals={0} />
            <h2>Year Of Experience</h2>
          </div>
          <div className="workBox secondPage2-customer">
            <CountUp end={5658} duration={2500} decimals={0} />
            <h2>Customers Worldwide</h2>
          </div>
          <div className="workBox secondPage2-work">
            <h1>12K+</h1>
            <h2>PR works Completed</h2>
          </div>
        
           
        </div>
          <div className="teamMember workBox">
         <p>At Fox Wing Media LLP, we believe public relations is more than press releases. It’s the art of shaping how your story is heard, how your reputation is built, and how your brand earns trust in a crowded digital age.</p>
       <p>We are an award-winning PR and marketing team, powered by PhD-holder marketers, seasoned strategists, and AI-driven innovation. With a blend of academic depth and industry expertise, we create PR that not only boosts visibility but also drives measurable business outcomes.</p>
        </div>
      </div>
    );
}
