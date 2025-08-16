// Kitchen.jsx
import React, { useState } from 'react';
import './DesignStyles.css';

const Kitchen = () => {
  const PRODUCTS = [
    { id: 1, name: "Spacious Kitchen", style: "Modern", price: 550, room: "Open Kitchen", image: "/assests/images/dkitchen1.jpg" },
    { id: 2, name: "Bright Kitchen", style: "Contemporary", price: 500, room: "Island Kitchen", image: "./assests/images/dkitcchen2.jpg" },
    { id: 3, name: "Warm Kitchen", style: "Rustic", price: 480, room: "U-Shaped Kitchen", image: "/assests/images/dkitchen3.jpg" },
    { id: 4, name: "Elegant Kitchen", style: "Luxury", price: 700, room: "L-Shaped Kitchen", image: "/assests/images/dkitchen4.jpg" },
    { id: 5, name: "Airy Kitchen", style: "Minimal", price: 520, room: "Galley Kitchen", image: "/assests/images/dkitchen5.jpg" },
    { id: 6, name: "Inviting Kitchen", style: "Cozy", price: 490, room: "Peninsula Kitchen", image: "/assests/images/dkitchen6.jpg" }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");

  // Dynamic dropdown options
  const roomTypes = [...new Set(PRODUCTS.map(p => p.room))];
  const styleTypes = [...new Set(PRODUCTS.map(p => p.style))];

  const filteredProducts = PRODUCTS
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (roomFilter ? p.room === roomFilter : true))
    .filter(p => (styleFilter ? p.style === styleFilter : true))
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "price") return a.price - b.price;
      return 0;
    });

  return (
    <div className="gallery-container">
      {/* Banner */}
      <div
        className="banner"
        style={{
          backgroundImage: "url('/assests/images/kitchen.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px rgba(0,0,0,0.6)"
        }}
      >
        Kitchen Designs
      </div>

      <br />
      <h2>Explore Our Kitchen Collection</h2>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search kitchen styles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <select value={roomFilter} onChange={(e) => setRoomFilter(e.target.value)}>
          <option value="">Kitchen Type</option>
          {roomTypes.map((room, index) => (
            <option key={index} value={room}>{room}</option>
          ))}
        </select>

        <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
          <option value="">Style</option>
          {styleTypes.map((style, index) => (
            <option key={index} value={style}>{style}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.style} - {p.room}</p>
            <span>${p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
