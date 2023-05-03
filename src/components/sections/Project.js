import "../../styles/Body.css";

export default function Project(props) {
  return (
    <a href={props.address} target="_blank" rel="noreferrer">
      <div
        className="boxitem"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </a>
  );
}
