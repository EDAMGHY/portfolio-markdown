"use client";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 32, 63, 1)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(173, 239, 209, 1)",
  },
};

const AnimatedLogo = () => {
  return (
    <motion.svg
      width='150'
      height='100'
      viewBox='0 0 151 69'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.g
        id='svgGroup'
        strokeLinecap='round'
        fillRule='nonzero'
        fontSize='9pt'
        stroke='#adefd1'
        strokeWidth='0.35'
        fill='#adefd1'
        style={{ stroke: "#adefd1", strokeWidth: 0.35, fill: "#adefd1" }}
      >
        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d='M 73.3 69 L 51.2 69 L 27.4 4.5 L 45.6 0 L 73.3 69 Z M 18.8 69 L 5 69 L 31.1 4.4 L 42 6.2 L 18.8 69 Z M 53.7 52.8 L 20.4 52.8 L 20.4 43.6 L 53.7 43.6 L 53.7 52.8 Z M 77.6 69 L 63.6 69 L 63.9 61.1 L 77.7 63.5 L 77.6 69 Z M 29.3 69 L 15.3 69 L 15.6 61.1 L 29.4 63.5 L 29.3 69 Z M 51.8 69 L 41.4 69 L 40.8 65.8 A 35.537 35.537 0 0 1 44.781 63.016 A 39.502 39.502 0 0 1 45.4 62.65 Q 47.9 61.2 50.7 59.9 L 51.8 69 Z M 10 69 L 0.6 69 L 0 65.8 A 35.537 35.537 0 0 1 3.981 63.016 A 39.501 39.501 0 0 1 4.6 62.65 Q 7.1 61.2 9.9 59.9 L 10 69 Z'
          id='0'
          vectorEffect='non-scaling-stroke'
        />
        <motion.path
          variants={icon}
          initial='hidden'
          animate='visible'
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          d='M 115.1 69 L 106.1 69 L 104.9 56.9 Q 107.4 58 109.6 58.5 A 20.982 20.982 0 0 0 111.853 58.89 A 16.196 16.196 0 0 0 113.7 59 Q 117.7 59 120.65 57.05 Q 123.6 55.1 125.5 51.8 A 26.275 26.275 0 0 0 127.943 46.003 A 30.481 30.481 0 0 0 128.35 44.45 Q 129.3 40.4 129.3 36.3 Q 129.3 31.3 128 26.45 A 35.159 35.159 0 0 0 125.196 19.195 A 31.893 31.893 0 0 0 124.3 17.6 Q 121.9 13.6 118.5 11.3 L 107.2 12.9 L 79.8 2.4 L 79.7 7.9 L 92.7 10.1 L 92.9 2.4 L 79.8 2.4 Q 88.6 1.9 97.05 1.75 Q 105.5 1.6 114.3 1.6 A 49.695 49.695 0 0 1 121.978 2.165 Q 126.619 2.891 130.5 4.55 A 36.509 36.509 0 0 1 137.519 8.47 A 30.502 30.502 0 0 1 141.95 12.35 Q 146.5 17.2 148.75 23.15 A 33.906 33.906 0 0 1 150.965 33.601 A 31.981 31.981 0 0 1 151 35.1 Q 151 41.7 148.8 47.8 Q 146.6 53.9 142.15 58.65 A 30.316 30.316 0 0 1 134.278 64.627 A 37.133 37.133 0 0 1 130.95 66.2 Q 124.2 69 115.1 69 Z M 107.8 69 L 86.8 69 L 86.8 2.4 L 107.8 2.4 L 107.8 69 Z M 88.3 69 L 78.9 69 L 78.3 65.8 A 35.537 35.537 0 0 1 82.281 63.016 A 39.502 39.502 0 0 1 82.9 62.65 Q 85.4 61.2 88.2 59.9 L 88.3 69 Z'
          id='1'
          vectorEffect='non-scaling-stroke'
        />
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedLogo;
