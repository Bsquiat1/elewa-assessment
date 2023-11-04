import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// Key figures data
const keyFigures = [
  { label: 'Approx. number of Kenyan talents reaching the age of 18 in 2022', value: '1.3M' },
  { label: 'Number of East-Africans (EAC) reaching the age of 18 in 2022', value: '5M' },
  { label: 'Democratic Republic of Congo joins the East African Community', value: '2022' },
  { label: 'The number of unfilled IT vacancies in the US and EU markets', value: '1.5M' },
  { label: 'Number of technical vacancies by 2030', value: '10M' },
  { label: 'Africa holds the world\'s largest workforce', value: '2050' },
  { label: 'Startup funding raised by African startups in 2022', value: '$4.6M' },
  { label: 'Increase in startup funding for companies with HQ in Kenya', value: '310%' },
];

/**
 * KeyFiguresSection Component
 *
 * This component displays a section of key figures with scroll-based animations using VisibilitySensor.
 * Each key figure becomes animated when it is scrolled into the viewport.
 */
const KeyFiguresSection = () => {
  // State to track visibility of each key figure
  const [visible, setVisible] = useState(Array(keyFigures.length).fill(false));

  /**
   * Callback function to handle visibility change of a key figure.
   *
   * @param {number} index - Index of the key figure.
   * @param {boolean} isVisible - Indicates whether the key figure is currently visible in the viewport.
   */
  const handleVisibilityChange = (index: number, isVisible: boolean) => {
    const newVisible = [...visible];
    newVisible[index] = isVisible;
    setVisible(newVisible);
  };

  return (
    <div className="key-figures-section">
      <h2 className="text-center text-7xl mt-28 mb-28">Key figures</h2>
      <div className="grid grid-cols-4">
        {keyFigures.map((figure, index) => (
          <VisibilitySensor
            key={index}
            onChange={(isVisible: boolean) => handleVisibilityChange(index, isVisible)}
          >
            <div className={`p-20 rounded-lg border border-black ${visible[index] ? 'animate-scroll-up' : ''}`}>
              <p className="text-7xl text-center font-bold mb-8">{figure.value}</p>
              <h2 className="text-3xl text-center">{figure.label}</h2>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
};

export default KeyFiguresSection;
