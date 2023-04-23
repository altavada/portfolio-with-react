import { useState } from "react";

function Header() {
  const [hover, setHover] = useState(false);
  const mouseOn = () => {
    setHover(true);
  };
  const mouseOff = () => {
    setHover(false);
  };
  const styles = {
    header: {
      padding: "20px",
      background: "rgb(58, 58, 58)",
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
    navlink: {
      textDecoration: hover ? "underline" : "none",
      padding: "10px",
      marginTop: "-10px",
    },
  };
  return (
    <header style={styles.header}>
      <div style={styles.headline}>
        <h1>Samuel Tomaka</h1>
        <h2>Full Stack Web Development</h2>
      </div>
      <nav style={styles.nav}>
        <a
          href="#about"
          style={styles.navlink}
          onMouseEnter={mouseOn}
          onMouseLeave={mouseOff}
        >
          About Me
        </a>
        <a
          href="#mylinks"
          style={styles.navlink}
          onMouseEnter={mouseOn}
          onMouseLeave={mouseOff}
        >
          Deployed Projects
        </a>
        <a
          href="#contacts"
          style={styles.navlink}
          onMouseEnter={mouseOn}
          onMouseLeave={mouseOff}
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
