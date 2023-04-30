import "../../styles/Body.css";

export default function Resume() {
  const styles = {
    link: {
      display: "block",
      background: "black",
    },
    text: {
      display: "block",
      textAlign: "center",
    },
  };
  return (
    <div className="main resume">
      <h2 className="bodyheader">Resume</h2>
      <br></br>
      <a href="https://drive.google.com/file/d/16_-Cwff4uTGdzB07K-Rc8Z1ylFi17zeg/view?usp=sharing">
        <img
          id="resumeicon"
          className="icon"
          src="/images/resume-icon.png"
          alt="Resume icon"
        ></img>
        <p>Click icon for PDF resume.</p>
      </a>
      <br></br>
      <div className="summary">
        <div>
          I am happy to offer a broad range of full-stack development skills,
          ranging from UI/UX design to database configuration and server-side
          APIs. In addition to the necessary foundations of web development, programming experience includes technologies such as React, Node.js, MySQL and
          Sequelize, Mongoose and MongoDB, Express.js, JQuery, and CSS
          frameworks such as Bootstrap.
        </div>
      </div>
    </div>
  );
}
