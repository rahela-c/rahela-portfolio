import { Icon } from "@iconify/react";

export default function HeroLocation() {
  return (
    <div className="group">
      <div className="location">
        <Icon icon="tabler:location" />
        Chelmsford, United Kingdom
      </div>
      <div>
        <Icon icon="icon-park-outline:dot" color="#10b981" className="dot" />
        Available for new projects
      </div>
    </div>
  );
}
