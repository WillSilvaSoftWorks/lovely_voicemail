import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors()); // Allow all origins for development

const PORT = process.env.PORT || 5001;

app.get('/api/phones', async (req, res) => {
  const apiKey = process.env.ETSY_API_KEY;
  const shopId = process.env.SHOP_ID;

  try {
    const response = await fetch(
      `https://openapi.etsy.com/v2/shops/${shopId}/listings/active?api_key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Etsy API Error: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching products from Etsy API:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});