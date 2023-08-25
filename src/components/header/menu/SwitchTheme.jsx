import { Icon } from "@iconify/react";

export default function SwitchTheme() {
  return (
    <div className="actions">
      <div className="switchTheme">
        <div>Switch Theme</div>
        <div className="auto"></div>

        <Icon icon="akar-icons:moon" width={24} height={24} />
      </div>
      <div className="downloadCvButton">
        <button>Download CV</button>
      </div>
    </div>
  );
}
