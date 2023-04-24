const styles = {
  footer: {
    position: "absolute",
    bottom: "0",
    textAlign: "left",
    marginTop: "50px",
    fontSize: "10px",
    paddingBottom: "35px",
    padding: "20px",
    background: "rgb(58, 58, 58)",
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
