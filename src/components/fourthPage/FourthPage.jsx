import GradientLine from "../gradientLine/GradientLine";
import "./fourthPage.css";
import { GridBackgroundDemo } from "./lib/GridBackgroundDemo";

export default function FourthPage() {


  return (
    <>
    
    <div id="service" className="fourthPage">
        <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
      </div>
      <div className="services">
        <p className="services-subtitle">OUR SERVICES</p>
        <div className="public-service">
          <h2 className="services-heading">PUBLIC RELATION</h2>
          <div className="public-card">
            <div className="separaterow">
              <div className="public-card-component glow-container">

                <h1>01</h1>
                <h2>Media Coverage & Relations</h2>
              </div>

              <div className="public-card-component">
                <h1>02</h1>
                <h2>Content Creation & Automation</h2>
              </div>
              <div className="public-card-component">
                <h1>03</h1>
                <h2>Paid Media & 360° PR Solutions</h2>
              </div>
            </div>
            <div className="separaterow">
              <div className="public-card-component">
                <h1>04</h1>
                <h2>Influencer Marketing</h2>
              </div>
              <div className="public-card-component">
                <h1>05</h1>
                <h2>Seeking Opportunities & Thought Leadership</h2>
              </div>
              <div className="public-card-component">
                <h1>06</h1>
                <h2>Founder & Personal Branding</h2>
              </div>
              <div className="public-card-component">
                <h1>07</h1>
                <h2>Magazines</h2>
              </div>
            </div>
          </div>



        </div>
        <div className="marketing-service">
          <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
      </div>
          <h1 className="marketing-heading">Marketing Services </h1>
          <GradientLine/>
          <div className="public-card">
            
            <div className="separaterow marketrow">
              <div className="public-card-component">

                <h1>01</h1>
                <h2>Social Media Marketing </h2>
              </div>

              <div className="public-card-component">
                <h1>02</h1>
                <h2>Search Engine optimization </h2>
              </div>
              
            </div>
            <div className="separaterow marketrow">
              <div className="public-card-component">
                <h1>03</h1>
                <h2>Web Development </h2>
              </div>
              <div className="public-card-component">
                <h1>04</h1>
                <h2>E-commerce Solutions</h2>
              </div>
              <div className="public-card-component">
                <h1>05</h1>
                <h2>Website Design And<br/>Development</h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
     </>
  );
 
}
