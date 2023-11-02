import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {


 

 


  return (
    <div>
   

   <nav className="flex border-gray-300 items-center justify-between p-4 bg-white text-black">

      <div className="flex items-center pl-96">
        <Link to="/"><img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg" alt="Logo" className="w-full h-11" /></Link>
        
      </div>
      <ul className="flex items-center space-x-14 pr-96">
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Home</Link>
        </li>
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">About us</Link>
        </li>
        
        

        
        <li>
          <Link to="/social-impact" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Social impact</Link>
        </li>
        <li>
          <Link to="/invest" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Invest</Link>
        </li>
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Venture Labs</Link>
        </li>
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Brands</Link>
        </li>
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Careers</Link>
        </li>
        <li>
          <Link to="/" className="hover:no-underline hover:text-gray-500 transition-colors duration-300 font-medium text-lg">Contact</Link>
        </li>
       
       
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
