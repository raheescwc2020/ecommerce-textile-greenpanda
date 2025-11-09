// src/App.js
import { useState } from 'react';
import React from 'react';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import ProductPage from './components/ProductPage.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx'; 
// Assuming you create a Footer component
import './App.css'; // Import the CSS file

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Simple logic to show the correct component based on state
  const isProductSelected = selectedProductId !== null;

  // Function passed down to ProductList to handle the click event
  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
       {isProductSelected ? (
          // 1. If a product is selected, show the ProductPage
          // Pass a mock ID for now, or the real ID if your data supported it
          <ProductPage productId={selectedProductId} onBack={() => setSelectedProductId(null)} />
        ) : (
          // 2. Otherwise, show the ProductList
          <ProductList onProductClick={handleProductSelect} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;