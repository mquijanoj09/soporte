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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 0.8, 0.4, 0]
  );

  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsBottomVisible(value > 0.1 && value < 0.9);
  });

  return (
    <motion.div
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
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
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <motion.div
        className={`absolute inset-0 bg-neutral-950/70 ${
          isBottomVisible ? "rounded-b-3xl" : ""
        }`}
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
}
