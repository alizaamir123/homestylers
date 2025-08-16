// components/PremiumCollection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import products from "../data/products.json"; // Import the JSON data

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function PremiumCollection({
  wishlist = [],
  toggleWishlist,
  sidebarOpen,
  setSidebarOpen,
  removeFromWishlist,
}) {
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="premium-collection-wrapper" style={{ paddingTop: "80px" }}>
      <div className="container header-section">
        <h1 className="premium-collection-heading">Our Premium Collection</h1>
        <div className="header-divider" />
        <br />
        <p className="header-sub">
          Discover exceptional quality and craftsmanship in our carefully curated
          selection of premium products for your home
        </p>
        <br />

        <div className="carousel-section">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {products.map((product) => {
              const isInWishlist = wishlist.includes(product.id);
              return (
                <SwiperSlide key={product.id}>
                  <div className="product-card">
                    <button
                      className={`wishlist-heart ${isInWishlist ? "in" : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                      title={
                        isInWishlist
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      aria-label={
                        isInWishlist
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                    >
                      <i
                        className={isInWishlist ? "fas fa-heart" : "far fa-heart"}
                      />
                    </button>

                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="product-body">
                      <span className="product-category">
                        {product.category.toUpperCase()}
                      </span>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>

                      <div className="product-footer">
                        <span className="product-price">${product.price}</span>
                        <button className="add-to-cart">View Details</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Wishlist Sidebar */}
      <div
        className={`wishlist-sidebar ${sidebarOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: sidebarOpen ? 0 : "-350px",
          width: "350px",
          height: "100vh",
          backgroundColor: "white",
          boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
          transition: "right 0.3s ease",
          zIndex: 1050,
          padding: "20px",
          overflowY: "auto"
        }}
      >
        <div className="sidebar-header" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #eee"
        }}>
          <h4 style={{ margin: 0, fontSize: "1rem" }}>Your Wishlist ({wishlist.length})</h4>
          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
            aria-label="Close wishlist"
          >
            &times;
          </button>
        </div>

        <div className="sidebar-content">
          {wishlistProducts.length === 0 ? (
            <div className="empty-wishlist" style={{
              textAlign: "center",
              padding: "2rem 0"
            }}>
              <i className="fas fa-heart" style={{
                fontSize: "3rem",
                color: "#ccc",
                marginBottom: "1rem"
              }} />
              <p>Your wishlist is empty</p>
              <p style={{ color: "#999" }}>Add some products to see them here!</p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="wishlist-item" style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem 0",
                borderBottom: "1px solid #eee"
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "4px"
                  }} 
                />
                <div style={{ flex: 1 }}>
                  <h5 style={{ margin: 0 }}>{product.name}</h5>
                  <p style={{ margin: "0.25rem 0", fontWeight: "bold" }}>${product.price}</p>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "#666" }}>
                    {product.category}
                  </p>
                </div>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ff4444",
                    cursor: "pointer",
                    fontSize: "1.2rem"
                  }}
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
            cursor: "pointer"
          }}
        />
      )}
    </div>
  );
}