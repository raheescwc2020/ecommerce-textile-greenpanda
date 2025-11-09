// src/components/ProductList.js

import React from 'react';

// Define your 5 categories
const productCategories = [
  'RISING STARS',
  'LUXE',
  'GRAND REDUCTION DEALS',
  'GRAND GLOBAL BRANDS',
  'SHOP BY CATEGORY',
];

  // Mock data for display
  const mockProducts = [
    { id: 1, name: 'Floral Kurta Set', price: 199,imageUrl: '/images/floral.png' },
    { id: 2, name: 'Embroidered Shawl', price: 450 ,imageUrl: '/images/emproidary.png'},
    { id: 3, name: 'Linen Saree', price: 120,imageUrl: '/images/linen.png' },
    { id: 4, name: 'Casual Tunic', price: 50,imageUrl: '/images/tunic.png' },
  ];

// Placeholder for a single product card

const ProductCard = ({ id, name, price, imageUrl, onCardClick }) => (
  // Call the click handler with the product ID
  <div className="product-card" onClick={() => onCardClick(id)}>
    <img src={imageUrl} alt={name} className="product-image-actual" /> 
    <h4>{name}</h4>
    <p>Starting at: ${price}</p>
  </div>
);
export default function ProductList({ onProductClick }) {
  return (
    <section className="product-list-section">
      {productCategories.map((category) => (
        <div key={category} className="product-category-group">
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {mockProducts.map(product => (
              <ProductCard 
                key={product.id} 
                {...product} 
                onCardClick={onProductClick} // Pass the handler down
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
