import React, { FC } from 'react';
import Navbar from './Navbar';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  info: string;
}

const HeroSection: FC<HeroSectionProps> = ({ backgroundImage, title, subtitle, description, info }) => {
  return (
    <div className="hero-section-container">
      <div
        className="hero-section bg-cover bg-center text-white text-left py-48"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          height: "1080px",
          position: "relative",
        }}
      >
        <div
          className="image-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.3)",
          }}
        />
        <div className="navbar" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}>
          <Navbar />
       
        <div className="mt-96">
          <h1 className="text-3xl text-white mb-8 ml-20">{title}</h1>
          <p className="text-7xl font-sm ml-20 mb-2">{subtitle}</p>
          <p className="text-7xl font-sm ml-20">{description}</p>
          <p className="text-lg font-sm ml-20 mt-52">{info}</p>
        </div> 
      </div>
    </div> 
    </div>
  );
};

export default HeroSection;
