"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { scrollToSectionSmooth } from "@/utils/scrollTo";
import { isMobile } from "react-device-detect";

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const date = new Date();
  const currentYear = date.getFullYear();
  const fundationYear = 1995;
  const years = currentYear - fundationYear;

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
    <div
      className={`h-[40dvh] flex relative bg-[url('/images/datos.jpeg')] bg-center bg-cover ${
        !isMobile && "bg-fixed bg-no-repeat"
      }`}
      ref={ref}
    >
      <div className="grid sm:grid-cols-3 grid-cols-1 text-darkerMain z-20 w-full h-full justify-center items-center text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-extrabold">
        <div className="flex flex-col">
          {isVisible && (
            <div>
              <span>+</span>
              <CountUp start={0} end={1000} duration={1.5} separator="," />
            </div>
          )}
          <h5 className="xl:text-2xl lg:text-xl text-lg">proyectos exitosos</h5>
        </div>
        <div className="flex flex-col">
          {isVisible && (
            <div>
              <span>+</span>
              <CountUp start={0} end={years} duration={2.5} /> <span>años</span>
            </div>
          )}
          <h5 className="xl:text-2xl lg:text-xl text-lg">de experiencia</h5>
        </div>
        <div
          className="flex flex-col cursor-pointer"
          onClick={() => scrollToSectionSmooth("clients")}
        >
          {isVisible && (
            <div>
              <span>+</span> <CountUp start={0} end={40} duration={2.5} />
              {""} <span>clientes</span>
            </div>
          )}
          <h5 className="xl:text-2xl lg:text-xl text-lg">
            confían en nosotros
          </h5>
        </div>
      </div>
      <div className="h-[40dvh] bg-purple-50 w-full opacity-50 absolute z-10" />
    </div>
  );
}
