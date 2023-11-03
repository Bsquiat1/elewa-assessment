import React, { FC, useRef } from 'react';
import teamMembers from './TeamMembers';

interface TeamMember {
  name: string;
  image: string;
  position: string;
}

const Team: FC = () => {
  const imageGalleryRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollLeft -= 300; 
    }
  };

  const scrollRight = () => {
    if (imageGalleryRef.current) {
      imageGalleryRef.current.scrollLeft += 300; 
    }
  };

  return (
    <div className="horizontal-scroll-section bg-black p-4 mt-32">
      <h2 className="text-6xl font-md text-left text-white mt-28 mb-20 ml-20">
        Team | <span className="text-gray-400">Management</span>
      </h2>

      <div className="image-gallery flex overflow-x-hidden p-4" ref={imageGalleryRef}>
        {teamMembers.map((member: TeamMember, index: number) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="max-w-md p-4 rounded-xl" />
            <p className="text-3xl font-md text-center mb-2 text-white">{member.name}</p>
            <p className="text-xl text-center text-white">{member.position}</p>
          </div>
        ))}
      </div>

      <div className="scroll-arrows flex justify-end mt-4 pr-4 mb-20">
        <div className="arrow-circle bg-black p-2 rounded-full mr-2 border">
          <div className="left-arrow text-3xl cursor-pointer text-white" onClick={scrollLeft}>
            &#8592;
          </div>
        </div>
        <div className="arrow-circle bg-black p-2 rounded-full border">
          <div className="right-arrow text-3xl cursor-pointer text-white" onClick={scrollRight}>
            &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
