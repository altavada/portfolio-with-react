import "../../styles/Body.css";
import { projects } from "../../utils/projectData";
import Project from "./Project";

export default function Portfolio() {
  return (
    <div className="main">
      <h2 className="bodyheader">Portfolio</h2>
      <div className="boxes">
        <a
          href="https://murmuring-waters-06827.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="boxitem" id="feature">
            <h3>Paws & Claws</h3>
            <p>
              A collaborative full-stack website built with React, GraphQL, and MongoDB. This mobile-friendly app provides the online presence for an animal rescue and adoption agency. Visitors can come here to learn about the agency, browse adoptable pets, and submit applications, while authorized staff members can access a password-protected admin dashboard which allows them to create, update, and remove pet listings.
            </p>
          </div>
        </a>
        {projects.map((proj, i) => {
          return (
            <Project
              address={proj.address}
              image={proj.image}
              title={proj.title}
              desc={proj.desc}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
