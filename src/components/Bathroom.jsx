import React, { useState } from "react";
import "./DesignStyles.css";

const Bathroom = () => {
  const PRODUCTS = [
    { id: 1, name: "Modern Bathroom", style: "Modern", price: 400, room: "Bathroom", image: "/assests/images/dbath1.jpg" },
    { id: 2, name: "Bright Bathroom", style: "Minimal", price: 350, room: "Bathroom", image: "/assests/images/dbath2.jpg" },
    { id: 3, name: "Chic Bathroom", style: "Luxury", price: 450, room: "Bathroom", image: "/assests/images/dbath3.jpg" },
    { id: 4, name: "Contemporary Bathroom", style: "Modern", price: 420, room: "Bathroom", image: "/assests/images/dbath4.jpg" },
    { id: 5, name: "Cozy Bathroom", style: "Cozy", price: 300, room: "Bathroom", image: "/assests/images/dbath5.jpg" },
    { id: 6, name: "Stylish Bathroom", style: "Elegant", price: 500, room: "Bathroom", image: "/assests/images/dbath6.jpg" }
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
          backgroundImage: "url('/assests/images/bathroombanner.jpg')",
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
        Bath Room
      </div>

      <br />
      <h2>Our Designs</h2>

      {/* Controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search designs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>

        <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
          <option value="">Style</option>
          <option value="Modern">Modern</option>
          <option value="Minimal">Minimal</option>
          <option value="Luxury">Luxury</option>
          <option value="Cozy">Cozy</option>
          <option value="Elegant">Elegant</option>
        </select>
      </div>

      {/* Product Cards */}
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

export default Bathroom;
