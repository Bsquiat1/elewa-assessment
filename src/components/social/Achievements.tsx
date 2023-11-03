import React from 'react';

// Define the type for the component's props (empty in this case).
type Props = {};

// Data for achievements to be displayed.
const achievements = [
  { title: 'People trained', value: '733+' },
  { title: 'Careers launched', value: '733k' },
  { title: 'Projects finished', value: '200+' },
  { title: 'Investors', value: '56' },
];

/**
 * Achievements Component
 *
 * This component displays a set of achievements in a grid format.
 *
 * @param {Props} props - The properties for the Achievements component (none in this case).
 */
const Achievements = (props: Props) => {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-4 gap-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center mt-20 mb-20">
            <h2 className="text-6xl font-normal text-white mb-8">{achievement.value}</h2>
            <p className="text-4xl font-semibold text-white">{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
