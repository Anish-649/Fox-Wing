import Reveal from "../../Reveal";
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
        <Reveal>
        <p className="services-subtitle">OUR SERVICES</p>
        </Reveal>
        <div className="public-service">
          <Reveal>
          <h2 className="services-heading">PUBLIC RELATION</h2>
          </Reveal>
          <div className="public-card">
            <Reveal>
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
                <h2>Media Buying</h2>
              </div>
              
            </div>
            </Reveal>
            <Reveal>
            <div className="separaterow">
              <div className="public-card-component">
                <h1>04</h1>
                <h2>Influencer Marketing</h2>
              </div>
              <div className="public-card-component">
                <h1>05</h1>
                <h2>Seeking Opportunities</h2>
              </div>
              <div className="public-card-component">
                <h1>06</h1>
                <h2>Founders Personal Branding</h2>
              </div>
              <div className="public-card-component">
                <h1>07</h1>
                <h2>Print & E-Magazines</h2>
              </div>
            </div>
            </Reveal>
          </div>



        </div>
        <div className="marketing-service">
          <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
        
      </div>
      <Reveal>
          <h1 className="marketing-heading">Marketing Services </h1>
          <GradientLine/>
          </Reveal>
          <div className="public-card">
            <Reveal>
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
             </Reveal>
             <Reveal>
            <div className="separaterow marketrow">
              <div className="public-card-component">
                <h1>03</h1>
                <h2>Branding</h2>
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
            </Reveal>
          </div>
        </div>
      </div>
     
    </div>
     </>
  );
 
}
