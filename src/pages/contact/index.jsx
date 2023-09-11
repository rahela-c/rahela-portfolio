import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";

import Details from "./Details";
import Socials from "./Socials";
import "./index.css";

export default function Contact() {
  return (
    <div className="contactMe">
      <div className="contactContainer">
        <Heading title="Get in touch" />
        <Subheading
          text="What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect."
        />
        <Details />
        <Socials />
      </div>
    </div>
  );
}
