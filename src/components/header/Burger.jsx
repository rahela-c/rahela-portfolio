import { Icon } from "@iconify/react";

export default function Burger({ onClick, isMenuOpen }) {
  return (
    <div className="burger" onClick={onClick}>
      <Icon
        icon={isMenuOpen ? "codicon:close" : "pajamas:hamburger"}
        color="white"
        width="24"
        height="24"
      />
    </div>
  );
}

("codicon:close");
("pajamas:hamburger");
