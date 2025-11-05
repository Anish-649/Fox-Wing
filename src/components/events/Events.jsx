import "./events.css"
import { useState, useEffect } from "react";

import event1 from "../../assets/event/event1.webp";
import event2 from "../../assets/event/event2.webp";
import event3 from "../../assets/event/event3.webp";
import event4 from "../../assets/event/event4.webp";
import event5 from "../../assets/event/event5.webp";
import event13 from "../../assets/event/event13.jpg";
import event7 from "../../assets/event/event7.webp";
import event10 from "../../assets/event/event10.webp";

export default function Event() {

  const [showMoreGallery, setShowMoreGallery] = useState(false);
  const [showMoreAwards, setShowMoreAwards] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 790);

  // Update width on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 790);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const galleryImages = [event1, event2, event3, event5, event10];
  const awardImages = [event13, event4, event7];

  const galleryToShow = isMobile && !showMoreGallery ? galleryImages.slice(0, 2) : galleryImages;
  const awardsToShow = isMobile && !showMoreAwards ? awardImages.slice(0, 2) : awardImages;

  return (
    <div className='event'>
      
      {/* GALLERY */}
      <h1 className="event-heading">Gallery</h1>
      <div className="cards-container">
        {galleryToShow.map((img, i) => (
          <div key={i} className={`hanger ${i % 2 === 0 ? "up" : "down"}`}>
            <div className="dot"></div>
            <div className="line"></div>
            <div className="card">
              <img src={img} alt={`gallery-${i}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <button className="view-more-btn" onClick={() => setShowMoreGallery(prev => !prev)}>
          {showMoreGallery ? "(View Less)" : "(View More)"}
        </button>
      )}

      {/* AWARDS */}
      <h1 className="event-heading">Awards</h1>
      <div className="cards-container">
        {awardsToShow.map((img, i) => (
          <div key={i} className={`hanger ${i % 2 === 0 ? "up" : "down"}`}>
            <div className="dot"></div>
            <div className="line"></div>
            <div className="card">
              <img src={img} alt={`award-${i}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <button className="view-more-btn" onClick={() => setShowMoreAwards(prev => !prev)}>
          {showMoreAwards ? "(View Less)" : "(View More)"}
        </button>
      )}

    </div>
  );
}
