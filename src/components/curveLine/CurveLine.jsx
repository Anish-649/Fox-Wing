import "./curveLine.css"

export default function CurveLine() {
  return (
    <div className='curveLine'>
      <svg viewBox="0 50 1200 83" className="curve">
  <path 
    d="M0,30 Q600,170 1200,30" 
    stroke="url(#grad)" 
    strokeWidth="6" 
    //  strokeLinecap="round"  
    fill="transparent" />
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="transparent" />
      <stop offset="50%" stopColor="white" />
      <stop offset="100%" stopColor="transparent" />
    </linearGradient>
  </defs>
</svg>

    </div>
  )
}
