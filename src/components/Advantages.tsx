"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import advantages from "../../public/images/datos.jpg";
import { scrollToSection } from "@/utils/scrollTo";

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[40dvh] flex relative" ref={ref}>
      <div className="absolute">
        <div className="fixed h-full w-full inset-0 -z-10">
          <Image
            src={advantages}
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="filter grayscale"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 text-darkerMain z-20 w-full h-full justify-center items-center text-center text-5xl font-extrabold">
        <div className="flex flex-col">
          {isVisible && (
            <div>
              <span>+</span>
              <CountUp start={0} end={1000} duration={1.5} separator="," />
            </div>
          )}
          <h5 className="text-2xl">proyectos exitosos</h5>
        </div>
        <div className="flex flex-col">
          {isVisible && (
            <div>
              <span>+</span>
              <CountUp start={0} end={29} duration={2.5} /> <span>años</span>
            </div>
          )}
          <h5 className="text-2xl">de experiencia</h5>
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => scrollToSection("clients")}
        >
          {isVisible && (
            <div>
              <span>+</span> <CountUp start={0} end={40} duration={2.5} />
              {""} <span>clientes</span>
            </div>
          )}
          <h5 className="text-2xl">confían en nosotros</h5>
        </div>
      </div>
      <div className="h-[40dvh] bg-purple-50 w-full opacity-50 absolute z-10" />
    </div>
  );
}
