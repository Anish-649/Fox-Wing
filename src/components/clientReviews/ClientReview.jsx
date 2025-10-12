
import './ClientReview.css';
import ReviewCard from '../reviewCard/ReviewCard';
export default function ClientReview() {
    
   
 const reviews = [
  {
    text: "Working with Sameer Satyarth has been a turning point for our digital presence. His PR strategies and branding expertise helped me establish authority in the US tech space.",
    name: "John Matthews",
    title: "Founder & CEO, NovaSphere Technologies (USA)",
    color: "#FFA07A", // light salmon
  },
  {
    text: "Fox Wing Media, under the leadership of Sameer Satyarth, transformed my personal brand. Their approach was structured, impactful, and delivered international recognition across the Middle East.",
    name: "Ayesha Al Farsi",
    title: "Founder, LuxeAura FZC (UAE)",
    color: "#B0C4DE", // light steel blue
  },
  {
    text: "Sameer’s ability to scale brands through storytelling and strategy is unmatched. Our founder branding campaign led by Fox Wing Media positioned us among the top players in our niche.",
    name: "David Carter",
    title: "Co-Founder, Zenith Growth Labs (USA)",
    color: "#66CDAA", // medium aquamarine
  },
  {
    text: "I’ve worked with many agencies, but Fox Wing Media stands out for its professionalism and results. Sameer personally guided the entire PR strategy, helping us expand our brand globally.",
    name: "Fatima Khan",
    title: "CEO, Glimmer Beauty International (UAE)",
    color: "#FFF8DC", // cornsilk (soft gold tone)
  },
  {
    text: "Sameer Satyarth helped craft my personal narrative in a way that resonated deeply with our target audience. His PR campaigns through Fox Wing Media gave us global visibility.",
    name: "Michael Ross",
    title: "Founder & CEO, GrowthSphere Inc. (USA)",
    color: "#ADD8E6", // light blue
  },
  {
    text: "Our collaboration with Fox Wing Media was seamless. Sameer and his team understood our goals clearly and delivered a powerful personal branding strategy that positioned me as a thought leader.",
    name: "Reem Al Mansoori",
    title: "Managing Director, VisionEdge Group (UAE)",
    color: "#FFB6C1", // light pink
  },
  {
    text: "Sameer Satyarth knows how to take a story and turn it into influence. His deep understanding of media, positioning, and reputation building helped me scale my personal brand effectively.",
    name: "William Harris",
    title: "Founder, BrandLift Agency (USA)",
    color: "#98FB98", // pale green
  },
  {
    text: "Fox Wing Media executed a flawless PR and branding campaign for me. Sameer’s insights and strategies gave my profile strong digital authority across multiple platforms.",
    name: "Sara Al Qasimi",
    title: "Co-Founder, Elevate Retail (UAE)",
    color: "#FFDAB9", // peach puff
  },
  {
    text: "Sameer’s expertise is rare. He not only amplified my personal brand but also ensured that Fox Wing Media’s strategies aligned with my long-term vision. The growth was measurable and strategic.",
    name: "Jennifer Lee",
    title: "CEO, Insight Innovations (USA)",
    color: "#D8BFD8", // thistle (soft violet)
  },
  {
    text: "Partnering with Fox Wing Media and Sameer Satyarth was one of the best business decisions I made. Their personal branding and PR framework positioned me as a recognized voice in my industry.",
    name: "Omar Al Rahmani",
    title: "Founder, FutureBridge Consulting (UAE)",
    color: "#AFEEEE", // pale turquoise
  },
];


 
    return (
      <section id="testimonial"className="reviews-section">
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
