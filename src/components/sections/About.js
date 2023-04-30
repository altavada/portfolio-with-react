import "../../styles/Body.css";

export default function About() {
  return (
    <div className="main">
      <section className="firstsection" id="about">
        <div className="bio">
          <img
            src="/images/me.png"
            alt="Sam Tomaka professional headshot."
          ></img>
          <div>
            <h2>About Me</h2>
            <p>
              As a young web developer, I seek to jumpstart my career and cement
              my place in the industry. I will thrive best with a junior
              development role in which I can meaningfully contribute to the
              team while continuing to increase my experience, knowledge, and
              breadth of expertise as a developer. Both my academic and
              employment backgrounds have provided me with excellent, extensive
              preparation for the analytic-minded, detail-oriented, and
              team-based approaches asked of by challenges in the development
              world. Moreover, I am very passionate about this work because it
              is highly suitable to my strengths. I initially sought to pursue
              an academic career in Philosophy and Law, and only diverged from
              that path due to a burning desire for a more "hands-on" and
              creative type of work. Programming offers a similar type of
              high-concept intellectual engagement as this scholarly work, while
              also offering dynamic, engaging, direct interfacing that is more
              akin to tradecraft and fine arts. Having now graduated from UNC
              Chapel Hill's Coding Bootcamp, I am more assured than ever that
              this is the right path for me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
