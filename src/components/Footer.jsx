import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BOTTOM BAR - Clean Version */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <span className="prompt-sign">→</span>
            <span className="path">~/Rayhan</span>
            <span className="separator">|</span>
            <span className="copyright">© {currentYear}</span>
          </div>

          <div className="bottom-center">
            <div className={`animated-text ${isVisible ? "slide-in" : ""}`}>
              <span className="dollar">$</span>
              <span className="echo">echo</span>
              <span className="quote">"</span>
              <span className="typing-text">Code. Create. Innovate.</span>
              <span className="quote">"</span>
            </div>
          </div>

          <div className="bottom-right">
            <span className="heart">
              <FaHeart />
            </span>
            <span className="copyright-text">Rayhan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
