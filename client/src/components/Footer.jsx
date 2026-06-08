import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      <div className="footer-container">

        <h2 className="footer-logo">
          Janani.
        </h2>

        <p className="footer-description">
          Full Stack Developer passionate about building
          modern web applications and creating seamless
          user experiences.
        </p>

        <div className="footer-social">

          <a
            href="https://gitHub.com/Janu2107"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/janani-muniyasamy-08887a2a5"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:januraji2107@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-bottom">
          © 2026 Janani Portfolio. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;