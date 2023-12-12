import { scrollToPage } from "../../methods";
import { useEffect, useRef } from "react";

export default function Links({ closeMenu }) {
  const myDiv = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // console.log(event.target);
      if (myDiv.current && !myDiv.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={myDiv} className="links">
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
