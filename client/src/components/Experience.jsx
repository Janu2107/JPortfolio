import "./Experience.css";

function Experience() {
  return (
    <section id="experience">

      <div className="experience-container">

        <div className="experience-header">
          <span>My Journey</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                2024
              </span>

              <h3>
                UI/UX Designer - Intern
              </h3>

              <p>
                Designed UI/UX for Coffee Shop Application, creating wireframes and prototypes to enhance user experience and streamline operations.

              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                2025 - Present
              </span>

              <h3>
                Full Stack Developer - Intern
              </h3>

              <p>
                Developed the certificate management UI and verification
features, integrating React frontend, Node.js/Express backend,
MongoDB storage, and dynamic certificate
generation/download functionality to provide a seamless user
experience.

              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                2026 - Present
              </span>

              <h3>
                Software Developer - Intern
              </h3>

              <p>
                VitalGuard is a Java-based health monitoring system that analyzes patient
vitals, calculates risk levels, detects health trends, and generates
intelligent health alerts.
Designed and developed 18 Modules, including risk analysis, trend
detection, report generation, security controls, audit logging, health
monitoring, metrics tracking, and automated testing.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;