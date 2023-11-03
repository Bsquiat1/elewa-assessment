import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutUs from './components/about/AboutUs';
import SocialImpact from './components/social/SocialImpact';
import Invest from './components/invest/Invest';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        {/* Route for the About Us component */}
        <Route path="/" element={<AboutUs />} />

        {/* Route for the Social Impact component */}
        <Route path="/social-impact" element={<SocialImpact />} />

        {/* Route for the Invest component */}
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </Router>
  );
}

export default App;
