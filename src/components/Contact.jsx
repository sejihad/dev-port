import { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* HEADER */}
        <div className="contact-header">
          <div className="badge">
            <span className="prompt">$</span> echo "Let's Connect"
          </div>
          <h2>
            Let's <span className="gradient">Build Together</span>
          </h2>
          <p>
            Ready to transform your ideas into powerful automation solutions?
          </p>
        </div>

        <div className="contact-wrapper">
          {/* LEFT SIDE */}
          <div className="contact-left">
            <div className="left-content">
              <h3>Got a project in mind?</h3>
              <p className="description">
                Whether you need a web scraper, automation system, or data
                pipeline — I'm here to help turn your ideas into reality.
              </p>

              {/* INFO CARDS */}
              <div className="contact-cards">
                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaEnvelope className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Email me at</p>
                    <h4>kawsar@kawsarlog.com</h4>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Based in</p>
                    <h4>
                      Dhaka, Bangladesh{" "}
                      <span className="remote">(Remote Worldwide)</span>
                    </h4>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrapper">
                    <FaClock className="card-icon" />
                  </div>
                  <div className="card-info">
                    <p>Response time</p>
                    <h4 className="green">Usually within 24 hours</h4>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              {/* <div className="social-links">
                <a href="#" className="social-icon">
                  <FaGithub />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-icon">
                  <FaTwitter />
                </a>
              </div> */}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <span className="form-badge">✉️ Send a message</span>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-border"></span>
                </div>

                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div className="input-group">
                <label>Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  <option value="Web Automation">Web Automation</option>
                  <option value="Data Scraping">Data Scraping</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="API Development">API Development</option>
                  <option value="ETL Pipeline">ETL Pipeline</option>
                </select>
                <span className="input-border"></span>
              </div>

              <div className="input-group">
                <label>Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, timeline, and budget..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <span className="input-border"></span>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane className="btn-icon" />
                Send Message
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
