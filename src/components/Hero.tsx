import Image from "next/image";
import hero from "../../public/images/hero.png";

export default function Hero() {
  return (
    <div className="bg-secondary text-white h-screen-minus-112 flex">
      <div className="w-2/5 flex items-center justify-center flex-col h-full p-28 gap-48">
        <div className="flex justify-center flex-col font-bold">
          <h3 className="text-2xl">Centro de tecnología </h3>
          <h1 className="text-6xl">Servicios tecnólogicos de alto desempeño</h1>
        </div>
        <div className="flex gap-5 w-full">
          <div>Síguenos</div>
          <span>-------------------</span>
          <div>logo</div>
        </div>
      </div>
      <div className="w-3/5 h-full relative">
        <Image src={hero} alt="Hero" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
