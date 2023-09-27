import { Icon } from "@iconify/react";

export default function Socials() {
  function newTab() {
    window.open("https://github.com/rahela-c", "_blank");
  }
  return (
    <div className="social">
      <div>You may also find me on these platforms!</div>
      <div className="action">
        <Icon
          onClick={newTab}
          icon="teenyicons:github-outline"
          width="24"
          height="24"
          style={{ cursor: "pointer" }}
        />
        {/* <Icon icon="lucide:twitter" width="24" height="24" />
        <Icon icon="ph:figma-logo-light" width="24" height="24" /> */}
      </div>
    </div>
  );
}
