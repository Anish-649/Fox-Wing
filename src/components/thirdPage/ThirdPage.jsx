import GradientLine from "../gradientLine/GradientLine"
import "./thirdPage.css"
import forbes from '../../assets/brand/forbes_logo.png'
import tedx from '../../assets/brand/TedX_logo.jpg'
import midday from '../../assets/brand/mid-day.png'

export default function ThirdPage() {
  return (
    <div className='thirdPage'>
      <div className="thirdPage-title">
        <h1>Stand Out From The Competition And Build An Evergreen Brand<br /><span>Be Visible And Credible By Getting Featured.</span></h1>
       </div>
      <GradientLine />
     
      <div className="thirdPage-content">
        <div className="row">
          <div className="mediaBox">
            <img className="menafn" src="https://www.plusinvestment.io/images/menafn-logo.jpeg" /></div>
          <div className="mediaBox">
            <img className="outlook" src="https://www.amity.edu/inbushera/assests/img/outlook.png" />
          </div>
          <div className="mediaBox">
            <img className="happen" src={forbes} />
          </div>
        </div>
        <div className="row">
          <div className="mediaBox">
            <img className="midday" src={midday} />
          </div>
          <div className="mediaBox">
            <img className="abp" src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/abp-live.png" />
          </div>
          <div className="mediaBox">
            <img className="josh-talk" src={tedx} />
          </div>

        </div>
      </div>
      <div className="thirdPage-btn">
        <button class="gradient-btn">500+ OPPORTUNITIES</button>
      </div>

    </div>
  )
}
