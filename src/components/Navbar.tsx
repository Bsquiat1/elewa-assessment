import React from 'react';
import { Link } from 'react-router-dom';

// Define an array of navigation links with 'to' and 'text' properties
const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/', text: 'About us' },
  { to: '/social-impact', text: 'Social impact' },
  { to: '/invest', text: 'Invest' },
  { to: '/', text: 'Venture Labs' },
  { to: '/', text: 'Brands' },
  { to: '/', text: 'Careers' },
  { to: '/', text: 'Contact' },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex border-gray-300 justify-between p-4 bg-transparent text-white h-32 border-b-2">
        <div className="flex items-center pl-28 mt-8">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
              alt="Logo"
              className="w-full h-11"
            />
          </Link>
        </div>
        <ul className="flex items-center space-x-14 pr-28 mt-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className="hover:underline transition-colors duration-300 font-sm text-lg"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
