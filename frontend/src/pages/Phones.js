// src/pages/Phones.js
import React, { useEffect, useState } from 'react';
import './Phones.css';

const Phones = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/phones');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data.results || []); // Set an empty array if `results` is undefined
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="phones-page">
      <h1>Our Phones</h1>
      {error ? (
        <p className="error-message">Failed to load products: {error}</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.listing_id} className="product-card">
              <img
                src={product.Images && product.Images[0]?.url_fullxfull}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                View on Etsy
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Phones;