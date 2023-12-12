import Project from "./Project";
import { PROJECTS } from "./work.constants";

export default function Projects() {
  return (
    <div className="projects">
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
