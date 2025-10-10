import "./events.css"
import event1 from "../../assets/event/event1.png";
import event2 from "../../assets/event/event2.png"
import event3 from "../../assets/event/event3.JPG"
import event4 from "../../assets/event/event4.jpg"
import event5 from "../../assets/event/event5.jpg"
import event6 from "../../assets/event/event6.png"
import event7 from "../../assets/event/event7.jpg"
// import event8 from "../../assets/event/event8.DNG"
import event9 from "../../assets/event/event9.png"
import event10 from "../../assets/event/event10.png"
import event11 from "../../assets/event/event11.jpg"

export default function Event() {
   
    const images = [
    event1,event2,event3,event4,event5,event6,event7,event10
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
           <img src={img} alt={`card-${i}`}/>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
