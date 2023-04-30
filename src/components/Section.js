const styles = {
  main: {
    paddingTop: "150px",
  },
};

function Section({ onTab }) {
  let whichContent;
  switch (onTab) {
    case "portfolio":
      whichContent = <p>Portfolio</p>;
      break;
    case "contact":
      whichContent = <p>Contact</p>;
      break;
    case "resume":
      whichContent = <p>Resume</p>;
      break;
    default:
      whichContent = <p>About</p>;
  }
  console.log(whichContent);
  return whichContent;
}

export default Section;
