import "./Skills.css";

import { FaAward, FaBook, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiScrapy,
  SiSelenium,
  SiTensorflow,
} from "react-icons/si";
export default function Skills() {
  const skills = [
    {
      name: "Python",
      sub: "$ import automation as magic",
      val: 95,
      color: "yellow",
      icon: <SiPython size={32} />,
    },
    {
      name: "Scrapy",
      sub: "$ scrapy crawl infinite_data",
      val: 93,
      color: "green",
      icon: <SiScrapy size={32} />,
    },
    {
      name: "Selenium",
      sub: "$ driver.execute('dreams')",
      val: 90,
      color: "blue",
      icon: <SiSelenium size={32} />,
    },
    {
      name: "Pandas",
      sub: "$ df.transform(chaos, order)",
      val: 92,
      color: "pink",
      icon: <SiPandas size={32} />,
    },
    {
      name: "Django",
      sub: "$ views.deploy(production)",
      val: 88,
      color: "teal",
      icon: <SiDjango size={32} />,
    },
    {
      name: "TensorFlow",
      sub: "$ model.predict(future)",
      val: 85,
      color: "orange",
      icon: <SiTensorflow size={32} />,
    },
    {
      name: "PostgreSQL",
      sub: "$ SELECT * FROM success",
      val: 87,
      color: "cyan",
      icon: <SiPostgresql size={32} />,
    },
    {
      name: "APIs",
      sub: "$ REST.connect(everything)",
      val: 91,
      color: "purple",
      icon: <SiFastapi size={32} />,
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* HEADER */}
        <div className="skills-header">
          <div className="badge">⚡ My Tech Arsenal</div>
          <h2>
            &lt;Skills &amp; <span className="gradient-text">Expertise</span>
            /&gt;
          </h2>
          <p>
            The tools and technologies I use to transform ideas into powerful
            automations
          </p>
        </div>

        {/* MAIN BOX */}
        <div className="skills-box">
          <div className="skills-topbar">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="topbar-title">skills.py — kawsarlog</span>
            <div className="topbar-icons">
              <span>✕</span>
              <span>─</span>
              <span>□</span>
            </div>
          </div>

          {/* GRID */}
          <div className="skills-grid">
            {skills.map((s, index) => (
              <div
                className="skill-card"
                key={s.name}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-top">
                  <div className="icon-wrapper">
                    <div className="icon">{s.icon}</div>
                  </div>

                  <div className="skill-text">
                    <h4>{s.name}</h4>
                    <p>{s.sub}</p>
                  </div>

                  <div className="percent">
                    <span className="percent-number">{s.val}%</span>
                  </div>
                </div>

                <div className="bar-container">
                  <div className="bar">
                    <div
                      className={`fill ${s.color}`}
                      style={{ width: `${s.val}%` }}
                    >
                      <div className="glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TERMINAL */}
          <div className="terminal-output">
            <div className="terminal-header">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">npm run skill-check</span>
              <span className="terminal-cursor"></span>
            </div>
            <div className="terminal-lines">
              <p className="terminal-line">
                <span className="success">✔</span> All 8 skills loaded
                successfully
              </p>
              <p className="terminal-line highlight">
                <span className="arrow">→</span> Ready to automate the
                impossible
              </p>
              <p className="terminal-line typing">
                <span className="prompt">$</span> python main.py --optimize
                <span className="cursor-blink"></span>
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <FaLaptopCode size={32} />
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Programming Languages</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaBook size={32} />
            </div>
            <div className="stat-number">8+</div>
            <div className="stat-label">Frameworks & Libraries</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaRocket size={32} />
            </div>
            <div className="stat-number">1500+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaAward size={32} />
            </div>
            <div className="stat-number">5+ yrs</div>
            <div className="stat-label">Industry Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
