import "../styles/Header.css";
import Section from "./Section";
import { useState } from "react";

function Header() {
  const [navTab, setTab] = useState("about");
  const handleClick = (event) => {
    setTab(event.target.getAttribute("id"));
    document.getElementById("about").style = "none";
    document.getElementById("portfolio").style = "none";
    document.getElementById("contact").style = "none";
    document.getElementById("resume").style = "none";
    event.target.style.color = "rgb(88, 122, 88)";
  };
  return (
    <div>
      <header>
        <div className="headline">
          <h1>Samuel Tomaka</h1>
          <h2>Full Stack Web Development</h2>
        </div>
        <nav>
          <span
            className="navbtn"
            id="about"
            onClick={handleClick}
            style={{ color: 'rgb(88, 122, 88)' }}
          >
            About
          </span>
          <span className="navbtn" id="portfolio" onClick={handleClick}>
            Portfolio
          </span>
          <span className="navbtn" id="contact" onClick={handleClick}>
            Contact
          </span>
          <span className="navbtn" id="resume" onClick={handleClick}>
            Resume
          </span>
        </nav>
      </header>
      <Section onTab={navTab} />
    </div>
  );
}

export default Header;
