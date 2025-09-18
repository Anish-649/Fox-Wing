import "./gradientLine.css"

export default function GradientLine() {
  return (
    <div className='gradientLine'>
        <div className="gradientlin">
       <svg
      viewBox="0 0 1200 100"
      xmlns="http://www.w3.org/2000/svg"
      >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff5f6d" />   {/* Pink/Red */}
          <stop offset="50%" stopColor="#a54fff" />  {/* Purple */}
          <stop offset="100%" stopColor="#010101" /> {/* Dark */}
        </linearGradient>
      </defs>

      {/* Wavy Path */}
      <path
         d="M -60 10 Q 190 90, 500 50 T 1300 100"
        stroke="url(#gradient)"
        strokeWidth="6"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
    </div>
    </div>
  )
}
