
import './ClientReview.css';
import ReviewCard from '../reviewCard/ReviewCard';
export default function ClientReview() {
    
    const reviews = [
      {
        text: "The I2D team stands out among web design companies for their deep expertise...",
        name: "Jessica Williams",
        title: "Operations Manager, Christchurch Hospitality Group",
        color: "#FFD700",
      },
      {
        text: "I had an amazing experience working with I2D for website design and SEO...",
        name: "Mark Johnson",
        title: "Founder, Startup Inc.",
        color: "#87CEFA",
      },
      {
        text: "Highly recommend I2D for modern web development and fast results!",
        name: "Lisa Brown",
        title: "Marketing Head, BlueWave Media",
        color: "#FFB6C1"
      },
    ];
 
    return (
      <section className="reviews-section">
        <h2>
          What our <span>clients</span> say
        </h2>

        <div className="reviews-stack">
          {reviews.map((r, i) => (
            <div
              className="stack-item"
              key={i}
              style={{ zIndex: reviews.length + i }}
            >
              <ReviewCard {...r}  />
            </div>
          ))}
        </div>
      </section>
    );
}
