import "./About.css";

function About() {

  const resumeLink = "/JANANI_P.pdf";

  return (
    <section id="about">
      <div className="about-container">

        <div className="section-header">
          <span>Get To Know</span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-image">
            <img
              src="/img.jpeg"
              alt="Janani"
            />
          </div>

          <div className="about-card">

            <h3 className="about-heading">
              Full Stack Developer
            </h3>

            <p className="about-text">
              I'm a passionate Full Stack Developer specializing in
              React, Node.js, Express and MongoDB. I enjoy building
              modern web applications with clean user experiences,
              scalable architecture and responsive designs.
            </p>

            <div className="about-stats">

              <div className="stat-box">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stat-box">
                <h3>5+</h3>
                <p>Certifications</p>
              </div>

              <div className="stat-box">
                <h3>10+</h3>
                <p>Technologies</p>
              </div>

            </div>

            <div className="about-buttons">

              <a
                href="#contact"
                className="primary-btn"
              >
                Hire Me
              </a>

              <a
                href={resumeLink}
                download
                className="secondary-btn"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;