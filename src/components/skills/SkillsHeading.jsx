import SkillsSubHeading from "./SkillsSubHeading";
export default function SkillsHeading() {
  return (
    <div className="containerHeadng">
      <div className="buttonContainerSkills">
        <button className="buttonSkills">Skills</button>
      </div>
      <SkillsSubHeading />
    </div>
  );
}
