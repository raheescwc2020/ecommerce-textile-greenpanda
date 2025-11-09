// src/components/ProductPage.jsx

import React, { useState, useMemo } from 'react';

// Mock Product Data (In a real app, this would come from a database query)
const MOCK_PRODUCT = {
  id: 1,
  name: "Floral Kurta Set",
  basePrice: 199.99, // Base price per unit
  description: "An elegant blue floral printed kurta set crafted from soft cotton with a matching dupatta.",
  imageUrl: 'path_to_your_kurta_image', // Use the path you set in ProductList.jsx
  availableSizes: ['S', 'M', 'L', 'XL']
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(MOCK_PRODUCT.availableSizes[0]);

  // Use useMemo to calculate the total price only when quantity or basePrice changes
  const totalPrice = useMemo(() => {
    return (MOCK_PRODUCT.basePrice * quantity).toFixed(2);
  }, [quantity]);

  const handleQuantityChange = (event) => {
    // Ensure the quantity is a positive number
    const newQuantity = Math.max(1, parseInt(event.target.value, 10) || 1);
    setQuantity(newQuantity);
  };

  const handleCheckout = () => {
    alert(`Checkout initiated for ${quantity} x ${MOCK_PRODUCT.name} at a total price of $${totalPrice}.`);
    // In a real app: Redirect to the checkout form and pass data to the cart API
  };

  return (
    <div className="product-detail-container">
      <div className="product-image-area">
        <img 
          src={MOCK_PRODUCT.imageUrl} 
          alt={MOCK_PRODUCT.name} 
          className="product-detail-image" 
        />
      </div>

      <div className="product-info-area">
        <h1>{MOCK_PRODUCT.name}</h1>
        <p className="product-description">{MOCK_PRODUCT.description}</p>
        
        {/* Base Price Display */}
        <p className="base-price">
          Price per unit: 
          <span className="price-value"> ${MOCK_PRODUCT.basePrice.toFixed(2)}</span>
        </p>

        <hr/>

        {/* Quantity Selector */}
        <div className="control-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>

        {/* Size Selector (Optional but good practice) */}
        <div className="control-group">
          <label htmlFor="size">Size:</label>
          <select 
            id="size" 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
            className="size-select"
          >
            {MOCK_PRODUCT.availableSizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <hr/>

        {/* Total Price Update */}
        <div className="total-price-area">
          <h3>Total Price:</h3>
          <span className="final-price">${totalPrice}</span>
        </div>

        {/* Checkout Button */}
        <button 
          onClick={handleCheckout} 
          className="checkout-button"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}