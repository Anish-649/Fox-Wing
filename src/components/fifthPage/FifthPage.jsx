// FifthPage.jsx
import "./fifthPage.css";
import { useState } from "react";
import anurag from "../../assets/anurag.webp";
import sameer from "../../assets/sameer.webp";
import FounderCurveline from "./founderCurveline/FounderCurveline";

export default function FifthPage() {
  const [expandedSameer, setExpandedSameer] = useState(false);
  const [expandedAnurag, setExpandedAnurag] = useState(false);

  return (
    <div id="Team" className="founder">
      <div className="founder-Header">
        <p>Meet Our Founders</p>
      </div>

      <FounderCurveline />

      {/* Sameer */}
      <div className="cofounder-One">
        <img className="cofounder-Img1" src={sameer} alt="Sameer Satyarth" />
        <div className="cofounderOne-Des">
          <h1>Sameer Satyarth</h1>
          <h2>Founder & CEO</h2>
          <p className={expandedSameer ? "expanded" : ""}>
            Sameer is a <span>5-time award-winning PR professional in India</span> and a <span>2-time TEDx speaker</span>, recognized as one of the brightest minds in modern PR. His work has been <span>featured in global media outlets</span> such as Gulf News and Business Standard.<br/><br/>
            Starting his journey at just <span>16 years old</span>, Sameer has since worked with over <span>2,000 clients globally</span>, helping build multiple brands from <span>zero to 7 figures</span>. With a <span>strong network in public relations and marketing frameworks</span>, he specializes in <span>brand strategy, reputation building, and founder positioning</span>. His ability to blend storytelling with measurable growth makes him one of India’s most trusted PR professionals.
          </p>

          <button
            className="readmore-btn"
            onClick={() => setExpandedSameer(prev => !prev)}
            aria-expanded={expandedSameer}
            aria-controls="sameer-desc"
          >
            {expandedSameer ? "Read less" : "Read more"}
          </button>
        </div>
      </div>

      {/* Anurag */}
      <div className="cofounder-two cofounder-One">
        <div className="cofounderOne-Des twoDes">
          <h1>Anurag Dangi</h1>
          <h2>Co-Founder & AI Business Mentor</h2>
          <p className={expandedAnurag ? "expanded" : ""}>
            Anurag is a renowned <span>AI and business mentor</span> who has trained more than <span>1.5 lakh people</span> across India and delivered over <span>500 seminars</span> on AI, business mentorship, and branding. He is a <span>TEDx and Josh Talks speaker, a YouTube creator with millions of views, and the author of books on AI and startups</span>.<br/><br/>
            His expertise lies in merging technology with business growth, helping entrepreneurs and professionals harness AI to scale their ventures. With a proven track record in mentorship, digital influence, and brand building, Anurag brings unmatched authority to <span>AI-powered branding and PR innovation</span>.
          </p>

          <button
            className="readmore-btn"
            onClick={() => setExpandedAnurag(prev => !prev)}
            aria-expanded={expandedAnurag}
            aria-controls="anurag-desc"
          >
            {expandedAnurag ? "Read less" : "Read more"}
          </button>
        </div>

        <img className="cofounder-Img2" src={anurag} alt="Anurag Dangi" />
      </div>
    </div>
  );
}
