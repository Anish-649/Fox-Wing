import "./contactbtn.css";
import { Link as RouterLink } from "react-router-dom";

export default function Contactbtn() {
  return (
    <div className='contactbtn'>
        <RouterLink to="/contact">
                  <button>Get in Touch</button>
                </RouterLink>
        
      
    </div>
  )
}
