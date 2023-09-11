import SkillsIcons from "./SkillsIcons";
import SkillsSubHeading from "./SkillsSubHeading";
import "./index.css";
import Heading from "../../components/Heading";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillsContainers">
        <Heading title="Skills" />
        <SkillsSubHeading />
        <SkillsIcons />
      </div>
    </div>
  );
}
