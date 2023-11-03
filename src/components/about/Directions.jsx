import React, { useState } from 'react';

const Directions = () => {
  const [isArrowAnimated, setIsArrowAnimated] = useState(false);

  const handleClick = () => {

    setIsArrowAnimated(!isArrowAnimated);
  };

  return (
    <div className="get-there-section bg-gray-100">
      <div className="flex">
        <div className="w-1/2 pr-4 mt-64">
          <img
            src="/src/assets/map.png"
            alt="Map"
            className="w-auto h-full ml-36"
          />
        </div>
        <div className="w-1/2 pl-4 mt-48">
          <h2 className="text-6xl font-normal text-left mb-10 mt-20 ml-20">How to get there</h2>
          <p className="text-2xl font-normal ml-20 mb-4">
            Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.
          </p>
          <p className="text-2xl font-normal ml-20 mb-4">
            Not in town? Teams, Meets, or Zoom are our second name. Book an appointment today via contact@elewa.ke!
          </p>
          <p className="text-2xl font-normal ml-20 mb-4">
            Get directions
          </p>
          <div>
            <button
              className={`bg-black text-white p-2 rounded-full ${isArrowAnimated ? 'animate-arrow' : ''} ml-20`}
              onClick={handleClick}
            >
              Get Directions
              <span className="ml-2">{isArrowAnimated ? '➡️' : '➲'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directions;
