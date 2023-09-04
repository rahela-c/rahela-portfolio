export default function Buttons({ technologies }) {
  return (
    <div className="tehnologies">
      {technologies.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
}
