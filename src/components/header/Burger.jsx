import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Burger() {
  // Where is const?
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // What is this? you are not returning anything, plus you have a React Component and a function together
  const openMenu = () => {
    // <Menu />;
    // setIsMenuOpen(!isMenuOpen);

    console.log("hi");
  };

  return (
    <div className="burger" onClick={openMenu}>
      <Icon
        icon="iconamoon:menu-burger-horizontal-bold"
        color="white"
        width="24"
        height="24"
      />
    </div>
  );
}
