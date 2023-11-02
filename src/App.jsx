import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import AboutUs from './components/AboutUs'
import SocialImpact from './components/SocialImpact'
import Invest from './components/Invest'
import Navbar from './components/Navbar'

function App() {
  
  return (
    
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<AboutUs/> }/>
      <Route path="/social-impact" element={<SocialImpact/> }/>
      <Route path="/invest" element={<Invest/> }/>

    </Routes>

   </Router>
   
   
  )
}

export default App
