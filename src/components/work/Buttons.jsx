export default function Buttons({ technologies }) {
  return (
    <div className="tehnologies">
      {technologies.map((item, i) => (
        <button key={i}>{item}</button>
      ))}
    </div>
  );
}
