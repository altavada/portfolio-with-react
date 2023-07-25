import "../../styles/Body.css";
import cestMoi from "../../images/me.png";

export default function About() {
  return (
    <div className="main">
      <section className="firstsection" id="about">
        <div className="bio">
          <img src={cestMoi} alt="Sam Tomaka professional headshot."></img>
          <div>
            <h2>About Me</h2>
            <p>
              As a young web developer, I have recently found my calling and now
              seek to cement my place in the industry. I will thrive best in a
              junior development role in which I can make meaningful team
              contributions while continuing to advance my skills. Owing both to
              my academic and employment backgrounds, I am well-accustomed the
              analytic-minded, detail-oriented, and team-based approach needed
              to tackle development challenges with ease, and I am very
              passionate about this work due to its deep engagement of my
              strongest personal assets. As a UNC Chapel Hill Coding Bootcamp
              graduate as of May 2023, I am versed in HTML5, CSS3, JavaScript,
              Node.js, Express.js, MVC methods, React, MySQL, MongoDB, and more.
              Please refer to my links for more info, and please reach out by
              email if you would like to talk further. Thank you for your time
              and consideration!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
