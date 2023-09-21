import { useState } from "react";
import Burger from "./Burger";
import SwitchTheme from "./SwitchTheme";
import Links from "./Links";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">{"<RC />"}</div>
        <div className="auto"></div>
        <Burger onClick={openMenu} isMenuOpen={isMenuOpen} />
      </div>

      <div className="menu" style={{ display: isMenuOpen ? "flex" : "none" }}>
        <Links closeMenu={() => setIsMenuOpen(false)} />
        {/* <SwitchTheme /> */}
      </div>
    </div>
  );
}

export default Header;
