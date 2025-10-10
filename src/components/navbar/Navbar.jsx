import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logoPic" src="" alt="stylesheet" />
      <ul>
        <li>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="presence"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Our Presence
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="Team"
            smooth={true}
            duration={500}
            spy={true}
            offset={0}
          >
            Our Team
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="testimonial"
            smooth={true}
            duration={500}
            spy={true}
            offset={-10}
          >
            Testimonial
          </ScrollLink>
        </li>
      </ul>

      {/* Contact Button */}
      <div className="navbar_btn">
        <RouterLink to="/contact">
          <button>Contact Us</button>
        </RouterLink>
      </div>
    </div>
  );
};

export default Navbar;
