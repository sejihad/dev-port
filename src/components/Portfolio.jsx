import {
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaFilm,
  FaHeartbeat,
  FaPlane,
  FaRobot,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Real Estate API Platform",
      file: "real_estate_api.py",
      code: ">>> api.get('/properties')",
      desc: "Complete REST API for property listings, agent management, and automated valuation models with ML-powered price predictions.",
      result: "50K+ listings",
      stats: "50K+",
      statsLabel: "Listings",
      tech: ["FastAPI", "PostgreSQL", "Redis"],
      icon: <FaChartLine size={28} />,
      color: "blue",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      title: "Social Media Analytics Dashboard",
      file: "social_analytics.py",
      code: ">>> analyze_sentiment(posts)",
      desc: "Real-time sentiment analysis and engagement tracking across Twitter, Instagram, and LinkedIn with automated reporting.",
      result: "1M+ posts analyzed",
      stats: "1M+",
      statsLabel: "Posts Analyzed",
      tech: ["Python", "Plotly", "NLP"],
      icon: <FaRobot size={28} />,
      color: "purple",
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    },
    {
      title: "E-commerce Price Intelligence",
      file: "price_scraper.py",
      code: ">>> scraper.crawl(urls)",
      desc: "Automated competitor price monitoring across 500+ retailers with dynamic pricing recommendations.",
      result: "2M products tracked",
      stats: "2M+",
      statsLabel: "Products Tracked",
      tech: ["Scrapy", "MongoDB", "Celery"],
      icon: <FaSearch size={28} />,
      color: "green",
      gradient: "linear-gradient(135deg, #22c55e, #14b8a6)",
    },
    {
      title: "HR Recruitment Automation",
      file: "hr_automation.py",
      code: ">>> match_candidates(job)",
      desc: "AI-powered resume screening, candidate matching, and interview scheduling system with LinkedIn integration.",
      result: "10K+ hires facilitated",
      stats: "10K+",
      statsLabel: "Hires Facilitated",
      tech: ["Django", "OpenAI", "Selenium"],
      icon: <FaUsers size={28} />,
      color: "orange",
      gradient: "linear-gradient(135deg, #f97316, #facc15)",
    },
    {
      title: "Healthcare Data Pipeline",
      file: "healthcare_pipeline.py",
      code: ">>> pipeline.run(batch)",
      desc: "HIPAA-compliant ETL system processing patient records, lab results, and insurance claims for analytics.",
      result: "5M records/day",
      stats: "5M+",
      statsLabel: "Records/Day",
      tech: ["Airflow", "Spark", "AWS"],
      icon: <FaHeartbeat size={28} />,
      color: "red",
      gradient: "linear-gradient(135deg, #ef4444, #f97316)",
    },
    {
      title: "Travel Booking Aggregator",
      file: "travel_aggregator.py",
      code: ">>> await fetch_prices()",
      desc: "Multi-source flight and hotel comparison API aggregating prices from 100+ travel providers in real-time.",
      result: "100+ providers",
      stats: "100+",
      statsLabel: "Providers",
      tech: ["FastAPI", "AsyncIO", "GraphQL"],
      icon: <FaPlane size={28} />,
      color: "cyan",
      gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
    },
    {
      title: "Streaming Platform Analytics",
      file: "streaming_analytics.py",
      code: ">>> model.predict(user)",
      desc: "User behavior tracking, content recommendation engine, and viewership prediction for OTT platforms.",
      result: "99.5% accuracy",
      stats: "99.5%",
      statsLabel: "Accuracy",
      tech: ["TensorFlow", "Kafka", "Redis"],
      icon: <FaFilm size={28} />,
      color: "pink",
      gradient: "linear-gradient(135deg, #ec4899, #c084fc)",
    },
    {
      title: "Music Rights Management",
      file: "music_royalties.py",
      code: ">>> distribute_royalties()",
      desc: "Automated royalty tracking, copyright detection, and payment distribution system for music publishers.",
      result: "$10M+ distributed",
      stats: "$10M+",
      statsLabel: "Distributed",
      tech: ["Python", "Blockchain", "APIs"],
      icon: <FaDatabase size={28} />,
      color: "indigo",
      gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
    },
    {
      title: "Financial Market Scanner",
      file: "market_scanner.py",
      code: ">>> scanner.find_signals()",
      desc: "Real-time stock screener with technical indicators, pattern recognition, and automated alert system.",
      result: "5K+ stocks monitored",
      stats: "5K+",
      statsLabel: "Stocks Monitored",
      tech: ["Python", "WebSocket", "TA-Lib"],
      icon: <FaChartBar size={28} />,
      color: "teal",
      gradient: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        {/* HEADER */}
        <div className="portfolio-header">
          <div className="badge">
            <span className="prompt">from</span> portfolio{" "}
            <span className="prompt">import</span> *
          </div>
          <h2>
            Featured <span className="gradient">Projects</span>
          </h2>
          <p>
            # A collection of projects spanning automation, data engineering,
            and AI
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${project.color}`}
              key={project.title}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* CARD HEADER */}
              <div className="project-header">
                <div className="file-info">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="filename">{project.file}</span>
                </div>
                <div className="stats-badge">
                  <span className="stats-number">{project.stats}</span>
                  <span className="stats-label">{project.statsLabel}</span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="project-body">
                <div
                  className="icon-bg"
                  style={{ background: project.gradient }}
                >
                  <div className="project-icon">{project.icon}</div>
                </div>

                <h3>{project.title}</h3>

                <div className="code-block">
                  <code>{project.code}</code>
                </div>

                <p className="description">{project.desc}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="project-footer">
                  <button className="view-btn">
                    View Project <span className="arrow">→</span>
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        {/* COMING SOON */}
        <div className="coming-soon">
          <div className="terminal-loader">
            <div className="loader-header">
              <span className="prompt">$</span>
              <span className="command">git push origin main</span>
            </div>
            <div className="loader-content">
              <div className="spinner"></div>
              <div className="loader-text">
                <span className="typing-text">
                  More projects coming soon...
                </span>
                <span className="cursor-blink">█</span>
              </div>
            </div>
            <div className="loader-footer">
              <span className="status">🚀 Building amazing things...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
