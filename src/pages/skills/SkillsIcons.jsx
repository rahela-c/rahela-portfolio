import SkillsIcon from "./SkillsIcon";
import { Icon } from "@iconify/react";
export default function SkillsIcons() {
  return (
    <div className="grid">
      <div className="row1">
        <SkillsIcon
          icon={
            <Icon
              icon="logos:javascript"
              color="#10b981"
              width="64"
              height="64"
            />
          }
          text="Javascript"
        />
        <SkillsIcon
          icon={
            <Icon
              icon="skill-icons:html"
              color="#10b981"
              width="64"
              height="64"
            />
          }
          text="HTML"
        />

        <SkillsIcon
          icon={
            <Icon
              icon="skill-icons:css"
              color="#10b981"
              width="64"
              height="64"
            />
          }
          text="CSS"
        />
      </div>
      <div className="row1">
        <SkillsIcon
          icon={
            <Icon icon="logos:react" color="#10b981" width="64" height="64" />
          }
          text="React"
        />

        <SkillsIcon
          icon={
            <Icon icon="logos:jira" color="#10b981" width="64" height="64" />
          }
          text="Jira"
        />

        <SkillsIcon
          icon={
            <Icon icon="logos:figma" color="#10b981" width="64" height="64" />
          }
          text="Figma"
        />
      </div>
      <div className="row1">
        <SkillsIcon
          icon={
            <Icon icon="teenyicons:github-outline" width="64" height="64" />
          }
          text="GitHub"
        />
      </div>
    </div>
  );
}
