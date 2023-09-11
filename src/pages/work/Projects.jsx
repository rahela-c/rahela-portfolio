import Project from "./Project";
import { PROJECTS } from "./work.constants";

export default function Projects() {
  return (
    <div className="project">
      {PROJECTS.map(({ title, description, image, technologies }) => {
        return (
          <Project
            key={title}
            title={title}
            description={description}
            image={image}
            technologies={technologies}
          />
        );
      })}
    </div>
  );
}
