import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ wishlist = [], setSidebarOpen, sidebarOpen }) => {
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      setIsNavCollapsed(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (id) => {
    if (isMobile) {
      setExpandedDropdown(expandedDropdown === id ? null : id);
    }
  };

  const closeAll = () => {
    setExpandedDropdown(null);
    if (isMobile) setIsNavCollapsed(true);
  };

  const handleWishlistToggle = () => {
    setSidebarOpen(!sidebarOpen);
    closeAll();
  };

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar">
          <Link to="/" className="brand" onClick={closeAll}>
            Home Styler
          </Link>

          <button
            className="toggler"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul className={`nav-links ${!isNavCollapsed ? "show" : ""}`}>
            <li><Link to="/" onClick={closeAll}>Home</Link></li>
            <li><Link to="/productpage" onClick={closeAll}>Products</Link></li>
            <li
              className={`dropdown ${expandedDropdown === "styles" ? "show" : ""}`}
              onMouseEnter={() => !isMobile && setExpandedDropdown("styles")}
              onMouseLeave={() => !isMobile && setExpandedDropdown(null)}
            >
              <button
                className="dropdown-btn"
                onClick={(e) => { e.preventDefault(); toggleDropdown("styles"); }}
              >
                Design Styles ▼
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/livingroom" onClick={closeAll}>Living Room</Link></li>
                <li><Link to="/kitchen" onClick={closeAll}>Kitchen</Link></li>
                <li><Link to="/bedroom" onClick={closeAll}>BedRoom</Link></li>
                <li><Link to="/bathroom" onClick={closeAll}>BathRoom</Link></li>
                <li><Link to="/contemporary" onClick={closeAll}>Contemporary Styles</Link></li>
                <li><Link to="/elegant" onClick={closeAll}>Elegant Look Styles</Link></li>
              </ul>
            </li>
            <li><Link to="/about" onClick={closeAll}>About</Link></li>
            <li><Link to="/feedback" onClick={closeAll}>Feedback</Link></li>
            <li><Link to="/contact" onClick={closeAll}>Contact</Link></li>
            <li><Link to="/sitemap" onClick={closeAll}>Sitemap</Link></li>
          </ul>

          <div className="nav-icons">
            <button className="wishlist-btn" onClick={handleWishlistToggle} aria-label="Wishlist">
              <i className="bi bi-heart fs-5"></i>
              {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            </button>
          </div>
        </nav>
      </header>

      <style jsx>{`
        .navbar-header {
          position: fixed;
          top: 2%;
          width: 100%;
          z-index: 1000;
          padding: 0.5rem 0;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1050px;
          margin: 0 auto;
          padding: 0 1rem;
          border-radius: 50px;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          height: 12vh;
        }

        .brand { font-weight: bold; color: #2c7a7b; text-decoration: none; font-size: 1.5rem; }

        .toggler {
          display: none;
          font-size: 1.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 1rem;
          align-items: center;
          transition: max-height 0.3s ease;
        }

        .nav-links.show { max-height: 1000px; }
        .nav-links li { position: relative; }
        .nav-links a, .dropdown-btn {
          text-decoration: none;
          color: #495057;
          padding: 0.5rem 1rem;
          cursor: pointer;
          background: none;
          border: none;
          font-size: 1rem;
          transition: color 0.2s;
        }

        .nav-links a:hover, .dropdown-btn:hover { color: #2c7a7b; }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 0.25rem;
          box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          display: block;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          min-width: 180px;
          z-index: 1000;
        }

        .dropdown.show .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu li a {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
        }

        .dropdown-menu li a:hover { background: #f8f9fa; color: #2c7a7b; }

        .nav-icons { display: flex; align-items: center; gap: 1rem; }

        .icon-link { color: #495057; font-size: 1.2rem; text-decoration: none; }
        .icon-link:hover { color: #2c7a7b; }

        .wishlist-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.2rem;
          color: #495057;
        }

        .wishlist-btn:hover { color: #2c7a7b; }

        .badge {
          position: absolute;
          top: -5px;
          right: -10px;
          background: red;
          color: white;
          border-radius: 50%;
          padding: 2px 6px;
          font-size: 0.75rem;
        }

        @media (max-width: 991px) {
          .toggler { display: block; }
          .nav-links {
            display: flex;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            background: #f8f9fa;
            width: 100%;
            margin-top: 0.5rem;
            border-top: 1px solid rgba(0,0,0,0.1);
            border-radius: 0 0 50px 50px;
          }
          .nav-links.show { max-height: 1000px; transition: max-height 0.4s ease; }
          .dropdown-menu { position: static; box-shadow: none; border: none; transform: translateY(0); opacity: 1; visibility: visible; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
