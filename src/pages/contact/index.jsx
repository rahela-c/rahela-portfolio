import Action from "./Action";
import Details from "./Details";
import Socials from "./Socials";
import "./index.css";

export default function Contact() {
  return (
    <div className="contactMe">
      <div className="contactContainer">
        <Action />
        <Details />
        <Socials />
      </div>
    </div>
  );
}
