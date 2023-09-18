import { Icon } from "@iconify/react";

export default function HeroIcons() {
  function NewTab() {
    window.open("https://github.com/rahela-c", "_blank");
  }
  return (
    <div className="heroIcons">
      <Icon
        onClick={NewTab}
        icon="teenyicons:github-outline"
        width="24"
        height="24"
      />
      <Icon icon="lucide:twitter" width="24" height="24" />
      <Icon icon="ph:figma-logo-light" width="24" height="24" />
    </div>
  );
}
