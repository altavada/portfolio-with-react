import "../../styles/Body.css";
import { projects } from "../../utils/projectData";
import Project from "./Project";

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
            <Project
              address={proj.address}
              image={proj.image}
              title={proj.title}
              desc={proj.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
