import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload
} from "react-icons/fa";

const PROFILE_URL = "/img.jpeg";

function Hero() {
  return (
    <section id="hero">

      <div className="hero-bg-circle"></div>

      <div className="hero-container">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1>
            Hi, I'm <span>Janani</span>
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p>
            Passionate MERN Stack Developer focused on
            building scalable, responsive and modern web
            applications with exceptional user experiences.
          </p>

          <div className="hero-buttons">

            <a
              href="/Janani_Resume.pdf"
              download
              className="btn-primary"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#projects"
              className="btn-secondary"
            >
              View Projects
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://gitHub.com/Janu2107"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/janani-muniyasamy-08887a2a5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src={PROFILE_URL}
            alt="Janani"
            className="profile-image"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;