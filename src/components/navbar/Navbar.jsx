import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logoPic' src="" alt="stylesheet"/>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Testimonial</li>
        <li>Our Presence</li>
       <li>Our Team</li>
      </ul>

      {/* Contact Button */}
      <div className="navbar_btn">
        <button>Contact Us</button>
      </div>
  </div>
  );
};

export default Navbar;
