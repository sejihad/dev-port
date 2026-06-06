import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "MD Rayhan",
  "Contact",
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check if we're on home page
  const isHomePage = location.pathname === "/";

  const scrollTo = (id) => {
    if (isHomePage) {
      const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on home page, navigate to home first then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setActive(id);
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActive("Home");
    setMenuOpen(false);
  };

  const handleNavClick = (link) => {
    if (link === "Home") {
      handleLogoClick();
    } else if (link === "MD Rayhan") {
      navigate("/about");
      setActive(link);
      setMenuOpen(false);
    } else {
      scrollTo(link);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* LOGO - React Router Link */}
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <div className="logo-icon">&gt;_</div>
            <div className="logo-text">
              <span className="logo-name">MD Rayhan</span>
              <span className="logo-sub">Software Developer</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav>
            <ul className="nav">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  {link === "Home" ? (
                    <Link
                      to="/"
                      className={`nav-btn ${active === link ? "active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </Link>
                  ) : link === "MD Rayhan" ? (
                    <Link
                      to="/about"
                      className={`nav-btn ${active === link ? "active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </Link>
                  ) : (
                    <button
                      className={`nav-btn ${active === link ? "active" : ""}`}
                      onClick={() => handleNavClick(link)}
                    >
                      {link}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT GROUP */}
          <div className="right-group">
            {/* Theme Toggle - সরাসরি এখানে */}
            <ThemeToggle />

            {/* Hire Me */}
            <button className="hire-btn" onClick={() => scrollTo("Contact")}>
              Hire Me
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`mobile-nav-btn ${active === link ? "active" : ""}`}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          ))}
          <button className="mobile-hire" onClick={() => scrollTo("Contact")}>
            Hire Me
          </button>
        </div>
      )}

      {/* spacer so content doesn't hide behind fixed header */}
      <div style={{ height: 68 }} />
    </>
  );
}
