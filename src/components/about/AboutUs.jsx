import React from 'react';
import Navbar from '../Navbar';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import OurHistory from './OurHistory';
import Directions from './Directions';
import Values from './Values';
import Team from './Team';
import Care from './Care';
import HeroSection from '../HeroSection';


const AboutUs = () => {
 

 
  
  return (
    <div className="about-us">
       <HeroSection
          backgroundImage="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg"
          title="HOW TO RECOGNIZE AN ELEWA MEMBER"
          subtitle="Dependable, Creative, Supportive,"
          description="Open Minded and Fun*"
       />
       <Care />
       <Team />
       <Values />
       <Directions />
       <OurHistory />
    </div>
    
  );
};

export default AboutUs;
