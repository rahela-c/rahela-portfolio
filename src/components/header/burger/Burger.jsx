import { Icon } from "@iconify/react";

export default function Burger() {
  const openMenu = () => {
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
