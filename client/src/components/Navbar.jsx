import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <h2 className="logo">
          Janani<span>.</span>
        </h2>

        <div
          className="mobile-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <li>
            <Link
              to="hero"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;