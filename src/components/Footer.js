const styles = {
  footer: {
    position: "fixed",
    bottom: "0",
    textAlign: "left",
    marginTop: "50px",
    marginBottom: "0px",
    fontSize: "10px",
    paddingBottom: "35px",
    padding: "20px",
    background: "rgba(58, 58, 58, 0.5)",
    width: "100%",
  },
  content: {
    display: "inline-block",
    float: "right",
    paddingRight: "30px",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.content}>Created by Samuel Tomaka, 2023</h2>
    </footer>
  );
}

export default Footer;
