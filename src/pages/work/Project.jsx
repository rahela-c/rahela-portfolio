export default function Project({ title, description, image, technologies }) {
  return (
    <div className="project">
      <div className="projectWork">
        <div className="projectImage">
          <img className="image" src={image} />
        </div>

        <div className="projectDescription">
          <h3>{title}</h3>
          <div className="textProject">{description}</div>

          <div className="tehnologies">
            {technologies.map((item, i) => (
              <button key={i}>{item}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
