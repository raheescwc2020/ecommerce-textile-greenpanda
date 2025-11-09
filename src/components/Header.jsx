// src/components/Header.js

import React from 'react';
import logo from '../assets/greenpanda_logo.png';
import { FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
// Assuming you'd use icons from a library like react-icons
// import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa'; 

export default function Header() {
  return (
    <header className="header-container">
      {/* 1. Website Icon/Logo */}
    <div className="logo">
        <img src={logo} alt="Greenpanda Logo" style={{ height: '30px' }} />
        <h1 style={{ marginLeft: '10px', fontSize: '18px' }}>TEXTILE_BRAND</h1>
      </div>

      {/* 2. Search Engine */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products, categories, and more..." />
        {/* <FaSearch className="search-icon" /> */}
      </div>

      {/* 3. User Icons (Profile, Wishlist, Bag) */}
     <nav className="user-nav">
  <div className="nav-item">
    {/* Profile Icon and optional text */}
    <FaUser size={20} /> 
    <span>Profile</span> 
  </div>
  <div className="nav-item">
    {/* Wishlist Icon and optional text */}
    <FaHeart size={20} />
    <span>Wishlist</span>
  </div>
  <div className="nav-item">
    {/* Bag/Cart Icon and optional text */}
    <FaShoppingBag size={20} />
    <span>Bag</span>
  </div>
</nav>
    </header>
  );
}

