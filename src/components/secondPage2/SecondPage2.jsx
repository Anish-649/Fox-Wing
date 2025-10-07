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
           <span className="speed">
  <CountUp end={6} duration={1500} decimals={0} /><h1 style={{fontSize:"4.3rem",fontWeight:"500",marginLeft:"1rem"}}> +</h1>
</span>
            <h2>Year Of Experience</h2>
          </div>
          <div className="workBox secondPage2-customer">
           
           <span className="speed" style={{}}> <CountUp end={2000} duration={1500} decimals={0} className="speed"/><h1 style={{fontSize:"4.3rem",fontWeight:"500",marginLeft:"1rem"}}> +</h1>
            </span>
            <h2>PR Deliverables(features,campaigns & Placements)</h2>
          </div>
          <div className="workBox secondPage2-work">
            <span className="speed"><CountUp end={50} duration={1500} decimals={0} className="speed"/><h1 style={{fontSize:"4.3rem",fontWeight:"500",marginLeft:"1rem"}}> +</h1></span>
            <h2>Projects Successfully Executed</h2>
          </div>
        
           
        </div>
          <div className="teamMember workBox">
         <p>At Fox Wing Media LLP, we believe public relations is more than press releases. It’s the art of shaping how your story is heard, how your reputation is built, and how your brand earns trust in a crowded digital age.</p>
       <p>We are an award-winning PR and marketing team, powered by PhD-holder marketers, seasoned strategists, and AI-driven innovation. With a blend of academic depth and industry expertise, we create PR that not only boosts visibility but also drives measurable business outcomes.</p>
        </div>
      </div>
    );
}
