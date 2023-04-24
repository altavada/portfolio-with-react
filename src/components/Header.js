import "../styles/Header.css";

function Header() {
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
  };
  return (
    <header style={styles.header}>
      <div style={styles.headline}>
        <h1>Samuel Tomaka</h1>
        <h2>Full Stack Web Development</h2>
      </div>
      <nav style={styles.nav}>
        <a href="#about">About Me</a>
        <a href="#mylinks">Deployed Projects</a>
        <a href="#contacts">Contact Me</a>
      </nav>
    </header>
  );
}

export default Header;
