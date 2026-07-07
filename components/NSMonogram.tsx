"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Monograma NS — trazado vectorial fiel al logo original de Nature Smith
 * (firma caligráfica con curl de entrada, dos picos, nudo inferior y rúbrica).
 */
export const NS_PATHS = {
  n: "M118 88 C114 78 106 78 101 88 C92 110 88 172 88 206 C88 226 96 232 104 224 C110 217 106 206 98 208 C102 196 138 104 164 64 C172 51 182 53 182 65 C182 93 162 186 153 228 C150 241 155 243 162 229 C179 193 212 105 227 71 C235 55 245 55 245 69 C245 97 228 194 221 242 C218 260 222 272 234 274",
  s: "M316 100 C302 90 298 68 310 53 C321 40 343 39 353 51 C363 63 359 84 346 102 C330 126 282 168 254 200 C238 218 234 236 236 246 C232 260 246 268 250 254 C253 243 242 236 234 243 C252 251 302 247 346 237 C364 232 382 220 392 204",
} as const;

export const NS_VIEWBOX = "0 0 464 290";

export default function NSMonogram({
  className = "",
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  const reduce = useReducedMotion();
  const draw = animated && !reduce;

  const pathProps = draw
    ? {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: { duration: 2.4, ease: [0.25, 0.1, 0.25, 1] as const },
      }
    : {};

  return (
    <svg
      viewBox={NS_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={NS_PATHS.n}
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
        {...pathProps}
      />
      <motion.path
        d={NS_PATHS.s}
        stroke="currentColor"
        strokeWidth="7.5"
        strokeLinecap="round"
        {...(draw
          ? {
              ...pathProps,
              transition: { ...pathProps.transition!, delay: 0.6 },
            }
          : {})}
      />
    </svg>
  );
}
