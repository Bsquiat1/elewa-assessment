import React from 'react';
import Navbar from './Navbar';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {

  const imageGalleryRef = useRef(null);

  const scrollLeft = () => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const teamMembers = [
    {
      name: 'Zippie Ntabo',
      position: 'Office Administrator & Finance',
      image: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg',
    },
    {
      name: 'Kennedy Adhola',
      position: 'Operations & Partnerships',
      image: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg',
    },
    {
      name: 'Peter Reinartz',
      position: 'Executive Chairman',
      image: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg',
    },
    {
      name: 'Noella Mwanzia',
      position: 'Software Engineer',
      image: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg',
    },
    {
      name: 'Ian Odhiambo',
      position: 'Founder Kujali',
      image: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg',
    },

  ];

  return (
    <div className="about-us">
      <div className="hero-section-container">
        <div
          className="hero-section bg-cover bg-center text-white text-left py-48"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg')",
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
            <h1 className="text-3xl text-white mb-8 ml-20">HOW TO RECOGNIZE AN ELEWA MEMBER</h1>
          <p className="text-7xl font-sm ml-20 mb-2">Dependable, Creative, Supportive, </p>
          <p className="text-7xl font-sm ml-20">Open Minded and Fun*</p>
          <p className="text-lg font-sm ml-20 mt-52">*SERIOUS WHEN IT MATTERS</p>
          </div> 
          </div>

          
          
        
        </div>  
        <div className="additional-section">
        <h2 className="text-7xl font-bold mt-36 ml-20">We Care!</h2>
        <div className="flex ml-20 mt-10">
          <p className="text-4xl text-left mr-10">
            Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us.
          </p>
          <p className="text-4xl text-left">
            Our investments are therefore not limited to internal ones but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.
          </p>
        </div>
        <div className="flex ml-20 mt-20 mb-48">
          <div className="content-item">
            <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png" alt="Holistic Solutions" className="h-28" />
            <h2 className="text-4xl font-sm mt-10">Holistic Solutions</h2>
            <p className="text-xl mt-4">We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
          </div>
          <div className="content-item">
            <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png" alt="Impact" className="h-28"/>
            <h2 className="text-4xl font-sm mt-10">Impact</h2>
            <p className="text-xl mt-4">Impact as a direct or indirect result. All our respective organizations have underlying theories of change.</p>
          </div>
          <div className="content-item">
            <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png" alt="Open Data" className="h-28"/>
            <h2 className="text-4xl font-sm mt-10">Open Data</h2>
            <p className="text-xl mt-4">Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="horizontal-scroll-section bg-black p-4 mt-20 mb-20 ">
    <h2 className="text-4xl font-bold text-center mb-6">Team | Management</h2>
        
        <div className="image-gallery flex overflow-x-hidden p-4" ref={imageGalleryRef}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img
                src={member.image}
                alt={member.name}
                className="max-w-md p-4 rounded-xl"
              />
              <p className="text-3xl font-md text-center mb-2 text-white">{member.name}</p>
              <p className="text-xl text-center text-white">{member.position}</p>
            </div>
          ))}
        </div>
        <div className="scroll-arrows flex justify-between mt-4">
          <div onClick={scrollLeft}>
            <i className="fas fa-chevron-left text-3xl text-blue-500"></i>
          </div>
          <div onClick={scrollRight}>
            <i className="fas fa-chevron-right text-3xl text-blue-500"></i>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
