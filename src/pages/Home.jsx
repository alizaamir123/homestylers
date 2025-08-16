import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import PremiumCollection from "../components/PremiumCollection";


const Homesection = ({
  wishlist,
  toggleWishlist,
  sidebarOpen,
  setSidebarOpen,
  removeFromWishlist,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  const posts = [
    {
      id: 1,
      imgSrc: "/assests/img/blog/blog-post-1.webp",
      date: "December 12",
      title: "Eum ad dolor et. Autem aut fugiat debitis",
      link: "blog-details.html",
      delay: 100,
    },
    {
      id: 2,
      imgSrc: "/assests/img/blog/blog-post-2.webp",
      date: "July 17",
      title: "Et repellendus molestiae qui est sed omnis",
      link: "blog-details.html",
      delay: 200,
    },
    {
      id: 3,
      imgSrc: "/assests/img/blog/blog-post-3.webp",
      date: "September 05",
      title: "Quia assumenda est et veritati tirana ploder",
      link: "blog-details.html",
      delay: 300,
    },
  ];

  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="hero-content">
              <div className="row align-items-center">
                {/* Left Text */}
                <div className="col-lg-6 hero-text" data-aos="fade-right" data-aos-delay="200">
                  <div className="hero-badge">
                    <i className="bi bi-star-fill"></i>
                    <span>Home Styler Properties</span>
                  </div>
                  <h1>Discover Your Perfect Home in the Heart of the City</h1>
                  <p>
                    HomeStyler is an interior design platform that allows users to create, customize, and visualize their home or office layouts in both 2D and 3D.
                    With this tool, you can easily experiment with furniture, décor items, and color schemes to get a realistic preview of the final design.
                  </p>

                  <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
                    <div className="row">
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>2847+</h3>
                          <p>Properties Listed</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>156+</h3>
                          <p>Verified Agents</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <h3>98%</h3>
                          <p>Client Satisfaction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Images */}
                <div className="col-lg-6 hero-images" data-aos="fade-left" data-aos-delay="400">
                  <div className="image-stack">
                    {/* Main Image */}
                    <div className="main-image">
                      <img
                        src="/assests/img/real-estate/property-exterior-3.webp"
                        alt="Luxury Property"
                        className="img-fluid"
                      />
                      <div className="property-tag">
                        <span className="price">$850,000</span>
                        <span className="type">Featured</span>
                      </div>
                    </div>

                    {/* Secondary Image */}
                    <div className="secondary-image">
                      <img
                        src="/assests/img/real-estate/property-interior-7.webp"
                        alt="Property Interior"
                        className="img-fluid"
                      />
                    </div>

                    {/* Floating Card */}
                    <div className="floating-card">
                      <div className="agent-info">
                        <img
                          src="/assests/img/real-estate/agent-4.webp"
                          alt="Agent"
                          className="agent-avatar"
                        />
                        <div className="agent-details">
                          <h5>Sarah Johnson</h5>
                          <p>Top Home Styler</p>
                          <div className="rating">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <span>4.9 (127 reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Collection */}
        <PremiumCollection
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          removeFromWishlist={removeFromWishlist}
        />
    <br /><br /><br />

        <section
      className="hero-banner relative text-white rounded-lg shadow-md"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-content max-w-3xl mx-auto text-center py-32 px-8 sm:py-24 sm:px-6 xs:py-16 xs:px-4">
        <h1 className="banner-title text-5xl sm:text-4xl xs:text-3xl font-bold mb-6 drop-shadow-lg">
          HOME STYLING FOR EVERY LIFESTYLE
        </h1>
        <p className="banner-text text-xl sm:text-lg xs:text-base leading-relaxed mb-10 drop-shadow-md">
          Transform your living spaces with versatile styling ideas for every 
          taste.<br /> From modern minimalist to cozy traditional, discover tips and
          inspiration to <br /> make your home beautiful and functional for your
          unique lifestyle.
        </p>
      </div>
    </section><br /><br /><br /><br />


<div className="max-w-7xl mx-auto">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-red-custom text-3xl md:text-4xl font-bold uppercase tracking-wide title-underline inline-block">
      Our Reviews
    </h2>
  </div>

  {/* Reviews Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">

    {/* Review Card 1 */}
    <div className="bg-card-gray rounded-lg p-8 text-center relative">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-orange-custom bg-gray-600 flex items-center justify-center">
          <i className="fas fa-user text-white text-xl"></i>
        </div>
      </div>
      <h3 className="text-green-custom font-bold text-lg uppercase tracking-wide mb-4">
        Steve Smith
      </h3>
      <p className="text-black text-sm leading-relaxed mb-7 min-h-[60px] flex items-center justify-center">
        Loved the design and attention to detail. The team truly understood my vision and brought it to life!
      </p>
      <div className="flex justify-center space-x-1">
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
      </div>
    </div>

    {/* Review Card 2 */}
    <div className="bg-card-gray rounded-lg p-8 text-center relative">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-orange-custom bg-gray-600 flex items-center justify-center">
          <i className="fas fa-user text-white text-xl"></i>
        </div>
      </div>
      <h3 className="text-green-custom font-bold text-lg uppercase tracking-wide mb-4">
        Michael Smith
      </h3>
      <p className="text-black text-sm leading-relaxed mb-7 min-h-[60px] flex items-center justify-center">
        Great experience overall. The designers were professional, but I expected faster delivery.
      </p>
      <div className="flex justify-center space-x-1">
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="far fa-star star-orange"></i>
      </div>
    </div>

    {/* Review Card 3 */}
    <div className="bg-card-gray rounded-lg p-8 text-center relative">
      <div className="mb-6">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-orange-custom bg-gray-600 flex items-center justify-center">
          <i className="fas fa-user text-white text-xl"></i>
        </div>
      </div>
      <h3 className="text-green-custom font-bold text-lg uppercase tracking-wide mb-4">
        M. Usman
      </h3>
      <p className="text-black text-sm leading-relaxed mb-7 min-h-[60px] flex items-center justify-center">
        The design was good, but the communication could have been better. Still happy with the final result.
      </p>
      <div className="flex justify-center space-x-1">
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="fas fa-star star-orange"></i>
        <i className="far fa-star star-orange"></i>
      </div>
    </div>

  </div>
</div><br /><br />

 <div className="features">
      <div className="container">
        <div className="section-title">
          <h2>Professional Design Features</h2>
          <p>Powerful tools to help you create beautiful interiors</p>
        </div>

        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cube"></i>
            </div>
            <h3>3D Room Visualization</h3>
            <p>
              Create photorealistic 3D renderings of your space with our advanced
              visualization technology.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>AR Furniture Placement</h3>
            <p>
              See how furniture looks in your actual room using augmented reality
              technology.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-paint-roller"></i>
            </div>
            <h3>Style Matching</h3>
            <p>
              Discover your perfect interior style with our intelligent style
              matching algorithm.
            </p>
          </div>
        </div>
      </div>
    </div><br />

<section className="style-quiz py-32 bg-white text-center">
  <div className="quiz-container container mx-auto max-w-3xl bg-gradient-to-br from-teal-50 to-gray-100 rounded-2xl p-32 shadow-lg min-h-[900px]">
    {/* Heading with extra top margin */}
    <h2 className="quiz-title text-3xl font-bold mb-8 mt-12 text-gray-800">
      Discover Your Design Style
    </h2>
    <p className="quiz-description text-lg text-gray-600 mb-12">
      Explore our interior design styles to find what suits your taste
    </p>

    <div className="style-options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Modern"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Modern</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>

      {/* Card 2 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Industrial"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Industrial</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>

      {/* Card 3 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Scandinavian"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Scandinavian</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>

      {/* Card 4 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Bohemian"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Bohemian</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>

      {/* Card 5 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Traditional"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Traditional</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>

      {/* Card 6 */}
      <div className="style-option flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-md min-h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
          alt="Minimalist"
          className="w-full h-48 object-cover"
        />
        <h4 className="mt-4 mb-2 text-gray-800 font-semibold">Minimalist</h4>
        <a
          href="#"
          className="detail-button inline-block px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium mb-4 hover:bg-teal-500 transition-all duration-300"
        >
          View Detailed
        </a>
      </div>
    </div>
  </div>
</section>




    </main>
    </>
  );
};

export default Homesection;
