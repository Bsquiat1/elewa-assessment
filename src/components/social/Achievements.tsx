import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

type Props = {};

const achievements = [
  { title: 'People trained', value: '733+' },
  { title: 'Careers launched', value: '733k' },
  { title: 'Projects finished', value: '200+' },
  { title: 'Investors', value: '56' },
];

const Achievements = (props: Props) => {
  const [visible, setVisible] = useState(false);

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <div className="bg-black">
      <div className="grid grid-cols-4 gap-2">
        {achievements.map((achievement, index) => (
          <VisibilitySensor
            key={index}
            onChange={handleVisibilityChange}
            partialVisibility={true}
          >
            {({ isVisible }: { isVisible: boolean }) => (
              <div className={`text-center mt-20 mb-20 ${isVisible && visible ? 'animate-achievement' : ''}`}>
                <h2 className={`text-6xl font-normal text-white mb-8 ${isVisible && visible ? 'animate-achievement-text' : ''}`}>{isVisible && visible ? achievement.value : ' '}</h2>
                <p className="text-4xl font-semibold text-white">{achievement.title}</p>
              </div>
            )}
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
