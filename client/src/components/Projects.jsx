import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Tic-Tac-Toe Game",
  image: "/TicTacToe.jpeg",
  github: "https://github.com/Janu2107/PRODIGY_WD_03.git",
    description:
      "An interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Players can choose X or O and compete against the computer, creating an engaging and competitive gaming experience."
  },

  {
    title: "Weather Application",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80",
    github: "https://github.com/Janu2107/PRODIGY_WD_05.git",
    description:
      "A responsive weather application developed using HTML, CSS, and JavaScript. Users can search for any city and receive real-time weather updates through API integration."
  },

  {
    title: "Tamil Nadu Tourism Website",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80",
    github: "https://github.com/Janu2107/CODSOFT_LANDINGPAGE.git",
    description:
      "A responsive tourism website showcasing the beauty, culture, and heritage of Tamil Nadu. Built with HTML, CSS, and JavaScript featuring modern UI design and smooth navigation."
  }
];

function Projects() {
  return (
    <section id="projects">

      <div className="projects-container">

        <div className="projects-header">
          <span>Portfolio</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >

              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  View Source Code
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;