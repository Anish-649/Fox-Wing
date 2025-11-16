import GradientLine from "../gradientLine/GradientLine"
import "./thirdPage.css"
import forbes from '../../assets/brand/Forbes_logo.png'
import tedx from '../../assets/brand/TedX_logo.jpg'
import midday from '../../assets/brand/mid-day.png'
import Reveal from "../../Reveal"
import menafn from "../../assets/brand/menafn-logo.jpeg"
import outlook from "../../assets/brand/outlook-logo-vector.png";
import abp from "../../assets/brand/abp-live.png";
export default function ThirdPage() {
  return (
    <div className='thirdPage'>
      <div className="thirdPage-title">
        <Reveal>
        <h1>Stand Out From The Competition And Build An Evergreen Brand<br /><span>Be Visible And Credible By Getting Featured.</span></h1>
      </Reveal>
       </div>
      <GradientLine />
     
      <div className="thirdPage-content">
        <Reveal>
        <div className="row">
          <div className="mediaBox">
            <img className="menafn" src={menafn}/></div>
          <div className="mediaBox">
            <img className="outlook" src={outlook} />
          </div>
          <div className="mediaBox">
            <img className="happen" src={forbes} />
          </div>
        </div>
        </Reveal>
        <Reveal>
        <div className="row">
          <div className="mediaBox">
            <img className="midday" src={midday} />
          </div>
          <div className="mediaBox">
            <img className="abp" src={abp} />
          </div>
          <div className="mediaBox">
            <img className="josh-talk" src={tedx} />
          </div>

        </div>
        </Reveal>
      </div>
      <div className="thirdPage-btn">
        <button class="gradient-btn">500+ OPPORTUNITIES</button>
      </div>

    </div>
  )
}
