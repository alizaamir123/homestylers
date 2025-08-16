// Sitemap.jsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

const Sitemap = () => {
  return (
    <>
      <Navbar />
      
      <div className="spacer"></div>

      <main className="sitemap-container">
        
        <div className="sitemap-inner">
          <div className="sitemap-grid">

            {/* Pages Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="sitemap-title">Pages</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-home"></i> Home</li>
                <li><i className="fas fa-info-circle"></i> About</li>
                <li><i className="fas fa-envelope"></i> Contact us</li>
                <li><i className="fas fa-comment"></i> Feedback</li>
              </ul>
            </div>

            {/* Furniture Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-couch"></i>
                </div>
                <h3 className="sitemap-title">Furniture</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-chair"></i> Sofas & Couches</li>
                <li><i className="fas fa-table"></i> Tables</li>
                <li><i className="fas fa-bed"></i> Beds & Mattresses</li>
                <li><i className="fas fa-archive"></i> Storage</li>
              </ul>
            </div>

            {/* Lighting Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="sitemap-title">Lighting</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-circle"></i> Ceiling Lights</li>
                <li><i className="fas fa-square"></i> Wall Lights</li>
                <li><i className="fas fa-street-view"></i> Floor Lamps</li>
                <li><i className="fas fa-lightbulb"></i> Table Lamps</li>
                <li><i className="fas fa-tree"></i> Outdoor Lighting</li>
              </ul>
            </div>

            {/* Decor Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-palette"></i>
                </div>
                <h3 className="sitemap-title">Decor</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-puzzle-piece"></i> Rugs and Carpets</li>
                <li><i className="fas fa-window-maximize"></i> Curtains and Blinds</li>
                <li><i className="fas fa-image"></i> Wall Art and Mirrors</li>
                <li><i className="fas fa-th-large"></i> Cushions and Throws</li>
                <li><i className="fas fa-seedling"></i> Vases and Plant Pots</li>
              </ul>
            </div>

            {/* Kitchen Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3 className="sitemap-title">Kitchen</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-door-closed"></i> Cabinets and Pantries</li>
                <li><i className="fas fa-square-full"></i> Countertops</li>
                <li><i className="fas fa-faucet"></i> Sinks and Faucets</li>
                <li><i className="fas fa-shopping-cart"></i> Kitchen Islands and Carts</li>
                <li><i className="fas fa-magic"></i> Mirrors and Medicine Cabinets</li>
              </ul>
            </div>

            {/* Bathroom Section */}
            <div className="sitemap-card">
              <div className="sitemap-header">
                <div className="sitemap-icon gradient-bg">
                  <i className="fas fa-bath"></i>
                </div>
                <h3 className="sitemap-title">Bathroom</h3>
              </div>
              <ul className="sitemap-list">
                <li><i className="fas fa-toilet"></i> Vanities and Cabinets</li>
                <li><i className="fas fa-shower"></i> Shower and Bathtubs</li>
                <li><i className="fas fa-toilet-paper"></i> Toilets and Bidets</li>
                <li><i className="fas fa-sink"></i> Bathroom Sinks</li>
                <li><i className="fas fa-magic"></i> Mirrors and Medicine Cabinets</li>
              </ul>
            </div>

          </div>
        </div>
      </main>

      <div className="spacer"></div>
      <Footer />
    </>
  );
};

export default Sitemap;
