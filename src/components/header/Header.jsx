import { useState } from "react";
import Burger from "./Burger";
import Menu from "./Menu";
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
        <Burger onClick={openMenu} />
      </div>

      <Menu isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default Header;
