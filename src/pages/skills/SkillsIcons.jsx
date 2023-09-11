import SkillsIcon from "./SkillsIcon";
export default function SkillsIcons() {
  return (
    <div className="grid">
      <div className="row1">
        <SkillsIcon text="JavaScript" icon="logos:javascript" />
        <SkillsIcon text="HTML" icon="skill-icons:html" />
        <SkillsIcon text="React" icon="logos:react" />
      </div>

      <div className="row1">
        <SkillsIcon text="Figma" icon="logos:figma" />
        <SkillsIcon text="Jira" icon="logos:jira" />
        <SkillsIcon text="CSS" icon="skill-icons:css" />
      </div>

      <div className="row1">
        <SkillsIcon text="Github" icon="teenyicons:github-outline" />
      </div>
    </div>
  );
}
