import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu
import logo from "../../assets/logo.webp";
import "./navbar.css";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="navbar">
      <img className="logoPic" src={logo} alt="logo" />
        <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`off-screen-menu ${isOpen ? "active" : ""}`}>
       <ul >
        <li>
          <ScrollLink to="hero" smooth duration={500} spy offset={0} onClick={handleClose}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="presence" smooth duration={500} spy offset={0} onClick={handleClose}>
            Our Presence
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="service" smooth duration={500} spy offset={0} onClick={handleClose}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="Team" smooth duration={500} spy offset={0} onClick={handleClose}>
            Our Team
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonial" smooth duration={500} spy offset={-10} onClick={handleClose}>
            Testimonial
          </ScrollLink>
        </li>

       
      </ul>
</div>
      {/* Contact Button (desktop only) */}
      <div className="navbar_btn">
        <RouterLink to="/contact">
          <button>Contact Us</button>
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
