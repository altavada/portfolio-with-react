import "../../styles/Body.css";

export default function Contact() {
  return (
    <div className="main contacts">
      <h2 className="bodyheader">Contact Me</h2>
      <br></br>
      <img
        className="icon"
        src="/images/grey-phone-icon.jpeg"
        alt="Phone Icon"
      ></img>
      <div className="boxes">
        <a href="mailto:sam.tomaka@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
        <a href="https://github.com/altavada" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-tomaka-81b08921a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
