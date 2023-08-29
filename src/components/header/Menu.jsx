import SwitchTheme from "./SwitchTheme";
import Links from "./Links";

export default function Menu({ isMenuOpen }) {
  return (
    <div className="menu" style={{ display: isMenuOpen ? "flex" : "none" }}>
      <Links />
      <SwitchTheme />
    </div>
  );
}
