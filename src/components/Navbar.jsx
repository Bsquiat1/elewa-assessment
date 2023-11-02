import React from 'react';
import { Link } from 'react-router-dom';

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
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/social-impact"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Social impact
            </Link>
          </li>
          <li>
            <Link
              to="/invest"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Invest
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Venture Labs
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Brands
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:underline transition-colors duration-300 font-sm text-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
