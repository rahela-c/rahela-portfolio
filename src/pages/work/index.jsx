import SubHeading from "./SubHeading";
import Projects from "./Projects";
import "./index.css";
import Heading from "../../components/Heading";

export default function Work() {
  return (
    <div className="work">
      <div className="workContainer">
        <Heading title="Work" />
        <SubHeading />
        <Projects />
      </div>
    </div>
  );
}
