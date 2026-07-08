"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Barra fina de progreso de lectura, fija en el borde superior. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sage via-champagne to-olive"
      aria-hidden="true"
    />
  );
}
