// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer import
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sitemap from "./pages/sitemap";
import FeedbackForm from "./pages/FeedbackForm";
import Bathroom from "./components/Bathroom";
import Kitchen from "./components/Kitchen";
import LivingRoom from "./components/Livingroom";
import Bedroom from "./components/Bedroom";
import Contemporary from "./components/Contemporary";
import Elegant from "./components/elegant";
import Productpage from "./pages/Product";

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleWishlist(productId) {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  }

  function removeFromWishlist(productId) {
    setWishlist(prev => prev.filter(id => id !== productId));
  }

  return (
    <>
      <Navbar
        wishlist={wishlist}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/bathroom" element={<Bathroom />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/contemporary" element={<Contemporary />} />
        <Route path="/elegant" element={<Elegant />} />
        <Route path="/productpage" element={<Productpage />} />


        
      </Routes>

      <Footer /> {/* Footer added here */}
    </>
  );
}

export default App;
