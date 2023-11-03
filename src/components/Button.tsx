import React, { FC } from 'react';

// Define the props interface for the Button component.
interface ButtonProps {
  text: string;          // The text to be displayed on the button.
  isAnimated: boolean;   // A flag to determine whether the button should have an animation.
  onClick: () => void;   // The click event handler for the button.
}

/**
 * Button Component
 *
 * This component represents a button element that can have animation based on the 'isAnimated' prop.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 */
const Button: FC<ButtonProps> = ({ text, isAnimated, onClick }) => {
  return (
    <button
      className={`bg-black text-white p-2 rounded-full ${isAnimated ? 'animate-arrow' : ''} ml-20`}
      onClick={onClick}
    >
      {text}
      <span className="ml-2">{isAnimated ? '➡️' : '➲'}</span>
    </button>
  );
};

export default Button;
