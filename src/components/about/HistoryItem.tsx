import React, { FC, ReactNode } from 'react';

/**
 * Props for the HistoryItem component.
 */
interface HistoryItemProps {
  year: string;       // The year associated with the history item.
  title: string;      // The title of the history item.
  children: ReactNode; // The content of the history item .
}

/**
 * HistoryItem Component
 *
 * This component represents an individual historical item with a year, title, and content.
 *
 * @param {HistoryItemProps} props - The properties for the HistoryItem.
 * @param {string} props.year - The year associated with the history item.
 * @param {string} props.title - The title of the history item.
 * @param {ReactNode} props.children - The content of the history item .
 */
const HistoryItem: FC<HistoryItemProps> = ({ year, title, children }) => {
  return (
    <div className="w-1/4 relative">
      <div className="w-12 h-12 bg-black rounded-full mb-20 ml-20"></div>
      <div className="ml-20">
        <div className="text-2xl font-normal mb-2">{year}</div>
        <h2 className="font-bold text-3xl mt-10">{title}</h2>
        <p className="mt-10 text-lg">{children}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
