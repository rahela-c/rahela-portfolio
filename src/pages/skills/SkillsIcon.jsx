import { Icon } from "@iconify/react";
export default function SkillsIcon({ icon, text }) {
  return (
    <div className="skillsIcon">
      <Icon icon={icon} width="64" height="64" />
      <div className="text">{text}</div>
    </div>
  );
}
