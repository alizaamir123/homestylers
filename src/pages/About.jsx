const About = () => {
  return (
    <main className="main">
            {/* ======= Banner Section ======= */}
      <section className="contact-banner" style={{ paddingTop: '80px' }}>
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="text-white">About Us</h1>
          <p>Turning Houses into Dream Homes Since 2010</p>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <div
                className="intro-content"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="section-badge">
                  <i className="bi bi-house-heart"></i>
                  <span>Your Trusted Home Styling Experts</span>
                </div>
                <h2>Styling Your Dream Home Since 2010</h2>
                <p className="lead-text">
                  On our website, you’ll find stylish and modern designs crafted
                  to give your home a fresh and unique identity. Whether you
                  want to create a cozy living room or add an elegant touch to
                  your bedroom, our home styling ideas and products cater to all
                  your needs.
                </p>
                <p>
                  Our mission is to help transform your house into the home of
                  your dreams, where every corner reflects your personality and
                  taste.
                </p>

                <div
                  className="founder-highlight"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="founder-image">
                    <img
                      src="assests/img/person/person-m-7.webp"
                      alt="Founder"
                      className="img-fluid"
                    />
                  </div>
                  <div className="founder-info">
                    <blockquote>
                      "With years of experience in home styling, we are
                      dedicated to bringing your dream space to life with
                      creativity and care."
                    </blockquote>
                    <div className="founder-details">
                      <h5>Michael Thompson</h5>
                      <span>Founder &amp; CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="visual-section"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                <div className="main-image" style={{ position: "relative" }}>
                  <img
                    src="assests/img/real-estate/property-exterior-7.webp"
                    alt="Luxury Development"
                    className="img-fluid"
                  />
                  <div className="experience-badge">
                    <div className="badge-number">14+</div>
                    <div className="badge-text">Years of Excellence</div>
                  </div>
                </div>
                <div className="overlay-image">
                  <img
                    src="assests/img/real-estate/property-interior-6.webp"
                    alt="Interior Design"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div
            className="achievements-grid"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 mb-4">
                <div
                  className="achievement-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="achievement-icon">
                    <i className="bi bi-key"></i>
                  </div>
                  <div className="achievement-number">2850+</div>
                  <div className="achievement-label">Properties Sold</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div
                  className="achievement-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="achievement-icon">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <div className="achievement-number">98%</div>
                  <div className="achievement-label">Client Satisfaction</div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4">
                <div
                  className="achievement-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="achievement-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="achievement-number">35</div>
                  <div className="achievement-label">Cities Covered</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                <div
                  className="achievement-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="achievement-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="achievement-number">127</div>
                  <div className="achievement-label">Industry Awards</div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div
            className="timeline-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-header text-center mb-5">
                  <h3>Our Journey of Excellence</h3>
                  <p>
                    Since 2010, we have been passionately transforming houses
                    into stylish, personalized homes. Our commitment to quality,
                    creativity, and customer satisfaction has made us a trusted
                    name in home styling.
                  </p>
                </div>

                <div className="timeline">
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="450"
                  >
                    <div className="timeline-year">2010</div>
                    <div className="timeline-content">
                      <h4>Company Founded</h4>
                      <p>Started with a passion for home styling and design.</p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-left"
                    data-aos-delay="500"
                  >
                    <div className="timeline-year">2015</div>
                    <div className="timeline-content">
                      <h4>1000 Homes Styled</h4>
                      <p>
                        Reached a milestone of styling 1000 beautiful homes.
                      </p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-right"
                    data-aos-delay="550"
                  >
                    <div className="timeline-year">2020</div>
                    <div className="timeline-content">
                      <h4>Digital Consultations Launched</h4>
                      <p>Started offering online styling advice to clients.</p>
                    </div>
                  </div>
                  <div
                    className="timeline-item"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <div className="timeline-year">2024</div>
                    <div className="timeline-content">
                      <h4>Regional Expansion</h4>
                      <p>Expanded services to new areas and more clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Preview */}
          <div className="team-preview" data-aos="fade-up" data-aos-delay="450">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
              <h3>Meet Our Expert Team</h3>
<p className="team-description">
  Our dedicated team of home styling professionals combines creativity and experience to bring your vision to life. Together, we craft spaces that are both beautiful and functional.
</p>


                <div className="team-grid">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div
                        className="team-member"
                        data-aos="flip-up"
                        data-aos-delay="500"
                      >
                        <div className="member-image">
                          <img
                            src="assests/img/real-estate/agent-5.webp"
                            alt="Team Member"
                            className="img-fluid"
                          />
                        </div>
                        <div className="member-info">
                         <h5>Sarah Martinez</h5>
<span>Senior Home Stylist</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div
                        className="team-member"
                        data-aos="flip-up"
                        data-aos-delay="550"
                      >
                        <div className="member-image">
                          <img
                            src="assests/img/real-estate/agent-2.webp"
                            alt="Team Member"
                            className="img-fluid"
                          />
                        </div>
                        <div className="member-info">
                         <h5>David Chen</h5>
<span>Lead Designer</span>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="team.html" className="view-team-btn">
                  View Full Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
