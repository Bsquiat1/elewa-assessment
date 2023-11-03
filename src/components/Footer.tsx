import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-8 rounded-t-3xl border-t border-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-8 mt-20">
          <div>
            <h3 className="text-3xl font-bold underline mb-6">Headquarters</h3>
            <p className="mb-2 text-lg">The Promenade, 19 General</p>
            <p className="mb-2 text-lg">Mathenge Rd</p>
            <p className="text-lg">Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold underline mb-6">Contact</h3>
            <p className="mb-2 text-lg">T +254 78 92 27 755</p>
            <p className="text-lg">E info@elewa.ke</p>
          </div>
          <div> 
            <h3 className="text-3xl font-bold underline mb-6">Navigation</h3>
            <p className="mb-2 text-lg">About us</p>
            <p className="mb-2 text-lg">Social impact</p>
            <p className="mb-2 text-lg">Invest</p>
            <p className="mb-2 text-lg">News</p>
            <p className="text-lg">Contact</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold underline mb-6">Brands</h3>
            <p className="mb-2 text-lg">Elewa</p>
            <p className="mb-2 text-lg">Italanta</p>
            <p className="text-lg">Venture labs</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold underline mb-6">Privacy</h3>
            <p className="mb-2 text-lg">Terms and conditions</p>
            <p className="text-lg">Cookie preferences</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mx-20 mt-20">
        <img
          src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
          alt="Logo"
          className="w-96 h-11"
        />
        <div className="mt-4 flex">
          <a href="#" className="text-white mr-4">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
          <a href="#" className="text-white mr-4">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a href="#" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
