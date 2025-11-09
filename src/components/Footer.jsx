// src/components/Footer.js

import React from 'react';
// Assuming you'd use icons from a library like react-icons
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links-group">
        
        {/* Column 1: ONLINE SHOPPING */}
        <div className="footer-column">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/home">Home & Living</a></li>
            <li><a href="/beauty">Beauty</a></li>
            <li><a href="/genz">GenZ</a></li>
          </ul>
        </div>

        {/* Column 2: CUSTOMER POLICIES */}
        <div className="footer-column">
          <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/t&c">T&C</a></li>
            <li><a href="/terms">Terms Of Use</a></li>
            <li><a href="/track">Track Orders</a></li>
            <li><a href="/shipping">Shipping</a></li>
          </ul>
        </div>

        {/* Column 3: EXPERIENCE APP & KEEP IN TOUCH */}
        <div className="footer-column app-social-column">
          <h3>EXPERIENCE TEXTILE APP ON MOBILE</h3>
          <div className="app-badges">
            {/* These would be image links to the app stores */}
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              
            </a>
            <a href="https://appstore.com" target="_blank" rel="noopener noreferrer" style={{marginLeft: '10px'}}>
              
            </a>
          </div>

          <h3 style={{marginTop: '20px'}}>KEEP IN TOUCH</h3>
          <div className="social-icons">
            {/* Replace with Fa icons in a real project */}
            <span style={{fontSize: '24px', marginRight: '10px'}}>FB</span>
            <span style={{fontSize: '24px', marginRight: '10px'}}>TW</span>
            <span style={{fontSize: '24px', marginRight: '10px'}}>IG</span>
            <span style={{fontSize: '24px'}}>YT</span>
          </div>
        </div>

        {/* Column 4: GUARANTEE & RETURNS */}
        <div className="footer-column guarantees">
          <p>
            <strong>100% ORIGINAL</strong> guarantee for <br/>all products.
          </p>
          <p style={{marginTop: '15px'}}>
            <strong>Return within 14 days</strong><br/> of receiving your order
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Textile Brand. All rights reserved.</p>
      </div>
    </footer>
  );
}

