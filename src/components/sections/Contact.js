import { useState } from "react";
import "../../styles/Body.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import phoneIcon from "../../images/grey-phone-icon.jpeg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    // Check for valid email address using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enteredEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    setEmail(enteredEmail);
  };

  const handleBlur = (event) => {
    if (event.target.value.trim() === "") {
      const fieldName = event.target.name;
      alert(`${fieldName} is required`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
  };

  return (
    <div className="main contacts">
      <h2 className="bodyheader">Contact Me</h2>
      <br></br>
      <img
        className="icon"
        src={phoneIcon}
        alt="Phone Icon"
      ></img>
      <div className="boxes">
        <a href="mailto:sam.tomaka@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/altavada" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-tomaka-81b08921a/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <br></br>
      <h3 className="subhead">Contact Form (Demo)</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            onBlur={handleBlur}
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
            onBlur={handleBlur}
            required
          />
          {emailError && <p>{emailError}</p>}
        </label>
        <label>
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            onBlur={handleBlur}
            required
          />
        </label>
        <button
          type="submit"
          style={{ color: "rgb(60,60,60)", margin: "auto" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// export default function Contact() {
//   return (
//     <div className="main contacts">
// <h2 className="bodyheader">Contact Me</h2>
// <br></br>
// <img
//   className="icon"
//   src="/images/grey-phone-icon.jpeg"
//   alt="Phone Icon"
// ></img>
// <div className="boxes">
//   <a href="mailto:sam.tomaka@gmail.com" target="_blank" rel="noreferrer">
//     Email
//   </a>
//   <a href="https://github.com/altavada" target="_blank" rel="noreferrer">
//     GitHub
//   </a>
//   <a
//     href="https://www.linkedin.com/in/samuel-tomaka-81b08921a/"
//     target="_blank"
//     rel="noreferrer"
//   >
//     LinkedIn
//   </a>
// </div>
//     </div>
//   );
// }
