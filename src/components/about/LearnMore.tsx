import React, { FC } from 'react';

interface LearnMoreSectionProps {
  title: string;
  subtitle: string;

}

const LearnMoreSection: FC<LearnMoreSectionProps> = ({ title, subtitle }) => {
  return (
    <div className={`mt-44 mb-44`}>
      <h2 className="text-7xl font-normal text-center">{title}</h2>
      <h3 className="text-7xl font-bold text-center">{subtitle}</h3>
    </div>
  );
};

export default LearnMoreSection;
