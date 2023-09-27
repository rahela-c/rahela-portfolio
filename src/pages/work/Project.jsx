import ProjectDescriprion from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

export default function Project({ title, description, image, technologies }) {
  return (
    <div className="project">
      <div className="projectWork">
        <ProjectImage image={image} />
        <ProjectDescriprion
          description={description}
          title={title}
          technologies={technologies}
        />
      </div>
    </div>
  );
}
