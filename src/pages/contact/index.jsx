import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";

import Details from "./Details";
import Socials from "./Socials";
import "./index.css";

export default function Contact() {
  return (
    <div id="contact" className="contactMe">
      <div className="contactContainer">
        <Heading title="Get in touch" />
        <span style={{ maxWidth: "576px", textAlign: "center" }}>
          <Subheading
            text="What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect."
          />
        </span>
        <Details />
        <Socials />
      </div>
    </div>
  );
}
