import React from 'react';

const imageUrls = [
  'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png',
  'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png',
  'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png',
  'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png',


  
];

const SlidingIconsSection = () => {
  return (
    <div className="sliding-icons-section">
      <h2 className="text-center text-6xl mt-28 mb-20">Some of our impact projects</h2>
      <div className="slider">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="slide">
            <img
              src={imageUrl}
              alt={`Icon ${index + 1}`}
              className="h-28" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingIconsSection;
