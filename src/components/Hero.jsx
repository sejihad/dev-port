import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="badge">✨ Available for freelance work</div>

        <h1>
          I'm MD Kawsar <br />
          <span>Python</span> Developer
        </h1>

        <p>
          I transform complex data challenges into{" "}
          <b>elegant automation solutions</b> that scale your business.
        </p>

        <div className="location">● Based in Dhaka, Bangladesh</div>

        <div className="skills">
          {[
            "Python",
            "Scrapy",
            "Pandas",
            "Selenium",
            "Django",
            "TensorFlow",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="buttons">
          <button className="primary">Let's Talk →</button>
          <button className="secondary">View Projects</button>
        </div>

        <div className="stats">
          <div>
            <h2>1500+</h2>
            <p>Projects</p>
          </div>
          <div>
            <h2>950+</h2>
            <p>Clients</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <p>$ python ml_model.py</p>
        </div>

        <div className="code">
          <pre>
            <span className="keyword">class</span>{" "}
            <span className="class-name">Developer</span>:{"\n    "}
            <span className="property">name</span> ={" "}
            <span className="string">"MD Kawsar"</span>
            {"\n    "}
            <span className="property">focus</span> ={" "}
            <span className="array">["Automation", "Data", "AI"]</span>
            {"\n    "}
            <span className="property">experience</span> ={" "}
            <span className="function">float</span>(
            <span className="string">'inf'</span>)
          </pre>
        </div>
      </div>
    </section>
  );
}
