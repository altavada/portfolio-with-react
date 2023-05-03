import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';

function Section({ onTab }) {
  let whichContent;
  switch (onTab) {
    case "portfolio":
      whichContent = <Portfolio />;
      break;
    case "contact":
      whichContent = <Contact />;
      break;
    case "resume":
      whichContent = <Resume />;
      break;
    default:
      whichContent = <About />;
  }
  return whichContent;
}

export default Section;
