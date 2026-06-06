import { useEffect, useState } from "react";
import {
  FaBolt,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { SiDjango, SiPython } from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import "./Intro.css";

export default function Intro() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "I architect digital automatons.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex]);

  // Smooth scroll to contact
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="intro" id="about">
      <div className="intro-container">
        {/* LEFT IMAGE */}
        <div className="intro-left">
          <div className="image-box">
            <div className="image-header">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="image-title">profile.jpg</span>
              <div className="header-icons">
                <span>✕</span>
                <span>─</span>
                <span>□</span>
              </div>
            </div>
            <div className="image-wrapper">
              <img src={profilePic} alt="MD Rayhan" />
              <div className="image-overlay"></div>
              <div className="tech-badges">
                <span className="tech-badge">
                  <SiPython /> Python
                </span>
                <span className="tech-badge">
                  <SiDjango /> Django
                </span>
              </div>
            </div>
            <div className="image-footer">
              <span className="status-dot"></span>
              <span className="status-text">Available for work</span>
              <span className="location-text">
                <FaGlobe /> Dhaka, BD
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="intro-right">
          <div className="top-line">
            <div className="terminal-prompt">
              <span className="prompt-sign">&gt;_</span>
              <span className="prompt-text">SYSTEM: ONLINE</span>
            </div>
            <div className="badge">
              <span className="badge-icon">
                <FaStar />
              </span>
              <span>Python Developer</span>
            </div>
          </div>

          <h1>
            MD <span className="gradient-name">Rayhan</span>
          </h1>

          {/* TAGS */}
          <div className="tags">
            <span className="tag">
              <SiPython className="tag-icon" /> PYTHON ARCHITECT
            </span>
            <span className="tag">
              <FaBolt className="tag-icon" /> AUTOMATION EXPERT
            </span>
            <span className="tag">
              <FaCode className="tag-icon" /> DATA ENGINEER
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="desc-box">
            <div className="desc-header">
              <span className="quote-icon">"</span>
              <span className="desc-title">about.py</span>
              <span className="desc-version">v2.0.0</span>
            </div>
            <p className="typed-line">
              {typedText}
              {!isTypingComplete && <span className="cursor-blink">█</span>}
            </p>
            <p className="desc-continue">
              From intricate web scrapers harvesting millions of data points to
              autonomous agents that work eternally. I turn chaos into
              structured data and repetitive toil into specialized algorithms.
            </p>
          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat-card">
              <div className="stat-icon">
                <FaCode />
              </div>
              <div className="stat-info">
                <h3 className="counter">1500+</h3>
                <p>PROJECTS</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaBolt />
              </div>
              <div className="stat-info">
                <h3 className="counter">99.9%</h3>
                <p>EFFICIENCY</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaGlobe />
              </div>
              <div className="stat-info">
                <h3 className="counter">24/7</h3>
                <p>AVAILABLE</p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="action-buttons">
            <button className="cta-primary" onClick={scrollToContact}>
              <span>Initiate Protocol</span>
              <span className="button-arrow">→</span>
            </button>
            <button className="cta-secondary">
              <FaDownload className="btn-icon" />
              <span>Resume</span>
            </button>
          </div>

          {/* LINKS */}
          <div className="links">
            <div className="links-header">
              <span className="links-icon">//</span>
              <span className="links-title">LINKED_SYSTEMS</span>
              <span className="links-count">(3)</span>
            </div>

            <div className="chips">
              <span className="chip">
                <span className="chip-dot"></span>
                TocoLabs
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Bigibyte
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Size Chart Maker
              </span>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="socials">
            <a
              href="https://github.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:rayhan@example.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
