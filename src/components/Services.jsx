import {
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaExchangeAlt,
  FaPlug,
  FaRobot,
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Web Automation",
      code: "def automate_task()",
      desc: "Automate repetitive tasks, form submissions, and data entry with Python scripts that run 24/7.",
      result: 'return "success=True"',
      tech: ["Selenium", "Puppeteer", "Playwright"],
      icon: <FaRobot size={32} />,
      file: "web_automation.py",
      color: "blue",
    },
    {
      title: "Data Scraping",
      code: "def scrape_data()",
      desc: "Extract valuable data from any website at scale. From e-commerce to social media, I handle it all.",
      result: 'return "1M+ records"',
      tech: ["Scrapy", "BeautifulSoup", "APIs"],
      icon: <FaDatabase size={32} />,
      file: "data_scraping.py",
      color: "green",
    },
    {
      title: "Data Analysis",
      code: "def analyze()",
      desc: "Transform raw data into actionable insights with advanced analytics and visualization.",
      result: 'return "insights[]"',
      tech: ["Pandas", "NumPy", "Matplotlib"],
      icon: <FaChartLine size={32} />,
      file: "data_analysis.py",
      color: "purple",
    },
    {
      title: "Machine Learning",
      code: "def train_model()",
      desc: "Build predictive models and AI solutions to automate decision-making and find patterns.",
      result: 'return "accuracy=99%"',
      tech: ["TensorFlow", "Scikit-learn", "PyTorch"],
      icon: <FaBrain size={32} />,
      file: "machine_learning.py",
      color: "orange",
    },
    {
      title: "API Development",
      code: "def create_api()",
      desc: "Create robust REST APIs and backend services to power your applications.",
      result: 'return "status=200"',
      tech: ["Django", "Flask", "FastAPI"],
      icon: <FaPlug size={32} />,
      file: "api_development.py",
      color: "cyan",
    },
    {
      title: "ETL Pipelines",
      code: "def run_pipeline()",
      desc: "Design and implement data pipelines that extract, transform, and load data efficiently.",
      result: 'return "complete ✓"',
      tech: ["Airflow", "Luigi", "dbt"],
      icon: <FaExchangeAlt size={32} />,
      file: "etl_pipelines.py",
      color: "red",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* HEADER */}
        <div className="services-header">
          <div className="badge">
            <span className="prompt">$</span> class Services:
          </div>
          <h2>
            What I <span className="gradient">Build</span>
          </h2>
          <p># Turning complex problems into elegant solutions</p>
        </div>

        {/* CARDS GRID */}
        <div className="services-grid">
          {services.map((s, index) => (
            <div
              className={`service-card ${s.color}`}
              key={s.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* TOP BAR */}
              <div className="card-topbar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file">{s.file}</span>
                <div className="topbar-icons">
                  <span>✕</span>
                  <span>─</span>
                  <span>□</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="card-body">
                <div className="icon-wrapper">
                  <div className="icon">{s.icon}</div>
                </div>

                <h3>{s.title}</h3>
                <p className="code-line">
                  <span className="keyword">def</span> {s.code}:
                </p>

                <p className="desc">{s.desc}</p>

                <div className="result-box">
                  <span className="result-arrow">→</span>
                  <span className="result">{s.result}</span>
                </div>

                <div className="tags">
                  {s.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TERMINAL */}
        <div className="services-terminal">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">python deploy_services.py --all</span>
          </div>
          <div className="terminal-line success">
            <span className="arrow">✔</span>
            <span>6 services deployed successfully</span>
          </div>
          <div className="terminal-line typing">
            <span className="prompt">$</span>
            <span className="command">Ready to automate your business</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
