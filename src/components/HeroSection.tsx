import React, { FC } from 'react';
import Navbar from './Navbar';

/**
 * HeroSection component.
 *
 * This component represents a hero section for a website. It typically includes a background image,
 * a title, subtitle, description, and additional information.
 */
interface HeroSectionProps {
  backgroundImage: string; // URL of the background image.
  title: string; // Title of the hero section.
  subtitle: string; // Subtitle or main message of the hero section.
  description: string; // Detailed description or content of the hero section.
  info: string; // Additional information or call to action.
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
          
        />
        <div className="navbar" >
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
