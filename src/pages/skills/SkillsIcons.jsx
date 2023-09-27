import SkillsIcon from "./SkillsIcon";

export default function SkillsIcons() {
  return (
    <div className="grid">
      <SkillsIcon text="JavaScript" icon="logos:javascript" />
      <SkillsIcon text="HTML" icon="skill-icons:html" />
      <SkillsIcon text="React" icon="logos:react" />
      <SkillsIcon text="Figma" icon="logos:figma" />
      <SkillsIcon text="Jira" icon="logos:jira" />
      <SkillsIcon text="CSS" icon="skill-icons:css" />
      <SkillsIcon text="Github" icon="teenyicons:github-outline" />
    </div>
  );
}
