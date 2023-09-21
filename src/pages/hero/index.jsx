import HeroDescription from "./HeroDescription";
import HeroLocation from "./HeroLocation";
import HeroIcons from "./HeroIcons";
import HeroImage from "./HeroImage";
import "./index.css";

export default function Hero() {
  return (
    <div id="about" className="hero">
      <div className="heroContainer">
        <HeroImage />
        <div className="columnDescription">
          <HeroDescription />
          <HeroLocation />
          <HeroIcons />
        </div>
      </div>
    </div>
  );
}
