import resumeIcon from "../../images/resume-icon.png";

export default function Resume() {
  return (
    <div className="main resume">
      <h2 className="bodyheader">Resume</h2>
      <br></br>
      <a
        href="https://docs.google.com/document/d/1n2IpbyEouROf0NoYg0MSERl041h7amgtoqIoVYQ-3JQ/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img
          id="resumeicon"
          className="icon"
          src={resumeIcon}
          alt="Resume icon"
        ></img>
        <p>Click icon to view the doc!</p>
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
