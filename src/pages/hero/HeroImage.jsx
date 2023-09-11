import rahela from "./rahela.jpg";

export default function HeroImage() {
  return (
    <div className="heroImage">
      <div className="ImageBackGround">
        <img src={rahela} alt="" className="heroPhoto" />
      </div>
    </div>
  );
}
