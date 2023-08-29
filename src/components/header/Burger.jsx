import { Icon } from "@iconify/react";

export default function Burger({ onClick }) {
  return (
    <div className="burger" onClick={onClick}>
      <Icon
        icon="iconamoon:menu-burger-horizontal-bold"
        color="white"
        width="24"
        height="24"
      />
    </div>
  );
}
