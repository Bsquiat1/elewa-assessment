import React, { useState, FC } from 'react'; // Import necessary modules and components from React.
import VisibilitySensor from 'react-visibility-sensor'; // Import the VisibilitySensor component.
import Button from '../Button'; // Import a custom Button component.

const Directions: FC = () => {
  const [isArrowAnimated, setIsArrowAnimated] = useState<boolean>(false); // Defined a state variable for controlling animation.
  const [visible, setVisible] = useState(false); // Defined a state variable to track visibility.

  const handleClick = () => {
    setIsArrowAnimated(!isArrowAnimated); // Toggle the state variable to control animation.
  };

  return (
    <VisibilitySensor onChange={(isVisible: boolean) => setVisible(isVisible)} partialVisibility={true}>
      {/* Use the VisibilitySensor component to detect when this section is partially visible on the screen. */}
      <div className={`get-there-section bg-gray-100 ${visible ? 'animate-scroll-up' : ''}`}>
      
        <div className="flex">
          <div className="w-1/2 pr-4 mt-64 ml-28">
            <img src="/src/assets/map.png" alt="Map" className="w-auto h-full ml-36" />
            {/* Display an image with some styling. */}
          </div>
          <div className="w-1/2 pl-4 mt-48 mr-28">
            <h2 className="text-6xl font-normal text-left mb-10 mt-20 ml-20">How to get there</h2>
            {/* Display a heading with text and styling. */}
            <p className="text-2xl font-normal ml-20 mb-4">
              Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.
            </p>
            <p className="text-2xl font-normal ml-20 mb-4">
              Not in town? Teams, Meets, or Zoom are our second name. Book an appointment today via contact@elewa.ke!
            </p>
            <p className="text-2xl font-normal ml-20 mb-4">
              Get directions
            </p>
            {/* Display paragraphs of text with styling. */}
            <div>
              <Button text="Get Directions" isAnimated={isArrowAnimated} onClick={handleClick} />
              {/* Render a custom Button component with text and animation based on the isArrowAnimated state. */}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Directions;
