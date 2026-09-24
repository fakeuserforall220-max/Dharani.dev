"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "../utils/cn";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
};

// "Explore My Work" Text Animation
const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;
  
  // Tighter spread and rotate for smoother feel
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 35, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 30, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.span
      className={cn("inline-block text-slate-900", isSpace && "w-3")}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

// First row of tools
const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.img
      src={char}
      className="inline-block w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform duration-300 filter brightness-0"
      style={{ x, scale, y, opacity, transformOrigin: "center" }}
    />
  );
};

// Second row of tools
const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 80, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 15, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.img
      src={char}
      className="inline-block w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform duration-300 filter brightness-0"
      style={{ x, rotate, y, scale, opacity, transformOrigin: "center" }}
    />
  );
};

export const ToolsScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3, offset: ["start end", "end start"] });

  const text = "Explore My Stack";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  // The tools requested
  const toolsRow1 = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.simpleicons.org/anthropic/black", // Claude AI
    "https://cdn.simpleicons.org/googlegemini/black", // Gemini AI
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  ];
  
  const toolsRow2 = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ];

  const iconCenterIndex1 = Math.floor(toolsRow1.length / 2);
  const iconCenterIndex2 = Math.floor(toolsRow2.length / 2);

  return (
    <section className="w-full bg-transparent relative z-20 pb-40">
      
      {/* Title Scroll Animation */}
      <div
        ref={targetRef}
        className="relative box-border flex h-[50vh] items-center justify-center gap-2 overflow-hidden bg-transparent p-4"
      >
        <div
          className="font-space w-full max-w-4xl text-center text-4xl md:text-7xl font-bold uppercase tracking-tighter text-slate-900"
          style={{ perspective: "1000px" }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Row 1 Tools */}
      <div
        ref={targetRef2}
        className="relative -mt-[10vh] box-border flex h-[40vh] flex-col items-center justify-center gap-8 md:gap-12 overflow-hidden bg-transparent p-4"
      >
        <p className="font-space flex items-center justify-center gap-3 text-lg md:text-2xl font-medium tracking-tight text-slate-600">
          <Bracket className="h-8 md:h-10 text-slate-400" />
          <span>Core AI & DevOps Stack</span>
          <Bracket className="h-8 md:h-10 scale-x-[-1] text-slate-400" />
        </p>
        <div className="w-full max-w-5xl text-center flex justify-center gap-6 md:gap-12 flex-wrap" style={{ perspective: "1000px" }}>
          {toolsRow1.map((iconUrl, index) => (
            <CharacterV2
              key={index}
              char={iconUrl}
              index={index}
              centerIndex={iconCenterIndex1}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* Row 2 Tools */}
      <div
        ref={targetRef3}
        className="relative -mt-[10vh] box-border flex h-[40vh] flex-col items-center justify-center gap-8 md:gap-12 overflow-hidden bg-transparent p-4"
      >
        <p className="font-space flex items-center justify-center gap-3 text-lg md:text-2xl font-medium tracking-tight text-slate-600">
          <Bracket className="h-8 md:h-10 text-slate-400" />
          <span>Full Stack Engineering</span>
          <Bracket className="h-8 md:h-10 scale-x-[-1] text-slate-400" />
        </p>
        <div
          className="w-full max-w-5xl text-center flex justify-center gap-6 md:gap-12 flex-wrap"
          style={{ perspective: "1000px" }}
        >
          {toolsRow2.map((iconUrl, index) => (
            <CharacterV3
              key={index}
              char={iconUrl}
              index={index}
              centerIndex={iconCenterIndex2}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
