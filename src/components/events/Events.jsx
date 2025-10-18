import "./events.css"
import event1 from "../../assets/event/event1.webp";
import event2 from "../../assets/event/event2.webp"
import event3 from "../../assets/event/event3.webp"
import event4 from "../../assets/event/event4.webp"
import event5 from "../../assets/event/event5.webp"
import event6 from "../../assets/event/event6.webp"
import event7 from "../../assets/event/event7.webp"

import event10 from "../../assets/event/event10.webp"


export default function Event() {
   
    const images = [
    event1,event2,event3,event4,event5,event7,event10
  ];
  return (
    <div className='event'>
      <h1 className="event-heading">Event</h1>
      <div className="cards-container">
      {images.map((img, i) => (
        <div
          key={i}
          className={`hanger ${i % 2 === 0 ? "up" : "down"}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="dot"></div>
          <div className="line"></div>
          <div className="card">
           <img src={img} alt={`card-${i}`} loading="lazy"/>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
