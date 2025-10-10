
import "./Footer.css";
import {Link} from "react-scroll";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaArrowUp,
  FaXTwitter
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h2 className="footer-logo">
            <Link to="hero" smooth={true} duration={500} spy={true} offset={0}>
              FOX WING
            </Link>
          </h2>
          <p className="footer-description">
            Let's Transform Your Digital Presence with India's Leading PR
            Company.
          </p>

          <div className="footer-socials">
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>

          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp /> BACK TO TOP
          </button>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Site Map</h4>
            <ul>
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-10}
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  to="presence"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                >
                  Our Presence
                </Link>
              </li>
              <li>
                <Link
                  to="Team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={0}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Services</a>
              </li>
              <li>
                <a href="#">Lawyer’s Corners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright {new Date().getFullYear()}, foxwing, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
