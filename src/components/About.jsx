import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./About.css";

export default function About() {
  const skills = [
    {
      key: "python_skills",
      label: "Python & Automation",
      val: 95,
    },
    {
      key: "scraping_exp",
      label: "Web Scraping (Scrapy, Selenium)",
      val: 93,
    },
    {
      key: "data_science",
      label: "Data Science & Analytics",
      val: 88,
    },
    {
      key: "ml_expertise",
      label: "Machine Learning",
      val: 82,
    },
    {
      key: "web_frameworks",
      label: "Django & Flask",
      val: 85,
    },
  ];

  return (
    <section className="about" id="about">
      {/* LEFT */}
      <div className="about-left">
        <div className="about-top">
          <div className="about-badge">def about_me():</div>
        </div>

        <h2 className="about-title">
          Python Developer & <span>Data Enthusiast</span>
        </h2>

        <div className="code-box">
          <div className="code-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">developer.py</span>
          </div>

          <pre className="code">
            <span className="keyword">class</span>{" "}
            <span className="class-name">Developer</span>:{"\n    "}
            <span className="property">name</span> ={" "}
            <span className="string">"Kawsar Ahmed"</span>
            {"\n    "}
            <span className="property">location</span> ={" "}
            <span className="string">"Dhaka, Bangladesh"</span>
            {"\n    "}
            <span className="property">skills</span> ={" "}
            <span className="array">["Python", "Automation"]</span>
          </pre>
        </div>

        <p className="about-text">
          From building custom web scrapers that collect millions of data points
          to creating automated workflows that save hundreds of hours, I turn
          complex data challenges into elegant solutions.
        </p>

        <div className="about-actions">
          <button className="resume-btn">⬇ Download Resume</button>

          <div className="socials">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="about-footer">
          return "let's build something amazing!"
        </div>
      </div>

      {/* RIGHT */}
      <div className="about-right">
        <div className="skills-box">
          {/* header */}
          <div className="skills-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">skills.py</span>
          </div>

          <div className="skills-content">
            <p className="class-title">class TechnicalSkills:</p>

            {skills.map((skill) => (
              <div key={skill.key} className="skill-block">
                <div className="skill-code">
                  <span className="self">self.</span>
                  <span className="key">{skill.key}</span>
                  <span> =</span>
                </div>

                <div className="skill-label">
                  # {skill.label}
                  <span>{skill.val}%</span>
                </div>

                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${skill.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
