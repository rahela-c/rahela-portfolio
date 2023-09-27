import SkillsIcon from "./SkillsIcon";
export default function SkillsIcons() {
  return (
    <div className="grid">
      <div className="row1">
        <SkillsIcon text="JavaScript" icon="logos:javascript" />
      </div>
      <div className="row1">
        <SkillsIcon text="HTML" icon="skill-icons:html" />
      </div>
      <div className="row1">
        <SkillsIcon text="React" icon="logos:react" />
      </div>

      <div className="row1">
        <SkillsIcon text="Figma" icon="logos:figma" />
      </div>
      <div className="row1">
        <SkillsIcon text="Jira" icon="logos:jira" />
      </div>
      <div className="row1">
        <SkillsIcon text="CSS" icon="skill-icons:css" />
      </div>

      <div className="row1">
        <SkillsIcon text="Github" icon="teenyicons:github-outline" />
      </div>
    </div>
  );
}
