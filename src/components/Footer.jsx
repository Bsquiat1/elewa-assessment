import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 rounded-t-3xl border-t border-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-bold">Headquarters</h3>
            <p>The Promenade, 19 General</p>
            <p>Mathenge Rd</p>
            <p>Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Contact</h3>
            <p>T +254 78 92 27 755</p>
            <p>E info@elewa.ke</p>
          </div>
          <div> 
            <h3 className="text-3xl font-bold">Navigation</h3>
            <p>About us</p>
            <p>Social impact</p>
            <p>Invest</p>
            <p>News</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg"
            alt="Logo"
            className="w-full h-11"
          />
          <p className="text-lg">© 2023 Elewa Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
