"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InstagramSvg } from "@/icons";

export default function HeroText() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <div className="flex items-center justify-center w-1/2 h-full text-white flex-col">
        <div className="flex justify-center items-center flex-col font-extrabold relative">
          <h3 className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg -top-14 absolute">
            Centro de tecnología
          </h3>
          <h1 className="xl:text-7xl lg:text-6xl sm:text-5xl text-3xl text-center">
            Servicios&nbsp;tecnológicos de alto desempeño.
          </h1>
          <div className="flex gap-5 -bottom-28 w-full lg:text-lg text-base items-center justify-center absolute">
            <div className="pr-2">Síguenos</div>
            <div className="border-b w-20" />
            <a
              href="https://www.instagram.com/soporte_sa/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 pl-2"
            >
              <InstagramSvg />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
