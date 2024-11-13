// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import ConstructionBanner from './components/ConstructionBanner';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Phones from './pages/Phones';
import Contact from './pages/Contact';
import Help from './pages/Help';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };



  return (
    <Router>
      <div className="App">
        <ConstructionBanner />
        <Navbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="content">
          <Backdrop isDrawerOpen={isDrawerOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/phones" element={<Phones />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
          <Footer isDrawerOpen={isDrawerOpen} />
        </div>
      </div>
    </Router>
  );
}

export default App;