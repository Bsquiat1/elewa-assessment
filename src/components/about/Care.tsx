import React, { FC } from 'react';

// Define the props for the ContentItem component
interface ContentItemProps {
  imageSrc: string;      // The source URL of the image.
  title: string;         // The title of the item.
  description: string;   // The description of the item.
}

/**
 * ContentItem Component
 *
 * This component displays an item with an image, title, and description.
 *
 * @param {ContentItemProps} props - The properties for the ContentItem.
 * @param {string} props.imageSrc - The source URL of the image.
 * @param {string} props.title - The title of the item.
 * @param {string} props.description - The description of the item.
 */
const ContentItem: FC<ContentItemProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="content-item">
      <img src={imageSrc} alt={title} className="h-28" />
      <h2 className="text-4xl font-sm mt-10">{title}</h2>
      <p className="text-xl mt-4">{description}</p>
    </div>
  );
};

/**
 * Care Component
 *
 * This component displays information about Elewa's care initiatives.
 * It includes a title and paragraphs of text, as well as multiple ContentItem components.
 */
const Care: FC = () => {
  return (
    <div className="additional-section">
      <h2 className="text-7xl font-bold mt-36 ml-20">We Care!</h2>
      <div className="flex ml-20 mt-10">
        <p className="text-4xl text-left mr-10">
          Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us.
        </p>
        <p className="text-4xl text-left">
          Our investments are therefore not limited to internal ones but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.
        </p>
      </div>
      <div className="flex ml-20 mt-20 mb-48">
        {/* Usage of ContentItem with specific data */}
        <ContentItem
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png"
          title="Holistic Solutions"
          description="We go beyond a simple patch-up but develop lasting solutions through holistic design."
        />
        <ContentItem
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"
          title="Impact"
          description="Impact as a direct or indirect result. All our respective organizations have underlying theories of change."
        />
        <ContentItem
          imageSrc="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png"
          title="Open Data"
          description="Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects."
        />
      </div>
    </div>
  );
};

export default Care;
