import "../styles/Body.css";
import { useState } from "react";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

function Header() {
  const [navTab, setTab] = useState("about");
  const handleClick = (event) => {
    const targetId = event.target.getAttribute("data-id");
    setTab(targetId);
    const sectionElement = document.getElementById(targetId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <header>
        <div className="headline">
          <h1>Samuel Tomaka</h1>
          <h2 className="subtitle">Full Stack Development Portfolio</h2>
        </div>
        <nav>
          <span
            className={navTab === "about" ? "navbtn nav-selected" : "navbtn"}
            data-id="about"
            onClick={handleClick}
            // style={{ color: "rgb(88, 122, 88)" }}
          >
            About
          </span>
          <span
            className={
              navTab === "portfolio" ? "navbtn nav-selected" : "navbtn"
            }
            data-id="portfolio"
            onClick={handleClick}
          >
            Portfolio
          </span>
          <span
            className={navTab === "contact" ? "navbtn nav-selected" : "navbtn"}
            data-id="contact"
            onClick={handleClick}
          >
            Contact
          </span>
          <span
            className={navTab === "resume" ? "navbtn nav-selected" : "navbtn"}
            data-id="resume"
            onClick={handleClick}
          >
            Resume
          </span>
        </nav>
      </header>
      <div id="about"></div>
      <About />
      <div className="divider" id="portfolio"></div>
      <Portfolio  />
      <div className="divider" id="contact"></div>
      <Contact />
      <div className="divider" id="resume"></div>
      <Resume />
    </div>
  );
}

export default Header;
