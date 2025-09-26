import GradientLine from "../gradientLine/GradientLine"
import "./thirdPage.css"

export default function ThirdPage() {
  return (
    <div className='thirdPage'>
      <div className="thirdPage-title">
        <h1>BE A BRAND AND GET FEATURED IN<br />TOP BRANDED NEWS, TV, PR MEDIA</h1>
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
            <img className="happen" src="https://happenrecently.com/wp-content/uploads/2022/08/happen-recently-logo-x2-1.png" />
          </div>
        </div>
        <div className="row">
          <div className="mediaBox">
            <img className="midday" src="https://i0.wp.com/thecuriocitycollective.org/wp-content/uploads/2020/04/midday.png?fit=1200%2C1200&ssl=1" />
          </div>
          <div className="mediaBox">
            <img className="abp" src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/abp-live.png" />
          </div>
          <div className="mediaBox">
            <img className="josh-talk" src="https://www.pikpng.com/pngl/b/585-5852469_josh-talks-logo-png-clipart.png" />
          </div>

        </div>
      </div>
      <div className="thirdPage-btn">
        <button class="gradient-btn">+20 NEWS CHANNELS</button>
      </div>

    </div>
  )
}
