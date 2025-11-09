// src/components/Banner.jsx

import React, { useState, useEffect } from 'react';

// Import your banner images
// Make sure these paths are correct relative to THIS file's location
import bannerImg1 from '../assets/banner-new-season.png'; // e.g., an image for new arrivals
import bannerImg2 from '../assets/banner-luxe.png';    // e.g., an image for luxe items
import bannerImg3 from '../assets/banner-deals.png';   // e.g., an image for grand reduction deals
import bannerImg4 from '../assets/banner-global.png';   // e.g., an image for global brands
import bannerImg5 from '../assets/banner-category.png';  // e.g., an image for shop by category

export default function Banner() {
 const [currentIndex, setCurrentIndex] = useState(0);

 // Define your banner slides with image URLs and category links
 const bannerSlides = [
  { 
   id: 1, 
   title: "DISCOVER NEW SEASON STYLES", 
   buttonText: "Shop New Arrivals", 
   imageUrl: bannerImg1,
   link: "/category/rising-stars" 
  },
  { 
   id: 2, 
   title: "LUXE COLLECTION - Timeless Elegance", 
   buttonText: "Explore Luxe", 
   imageUrl: bannerImg2,
   link: "/category/luxe" 
  },
  { 
   id: 3, 
   title: "GRAND REDUCTION DEALS - Up to 60% Off!", 
   buttonText: "Grab the Deals", 
   imageUrl: bannerImg3,
   link: "/category/grand-reduction-deals" 
  },
  { 
   id: 4, 
   title: "GRAND GLOBAL BRANDS - Your Favorites Here", 
   buttonText: "Shop Global Brands", 
   imageUrl: bannerImg4,
   link: "/category/grand-global-brands" 
  },
  { 
   id: 5, 
   title: "SHOP BY CATEGORY - Find Your Perfect Match", 
   buttonText: "Browse Categories", 
   imageUrl: bannerImg5,
   link: "/shop-by-category" 
  },
 ];

 // Logic for automatic sliding (every 5 seconds)
 useEffect(() => {
  const intervalId = setInterval(() => {
   setCurrentIndex((prevIndex) => 
    (prevIndex + 1) % bannerSlides.length
   );
  }, 5000); // Change slide every 5 seconds (5000ms)

  return () => clearInterval(intervalId); // Cleanup on component unmount
 }, [bannerSlides.length]); 

 // Function to handle dot clicks
 const goToSlide = (index) => {
  setCurrentIndex(index);
 };

 const currentSlide = bannerSlides[currentIndex];

 return (
  <section className="banner-slider">
   {/* Display the current slide */}
   <div 
    className="slide" 
    style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
   >
    <div className="banner-content">
     <h2>{currentSlide.title}</h2>
     <button 
      onClick={() => console.log('Navigating to: ' + currentSlide.link)}
      className="banner-button"
     >
      {currentSlide.buttonText}
     </button>
    </div>
   </div>
   
   {/* Navigation dots */}
   <div className="dots-container">
    {bannerSlides.map((slide, index) => (
     <span 
      key={slide.id} 
      className={`dot ${index === currentIndex ? 'active' : ''}`} 
      onClick={() => goToSlide(index)}
     />
    ))}
   </div>
  </section>
 );
}