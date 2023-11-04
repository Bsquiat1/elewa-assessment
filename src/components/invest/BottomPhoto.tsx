import React, { FC, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/**
 * Props for the BottomPhoto component.
 */
interface BottomPhotoProps {
  title: string;       // The title for the bottom photo section.
  description: string; // A description or additional text for the section.
  imageUrl: string;    // The URL of the image to display in the section.
}

/**
 * BottomPhoto Component
 *
 * This component represents a section with a title, description, and an image displayed at the bottom.
 *
 * @param {BottomPhotoProps} props - The properties for the BottomPhoto.
 * @param {string} props.title - The title for the section.
 * @param {string} props.description - A description or additional text for the section.
 * @param {string} props.imageUrl - The URL of the image to display in the section.
 */
const BottomPhoto: FC<BottomPhotoProps> = ({ title, description, imageUrl }) => {
  const [visible, setVisible] = useState(false);

  /**
   * Callback function to handle visibility change of the component.
   * When the component becomes visible in the viewport, it updates the `visible` state.
   *
   * @param {boolean} isVisible - Indicates whether the component is currently visible in the viewport.
   */
  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      <div className={`section-container bg-gray-100 p-8 rounded-b-3xl ${visible ? 'animate-fade-in' : ''}`}>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="text-left">
            <h2 className="text-6xl font-normal mt-20">{title}</h2>
            <p className="text-4xl font-thin mt-20 mb-20">{description}</p>
          </div>
          <div className="mt-8">
            <img src={imageUrl} alt="Section Image" className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default BottomPhoto;
