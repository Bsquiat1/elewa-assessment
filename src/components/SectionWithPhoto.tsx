import React, { FC } from 'react';

interface SectionWithPhotoProps {
  backgroundColor: string;
  imageUrl: string;
  title: string;
  description: string;
  photoPosition: 'left' | 'right' | 'bottom';
  textColor: string;
}

const SectionWithPhoto: FC<SectionWithPhotoProps> = ({
  backgroundColor,
  imageUrl,
  title,
  description,
  photoPosition,
  textColor,
}) => {
  const isPhotoOnLeft = photoPosition === 'left';

  return (
    <div className={`new-section ${backgroundColor} p-8 rounded-b-3xl`}>
      <div className="container mx-auto flex items-center justify-center ">
        {isPhotoOnLeft && (
          <div className="w-1/2">
            <img src={imageUrl} alt="Your Photo" className="w-full rounded-3xl" />
          </div>
        )}
         <div className="w-1/2 m-40" style={{ color: textColor }}>
          <h2 className="text-5xl font-normal">{title}</h2>
          <p className="text-4xl font-thin mt-20">{description}</p>
        </div>
        {!isPhotoOnLeft && (
          <div className="w-1/2">
            <img src={imageUrl} alt="Your Photo" className="w-full rounded-3xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWithPhoto;
