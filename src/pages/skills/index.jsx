import SkillsIcons from "./SkillsIcons";
import "./index.css";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skillsContainers">
        <Heading title="Skills" />
        <Subheading text="The skills, tools and technologies I am really good at:" />
        <SkillsIcons />
      </div>
    </div>
  );
}
