import React, { useState, FC } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Button from '../Button';

const Directions: FC = () => {
  const [isArrowAnimated, setIsArrowAnimated] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setIsArrowAnimated(!isArrowAnimated);
  };

  return (
    <VisibilitySensor onChange={(isVisible: boolean) => setVisible(isVisible)} partialVisibility={true}>
      <div className={`get-there-section bg-gray-100 ${visible ? 'animate-scroll-up' : ''}`}>
        <div className="flex">
          <div className="w-1/2 pr-4 mt-64 ml-28">
            <img src="/src/assets/map.png" alt="Map" className="w-auto h-full ml-36" />
          </div>
          <div className="w-1/2 pl-4 mt-48 mr-28">
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
              <Button text="Get Directions" isAnimated={isArrowAnimated} onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Directions;
