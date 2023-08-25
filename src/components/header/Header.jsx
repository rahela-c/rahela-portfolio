import React from "react";
import Burger from "./burger/Burger";
import Menu from "./menu/Menu";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">{"<RC />"}</div>
        <div className="auto"></div>
        <Burger />
      </div>

      <Menu />
    </div>
  );
}

export default Header;
