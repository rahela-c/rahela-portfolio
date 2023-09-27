import { Icon } from "@iconify/react";

export default function Details() {
  const text = "simivicol_ela@yahoo.com";
  return (
    <div className="column">
      <div className="email">
        <Icon icon="iconamoon:email-light" width="24" height="24" />
        <div>{text}</div>
        <Icon
          onClick={() => {
            navigator.clipboard.writeText(text);
            console.log(text);
          }}
          icon="radix-icons:copy"
          width="24"
          height="24"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
