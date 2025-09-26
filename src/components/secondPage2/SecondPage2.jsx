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
            WE GAIN TRUST BY
            <br />
            WORKING
            <br />
            EFFICIENTLY
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
        <div className="teamMember"></div>
      </div>
    );
}
