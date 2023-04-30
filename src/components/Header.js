import "../styles/Header.css";
import Section from "./Section";
import { useState } from "react";

function Header() {
  const styles = {
    header: {
      padding: "20px",
      background: "rgba(58, 58, 58, 0.5)",
      position: "fixed",
      width: "100%",
    },
    headline: {
      display: "inline-block",
    },
    title: {
      fontSize: "48px",
    },
    nav: {
      display: "flex",
      paddingTop: "25px",
      paddingRight: "50px",
      float: "right",
      fontSize: "20px",
    },
  };
  const [navTab, setTab] = useState("about");
  const handleClick = (event) => {
    setTab(event.target.getAttribute('data-type'));
  };
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.headline}>
          <h1>Samuel Tomaka</h1>
          <h2>Full Stack Web Development</h2>
        </div>
        <nav style={styles.nav}>
          <span className="navbtn" data-type="about" onClick={handleClick}>About</span>
          <span className="navbtn" data-type="portfolio" onClick={handleClick}>Portfolio</span>
          <span className="navbtn" data-type="contact" onClick={handleClick}>Contact</span>
          <span className="navbtn" data-type="resume" onClick={handleClick}>Resume</span>
        </nav>
      </header>
      <Section onTab={navTab} />
    </div>
  );
}

export default Header;
