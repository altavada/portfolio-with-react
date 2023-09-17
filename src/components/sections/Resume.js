import "../../styles/Body.css";
import resumeIcon from "../../images/resume-icon.png";

export default function Resume() {
  return (
    <div className="main resume">
      <h2 className="bodyheader">Resume</h2>
      <br></br>
      <a
        href="https://drive.google.com/file/d/1YFfSxOEViGfFiSn0XS5Cnxogqy7D4_pb/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="resumeicon"
          className="icon"
          src={resumeIcon}
          alt="Resume icon"
        ></img>
        <p>Click icon for PDF resume</p>
      </a>
      <div className="summary">
        <div>
          I am happy to offer a broad range of full-stack development skills,
          ranging from UI/UX design to database configuration and server-side
          API engineering. In addition to the necessary foundations of web
          development, my project-tested programming experience spans technologies such as
          React, Node.js, MySQL and Sequelize, Mongoose and MongoDB, Express.js,
          JQuery, and CSS frameworks such as Bootstrap.
        </div>
      </div>
    </div>
  );
}
