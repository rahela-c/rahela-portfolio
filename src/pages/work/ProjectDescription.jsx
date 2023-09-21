import { Icon } from "@iconify/react";
import Buttons from "./Buttons";

export default function ProjectDescription({
  title,
  description,
  technologies,
}) {
  return (
    <div className="projectDescription">
      <h3>{title}</h3>
      <div className="textProject">{description}</div>
      <Buttons technologies={technologies} />
    </div>
  );
}
