import SkillsIcons from "./SkillsIcons";
import SkillsHeading from "./SkillsHeading";
import SkillsSubHeading from "./SkillsSubHeading";
import "./index.css";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skillsContainers">
        <SkillsHeading />
        {/* <SkillsSubHeading /> */}
        <SkillsIcons />
      </div>
    </div>
  );
}
