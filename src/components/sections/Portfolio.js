import "../../styles/Body.css";
import { projects } from "../../utils/projectData";

export default function Portfolio() {
  return (
    <div className="main">
      <h2 className="bodyheader">Portfolio</h2>
      <div className="boxes">
        <a
          href="https://altavada.github.io/samt-refactor-project/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="boxitem" id="feature">
            <h3>Horiseon Homepage</h3>
            <p>
              An exercise in efficient CSS refactoring and utilization of
              semantic HTML elements for practical organization and styling
              purposes. Assignment for UNC Chapel Hill Coding Bootcamp, week 1.
              Modified iteration of preexisting starter code.
            </p>
          </div>
        </a>
        {projects.map((proj) => {
          return (
            <a href={proj.address} target="_blank" rel="noreferrer">
              <div
                className="boxitem"
                style={{ backgroundImage: `url(${proj.image})` }}
              >
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
