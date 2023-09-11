import Projects from "./Projects";
import "./index.css";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";

export default function Work() {
  return (
    <div className="work">
      <div className="workContainer">
        <Heading title="Work" />
        <Subheading text="Some of the noteworthy projects I have built:" />
        <Projects />
      </div>
    </div>
  );
}
