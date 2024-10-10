// src/App.js

import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import Backdrop from './components/Backdrop'; // Import the component
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import AbsoluteNeed from './components/AbsoluteNeed';
import ConstructionBanner from './components/ConstructionBanner'; // Import the banner component



function App() {
  const [data, setData] = useState('');
  
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
      <Backdrop />
      <Navbar />
      <Herosection />
      <AbsoluteNeed />
      
      
      <h1>{data}</h1>
    </div>
  );
}

export default App;
