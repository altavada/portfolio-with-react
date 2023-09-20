import "../../styles/Body.css";
import cestMoi from "../../images/me.png";

export default function About() {
  return (
    <div className="main">
      <section className="firstsection" id="about">
        <div className="bio">
          <img src={cestMoi} alt="Sam Tomaka professional headshot."></img>
          <div className="biocontainer">
            <h2>About Me</h2>
            <p>
              I am a full-stack web developer with a prior academic background
              in philosophy and legal studies. In the course of my career
              transition, I've found considerable overlap in the frames of mind
              applied respectively in both my academic home turf and
              programming. My personal approach to coding balances methodology
              and discovery, grounded in a consideration for the individual and
              global conditions which shape any web user's experience. These
              conditions illustrate why detail-oriented design and development
              are key to a successful web product. I believe we as developers
              deliver our best work when we picture an expansive range of
              different users and anticipate what it takes to deliver a positive
              experience to each and every one. I am a UNC Chapel Hill Coding
              Bootcamp graduate as of May 2023, and I am versed in HTML5, CSS3,
              JavaScript, Node.js, Express.js, MVC methods, React, MySQL,
              MongoDB, and more. I am constantly coding on my own and expanding
              my skillset. Visit my GitHub to see what I've been up to lately,
              and stay tuned for updates on LinkedIn! Please reach out to me by
              email if you would like to talk further. Thank you for your time
              and consideration!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
