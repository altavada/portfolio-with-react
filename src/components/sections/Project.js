import "../../styles/Body.css";

export default function Project(props) {
  const imageUrl = `${process.env.PUBLIC_URL}/${props.image}`;

  return (
    <div className="boxitem" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="overlay">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          className="left-half"
        >
          <span className="hoverlinks">GitHub</span>
        </a>
        <a
          href={props.address}
          target="_blank"
          rel="noreferrer"
          className="right-half"
        >
          <span className="hoverlinks">Webpage</span>
        </a>
      </div>
    </div>
  );
}
