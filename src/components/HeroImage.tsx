"use client";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

export default function HeroImage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsBottomVisible(value > 0 && value < 1);
  });

  return (
    <motion.div
      style={{
        backgroundImage: `url(/images/hero.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh)`,
        top: 0,
        scale,
      }}
      ref={targetRef}
      className={`sticky z-0 overflow-hidden ${
        isBottomVisible ? "rounded-b-3xl" : ""
      }`}
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
}
