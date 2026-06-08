import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJsSquare
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React.js",
    level: "Advanced"
  },
  {
    icon: <FaJsSquare />,
    name: "JavaScript",
    level: "Advanced"
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
    level: "Intermediate"
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    level: "Intermediate"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    level: "Intermediate"
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    level: "Advanced"
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
    level: "Intermediate"
  },
  {
    icon: <FaPython />,
    name: "Python",
    level: "Intermediate"
  }
];

function Skills() {
  return (
    <section id="skills">

      <div className="skills-container">

        <div className="skills-header">
          <span>Technical Skills</span>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card"
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>
                {skill.name}
              </h3>

              <p>
                {skill.level}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;