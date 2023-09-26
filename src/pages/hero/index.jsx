import HeroDescription from "./HeroDescription";
import HeroLocation from "./HeroLocation";
import HeroImage from "./HeroImage";
import "./index.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="heroContainer">
        <HeroImage />
        <div className="columnDescription">
          <HeroDescription />
          <HeroLocation />
        </div>
      </div>
    </div>
  );
}
