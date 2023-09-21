import { Icon } from "@iconify/react";

export default function Socials() {
  return (
    <div className="social">
      <div>You may also find me on these platforms!</div>
      <div className="action">
        <Icon icon="teenyicons:github-outline" width="24" height="24" />
        {/* <Icon icon="lucide:twitter" width="24" height="24" />
        <Icon icon="ph:figma-logo-light" width="24" height="24" /> */}
      </div>
    </div>
  );
}
