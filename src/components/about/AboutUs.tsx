import React from 'react';

import OurHistory from './OurHistory';
import Directions from './Directions';
import Values from './Values';
import Team from './Team';
import Care from './Care';
import HeroSection from '../HeroSection';
import LearnMore from './LearnMore';
import Footer from '../Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <HeroSection
        backgroundImage="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg"
        title="HOW TO RECOGNIZE AN ELEWA MEMBER"
        subtitle="Dependable, Creative, Supportive,"
        description="Open Minded and Fun*"
        info="*SERIOUS WHEN IT MATTERS"
      />
      <Care />
      <Team />
      <Values />
      <Directions />
      <OurHistory />
      <LearnMore
  title="Learn more about"
  subtitle="Elewa's social impact."
 
/>

      <Footer />
    </div>
  );
};

export default AboutUs;
