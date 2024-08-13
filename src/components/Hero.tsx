import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

export default function Hero() {
  return (
    <div className="relative h-[100dvh] sm:h-[120dvh] bg-white">
      <HeroImage />
      <HeroText />
    </div>
  );
}
