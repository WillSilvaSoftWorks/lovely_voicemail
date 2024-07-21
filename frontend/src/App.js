// src/App.js

import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import UnderConstruction from './components/UnderConstruction'; // Import the component


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
      <UnderConstruction />
      <h1>{data}</h1>
    </div>
  );
}

export default App;
