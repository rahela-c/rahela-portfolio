import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Projects from "./Projects";
import "./index.css";

export default function Work() {
  return (
    <div className="work">
      <div className="workContainer">
        <Heading />
        <SubHeading />
        <Projects />
      </div>
    </div>
  );
}
