import React from 'react';
import { ArrowRight, Users, Zap, Star } from 'lucide-react';
import '../style/HeroSection.css';

const HeroSection = () => {

  return (
    <div className='hero' >
      <h1>Build Your <span>Dream Portfolio</span> </h1>
      <p>
        Create stunning, professional portfolios in minutes. No coding required.
        Stand out from the crowd with beautiful designs that showcase your work.
      </p>
      <div className='hero-buttons'>
        <button className='btn' >Start Building Free <ArrowRight style={{ size: "2rem" }} /> </button>
        <button className='btn btn2'>Explore Templates </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: "50px", marginTop: "2rem" }}>
        <div className="rating">
          <Star style={{ color: "yellow", fill: "yellow", paddingTop: "5px" }} />
          <p style={{ fontWeight: "400", margin: "0", padding: "0" }}>4.9/5 Rating</p>
        </div>
        <div className="rating">
          <Users style={{ color: "rgba(255, 255, 255, 0.8)", fill: "transparent", paddingTop: "5px" }} />
          <p style={{ fontWeight: "400", margin: "0", padding: "0" }}>50K+ Users</p>
        </div>
        <div className="rating">
          <Zap style={{ color: "rgba(255, 255, 255, 0.8)", fill: "transparent", paddingTop: "5px" }} />
          <p style={{ fontWeight: "400", margin: "0", padding: "0" }}>Lightning Fast</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
