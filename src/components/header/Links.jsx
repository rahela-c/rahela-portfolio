import { scrollToPage } from "../../methods";

export default function Links({ closeMenu }) {
  return (
    <div className="links">
      <div
        onClick={() => {
          scrollToPage("#hero");
          closeMenu();
        }}
      >
        About
      </div>
      <div
        onClick={() => {
          scrollToPage("#work");
          closeMenu();
        }}
      >
        Work
      </div>
      <div
        onClick={() => {
          scrollToPage("#skills");
          closeMenu();
        }}
      >
        Skills
      </div>
      <div
        onClick={() => {
          scrollToPage("#contact");
          closeMenu();
        }}
      >
        Contact
      </div>
    </div>
  );
}
