import React, { useState } from 'react';
import './DesignStyles.css';

const Contemporary = () => {
  const PRODUCTS = [
    { id: 1, name: "Urban Loft Living", style: "Industrial", price: 480, room: "Living Room", image: "/assests/images/dcontemprory1.jpg" },
    { id: 2, name: "Scandinavian Serenity", style: "Scandinavian", price: 520, room: "Bedroom", image: "/assests/images/dcontemprory2.jpg" },
    { id: 3, name: "Minimalist Open Space", style: "Minimal", price: 450, room: "Living Room", image: "/assests/images/dcontemprory3.jpg" },
    { id: 4, name: "Contemporary Workspace", style: "Modern", price: 500, room: "Home Office", image: "/assests/images/dcontemprory4.jpg" },
    { id: 5, name: "Luxury Glass House", style: "Luxury", price: 750, room: "Living Room", image: "/assests/images/dcontemprory5.jpg" },
    { id: 6, name: "Warm Neutrals Bedroom", style: "Cozy", price: 490, room: "Bedroom", image: "/assests/images/dcontemprory6.jpg" }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");

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
          backgroundImage: "url('/assests/images/contemprory.jpg')",
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
        Contemporary Interior Designs
      </div>

      <br />
      <h2>Explore Our Contemporary Collection</h2>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search contemporary styles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <select value={roomFilter} onChange={(e) => setRoomFilter(e.target.value)}>
          <option value="">Contemporary Type</option>
          <option value="Living Room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Home Office">Home Office</option>
        </select>

        <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
          <option value="">Style</option>
          <option value="Modern">Modern</option>
          <option value="Minimal">Minimal</option>
          <option value="Luxury">Luxury</option>
          <option value="Cozy">Cozy</option>
          <option value="Industrial">Industrial</option>
          <option value="Scandinavian">Scandinavian</option>
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

export default Contemporary;
