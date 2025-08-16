import React, { useState, useEffect } from 'react';
import './Product.css';

const Productpage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categoryData = [
    {
      name: "Furniture",
      image: "./assests/images/homedecor.jpg",
      subcategories: ["Sofas", "Tables", "Beds", "Mattress", "Storage", "Chair"]
    },
    {
      name: "Lighting",
      image: "./assests/images/Furniture.jpg",
      subcategories: ["Ceiling Lights", "Floor Lamps", "Table Lamps", "Wall Lights", "Outdoor Lights"]
    },
    {
      name: "Kitchen",
      image: "./assests/images/Kitchen1.jpg",
      subcategories: ["Cabinets", "Countertops", "Sinks & Faucets", "Islands & Carts", "Backsplashes"]
    },
    {
      name: "Home Decor",
      image: "./assests/images/light.jpg",
      subcategories: ["Rugs & Carpet", "Curtains & Blinds", "Wall Art & Mirror", "Vases & Plant Pots", "Cushions & Throws"]
    },
    {
      name: "Bathroom",
      image: "./assests/images/bathroom.jpg",
      subcategories: ["Vanities", "Showers & Bathtubs", "Toilets & Bidets", "Bathroom Sinks", "Mirrors & Cabinets"]
    }
  ];

  const slides = [
    { image: "./assests/images/homedecor.jpg", text: "Modern Furniture" },
    { image: "./assests/images/Furniture.jpg", text: "Modern Lighting" },
    { image: "./assests/images/Kitchen1.jpg", text: "Modern Kitchen" },
    { image: "./assests/images/light.jpg", text: "Home Decor" },
    { image: "./assests/images/bathroom.jpg", text: "Modern Bathroom" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="app">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-text">{slide.text}</div>
          </div>
        ))}
      </div>
<br /><br /><br />
      <h1 className="title">Explore Our Collections</h1>

      <div className="product-grid">
        {categoryData.map((cat, i) => (
          <CategoryCard key={i} category={cat} />
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <img className="category-image" src={category.image} alt={category.name} />
      <div className="category-overlay">
        <h2 className="category-name">{category.name}</h2>
        <div className="subcategory-list">
          {category.subcategories.map((sub, i) => (
            <span key={i} className="subcategory-item">{sub}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productpage;
