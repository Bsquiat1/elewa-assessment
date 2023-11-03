import React, { FC } from 'react';

interface BottomPhotoProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BottomPhoto: FC<BottomPhotoProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="section-container bg-gray-100 p-8 rounded-b-3xl">
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
  );
};

export default BottomPhoto;
