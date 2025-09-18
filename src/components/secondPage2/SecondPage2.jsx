import "./secondPage2.css"
import CurveLine from '../curveLine/CurveLine'

export default function SecondPage2() {
    return (
        <div className="secondPage2">
            <CurveLine />
            <div className="secondPage2-title">
                <h1>WE GAIN TRUST BY<br />WORKING<br />EFFICIENTLY</h1>
            </div>
            <div className="gainTrust">
                <div className="workBox secondPage2-exp">
                    <h1>6</h1>
                    <h2>Year Of Experience</h2>
                </div>
                <div className="workBox secondPage2-customer">
                    <h1>5,658</h1>
                    <h2>Customers Worldwide</h2>
                </div>
                <div className="workBox secondPage2-work">
                    <h1>12K+</h1>
                    <h2>PR works Completed</h2>
                </div>
            </div>
            <div className="teamMember">
                
            </div>
        </div>
    )
}
