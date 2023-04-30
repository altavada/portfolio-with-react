import "../../styles/Body.css";

export default function Contact() {
  return (
    <div className="main" id="contacts">
      <h2 className="bodyheader">Contact Me</h2>
      <br></br>
      <img src="/images/grey-phone-icon.jpeg" alt="Phone Icon"></img>
      <div className="boxes">
        <a href="mailto:sam.tomaka@gmail.com">Email</a>
        <a href="https://github.com/altavada">GitHub</a>
        <a href="https://www.linkedin.com/in/samuel-tomaka-81b08921a/">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
