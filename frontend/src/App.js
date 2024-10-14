// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import Backdrop from './components/Backdrop'; // Import the component
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import AbsoluteNeed from './components/AbsoluteNeed';
import ConstructionBanner from './components/ConstructionBanner'; // Import the banner component
import Footer from './components/Footer';

function App() {
  // eslint-disable-next-line
  const [data, setData] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false); // Drawer state

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen); // Toggle drawer open or closed
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.message); // Access the message property of the JSON data
      } catch (error) {
        console.error('Error fetching data in App:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <ConstructionBanner />
      <Navbar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="content" >
        <Backdrop isDrawerOpen={isDrawerOpen} />
        <HeroSection isDrawerOpen={isDrawerOpen} />
        <AbsoluteNeed isDrawerOpen={isDrawerOpen}/>
        <Footer isDrawerOpen={isDrawerOpen} />
      </div>
      
  </div>

  );
}

export default App;
