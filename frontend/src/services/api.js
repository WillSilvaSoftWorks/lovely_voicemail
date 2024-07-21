// src/services/api.js
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Adjust based on your backend response
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

