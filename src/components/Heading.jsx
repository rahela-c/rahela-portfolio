import "./Heading.css"

export default function Heading({title}) {
  return (
    <div className="heading">
      <div className="headingButtonContainer">
        <button>{title}</button>
      </div>
    </div>
  );
}
