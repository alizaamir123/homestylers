// ProductGallery.jsx
import React, { useState } from "react";
import "./DesignStyles.css"; // for styling

const Bedroom = () => {
  // Product data (can be fetched later)
  const PRODUCTS = [
    { id: 1, name: "Modern Living Room", style: "Modern", price: 250, room: "Living Room", image: "/assests/images/dbed1.jpg" },
    { id: 2, name: "Classic Bedroom", style: "Classic", price: 300, room: "Bedroom", image: "/assests/images/dbed2.jpg" },
    { id: 3, name: "Minimal Kitchen", style: "Minimal", price: 200, room: "Kitchen", image: "/assests/images/dbed3.jpg" },
    { id: 4, name: "Luxury Bathroom", style: "Luxury", price: 400, room: "Bathroom", image: "/assests/images/dbed4.jpg" },
    { id: 5, name: "Cozy Bedroom", style: "Cozy", price: 280, room: "Bedroom", image: "/assests/images/dbed5.jpg" },
    { id: 6, name: "Elegant Bedroom", style: "Elegant", price: 350, room: "Bedroom", image: "/assests/images/dbed6.jpg" }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [styleFilter, setStyleFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Filtering & Sorting
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
      <div
  className="banner"
  style={{
    backgroundImage: "url('/assests/images/bedroombanner.jpg')",
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
  Bed Room
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

        <select value={roomFilter} onChange={(e) => setRoomFilter(e.target.value)}>
          <option value="">Room Type</option>
          <option value="Living Room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bathroom">Bathroom</option>
        </select>

        <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
          <option value="">Style</option>
          <option value="Modern">Modern</option>
          <option value="Classic">Classic</option>
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

export default Bedroom;
