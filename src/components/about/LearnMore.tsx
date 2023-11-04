import React, { FC, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

/**
 * Props for the LearnMoreSection component.
 */
interface LearnMoreSectionProps {
  title: string;    // The main title of the LearnMoreSection.
  subtitle: string; // The subtitle or additional text for the LearnMoreSection.
}

/**
 * LearnMoreSection Component
 *
 * This component represents a section that encourages users to learn more about a topic or feature.
 * It typically includes a main title and a subtitle.
 *
 * @param {LearnMoreSectionProps} props - The properties for the LearnMoreSection.
 * @param {string} props.title - The main title of the LearnMoreSection.
 * @param {string} props.subtitle - The subtitle or additional text for the LearnMoreSection.
 */
const LearnMoreSection: FC<LearnMoreSectionProps> = ({ title, subtitle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(isVisible: boolean) => setVisible(isVisible)} partialVisibility={true}>
      <div className={`mt-44 mb-44 ${visible ? 'animate-scroll-up' : ''}`}>
        <h2 className="text-7xl font-normal text-center">{title}</h2>
        <h3 className="text-7xl font-bold text-center">{subtitle}</h3>
      </div>
    </VisibilitySensor>
  );
};

export default LearnMoreSection;
