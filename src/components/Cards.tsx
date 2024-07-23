"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const cards = [
  {
    url: "/images/pc.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/pc.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/pc.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/pc.jpg",
    title: "Title 4",
    id: 4,
  },
];

export default function Cards() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-25%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <h3 className="text-5xl text-main font-extrabold text-center absolute top-0 p-24">
          ¿Quiénes somos?
        </h3>
        <motion.div style={{ x }} className="flex gap-20 ml-20">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
        <div className="mouse absolute z-50 bottom-24 transform -translate-x-1/2 left-1/2 opacity-80" />
      </div>
    </section>
  );
}
