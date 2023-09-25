import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function ScrollToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scrollButton">
      {backToTopButton && (
        <div onClick={scrollUp}>
          <Icon
            style={{
              position: "fixed",
              bottom: "15px",
              right: "15px",
            }}
            icon="ph:arrow-up-bold"
            width="20"
          />
        </div>
      )}
    </div>
  );
}
