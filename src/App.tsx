import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AboutUs from './components/about/AboutUs';
import SocialImpact from './components/social/SocialImpact';
import Invest from './components/Invest';


function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/social-impact" element={<SocialImpact />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </Router>
  );
}

export default App;
