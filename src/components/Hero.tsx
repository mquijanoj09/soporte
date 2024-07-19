import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div className="relative h-[120vh] bg-white">
      <HeroImage />
      <HeroText />
    </div>
  );
}
