import "../../styles/Body.css";

export default function Project(props) {
  const imageUrl = `${process.env.PUBLIC_URL}/${props.image}`;

  return (
    <a href={props.address} target="_blank" rel="noreferrer">
      <div
        className="boxitem"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </a>
  );
}
