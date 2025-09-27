import "./founderCurveline.css"

export default function FounderCurveline() {
  return (
     <div className='gradientLine1'>
       
       <svg
      viewBox="0 0 1200 80"
      xmlns="http://www.w3.org/2000/svg"
      >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff5f6d" />   {/* Pink/Red */}
          <stop offset="50%" stopColor="#fccb06" />  {/* Purple */}
          <stop offset="100%" stopColor="#010101" /> {/* Dark */}
        </linearGradient>
      </defs>

      {/* Wavy Path */}
      <path
         d="M -40 0 Q 190 90, 500 50 T 1300 100"
        stroke="url(#gradient1)"
        strokeWidth="6"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
    
    </div>
     
  )
}
