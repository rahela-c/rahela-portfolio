import { useState } from "react";
import Burger from "./Burger";
import SwitchTheme from "./SwitchTheme";
import Links from "./Links";
import "./Header.css";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

function Header() {
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = width >= 1024;

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">{"<RC />"}</div>
        <div className="auto"></div>
        <div></div>
        {!isDesktop && <Burger onClick={openMenu} isMenuOpen={isMenuOpen} />}
        {isDesktop && <Links closeMenu={() => setIsMenuOpen(false)} />}
      </div>

      {!isDesktop && (
        <div className="menu" style={{ display: isMenuOpen ? "flex" : "none" }}>
          <Links closeMenu={() => setIsMenuOpen(false)} />
          {/* <SwitchTheme /> */}
        </div>
      )}
    </div>
  );
}

export default Header;
