import React, { useState } from 'react';
import './DesignStyles.css';

const LivingRoom = () => {
  const PRODUCTS = [
    { id: 1, name: "Cozy Living Room", style: "Cozy", price: 480, room: "Neutral Sofa", image: "./assests/images/dliving1.jpg" },
    { id: 2, name: "Modern Living Space", style: "Modern", price: 520, room: "Open Plan", image: "./assests/images/dliving2.jpg" },
    { id: 3, name: "Elegant Living Room", style: "Luxury", price: 700, room: "Formal Living", image: "./assests/images/dliving3.jpg" },
    { id: 4, name: "Bright Living Area", style: "Contemporary", price: 500, room: "Natural Light", image: "./assests/images/dliving4.jpg" },
    { id: 5, name: "Sophisticated Living Room", style: "Classic", price: 650, room: "Luxury Suite", image: "./assests/images/dliving5.jpg" },
    { id: 6, name: "Corner Living Area", style: "Cozy", price: 450, room: "Corner Space", image: "./assests/images/dliving6.jpg" }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");

  const roomTypes = [...new Set(PRODUCTS.map(p => p.room))];
  const styleTypes = [...new Set(PRODUCTS.map(p => p.style))];

  const filteredProducts = PRODUCTS
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (roomFilter ? p.room === roomFilter : true))
    .filter((p) => (styleFilter ? p.style === styleFilter : true))
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
          backgroundImage: "url('./assests/images/livingbanner.jpg')",
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
        Living Room Designs
      </div>

      <br />
      <h2>Explore Our Living Room Collection</h2>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search living room styles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <select value={roomFilter} onChange={(e) => setRoomFilter(e.target.value)}>
          <option value="">Livingroom Type</option>
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

export default LivingRoom;
