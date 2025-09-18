import GradientLine from "../gradientLine/GradientLine"
import "./thirdPage.css"

export default function ThirdPage() {
  return (
    <div className='thirdPage'>
      <div className="thirdPage-title">
        <h1>BE A BRAND AND GET FEATURED IN<br/>TOP BRANDED NEWS, TV, PR MEDIA</h1>
      </div>
      <GradientLine/>
     <div className="thirdPage-content">
  <div className="row">
    <div className="mediaBox"></div>
    <div className="mediaBox"></div>
    <div className="mediaBox"></div>
  </div>
  <div className="row">
    <div className="mediaBox"></div>
    <div className="mediaBox"></div>
    <div className="mediaBox"></div>
    <div className="mediaBox"></div>
  </div>
</div>
<div className="thirdPage-btn">
<button class="gradient-btn">+20 NEWS CHANNELS</button>
</div>

    </div>
  )
}
