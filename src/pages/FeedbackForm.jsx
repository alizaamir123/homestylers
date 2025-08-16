import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Feedback.css"; // We’ll move your custom CSS here

const FeedbackForm = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    feedbackType: "General Feedback",
    message: "",
    contactMe: false,
  });
  const [btnText, setBtnText] = useState(
    <span>
      <i className="fas fa-paper-plane me-2"></i> Submit Feedback
    </span>
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! We appreciate your time.");
    setFormData({
      username: "",
      email: "",
      feedbackType: "General Feedback",
      message: "",
      contactMe: false,
    });
    setBtnText(
      <span>
        <i className="fas fa-check me-2"></i> Thank You!
      </span>
    );
    setTimeout(() => {
      setBtnText(
        <span>
          <i className="fas fa-paper-plane me-2"></i> Submit Feedback
        </span>
      );
    }, 2000);
  };

  return (
    <>
          <section className="contact-banner" style={{ paddingTop: '80px' }}>
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="text-white">Feedback</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>
    <br /><br /><br />
    <div className="container">
      <div className="feedback-container animate_animated animate_fadeInUp">
        <div className="feedback-header">
          <h2>
            <i className="fas fa-comment-alt me-2"></i>Share Your Feedback
          </h2>
          <p className="mb-0">We value your opinion!</p>
        </div>

        <div className="feedback-body">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-4 position-relative">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                required
              />
              <label htmlFor="username">Username</label>
              <i className="fas fa-user floating-icon"></i>
            </div>

            <div className="form-floating mb-4 position-relative">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
              <label htmlFor="email">Email Address</label>
              <i className="fas fa-envelope floating-icon"></i>
            </div>

            <div className="mb-4">
              <label htmlFor="feedbackType" className="form-label">
                Feedback Type
              </label>
              <select
                className="form-select"
                id="feedbackType"
                name="feedbackType"
                value={formData.feedbackType}
                onChange={handleChange}
              >
                <option>General Feedback</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Complaint</option>
                <option>Compliment</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control message-box"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Please share your thoughts with us..."
                required
              ></textarea>
            </div>

            <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="contactMe"
                name="contactMe"
                checked={formData.contactMe}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="contactMe">
                Contact me about this feedback
              </label>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-purple btn-lg pulse-animation"
              >
                {btnText}
              </button>
            </div>
          </form>
        </div>
      </div>

      <button
        className="btn btn-dark theme-toggle rounded-circle"
        onClick={handleThemeToggle}
        title="Toggle Dark Mode"
      >
        {theme === "dark" ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
    </div>
    </>
  );
};

export default FeedbackForm;