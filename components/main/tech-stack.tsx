"use client";

import { motion } from "framer-motion";
import {
  BACKEND_SKILL,
  DEVOPS_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  PROGRAMMING_LANGUAGES,
  SKILL_DATA,
} from "@/constants";
import { slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const TechStack = () => {
  return (
    <section
      id="tech-stack"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="text-[40px] font-medium text-center text-gray-200">
        My Tech Stack
      </div>

       {/* --------PROGRAMMING-------- */}
       <motion.div
        variants={slideInFromTop}
        className="p-10 border rounded-3xl border-[#7042f88b] opacity-[0.9]] mt-5"
      >
        <div className="Welcome-text text-[30px]">Programming Languages</div>
        <div className="flex flex-row justify-left flex-wrap mt-4 gap-5 items-center text-gray-200 text-[20px]">
          {PROGRAMMING_LANGUAGES.map((skill, i) => {
            return (
              <div
                key={skill.skill_name}
                className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-white py-1.5 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span className="text-[20px]">{skill.skill_name}</span>
              </div>
            );
          })}
        </div>{" "}
      </motion.div>

      {/* --------BACKEND-------- */}
      <motion.div
        variants={slideInFromTop}
        className="p-10 border rounded-3xl border-[#7042f88b] opacity-[0.9]] mt-5"
      >
        <div className="Welcome-text text-[30px]">Backend</div>
        <div className="flex flex-row justify-left flex-wrap mt-4 gap-5 items-center text-gray-200 text-[20px]">
          {BACKEND_SKILL.map((skill, i) => {
            return (
              <div
                key={skill.skill_name}
                className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-white py-1.5 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span className="text-[20px]">{skill.skill_name}</span>
              </div>
            );
          })}
        </div>{" "}
      </motion.div>

      {/* --------DATABASE-------- */}
      <motion.div
        variants={slideInFromTop}
        className="p-10 border rounded-3xl border-[#7042f88b] opacity-[0.9]] mt-5"
      >
        <div className="Welcome-text text-[30px]">DEVOPS</div>
        <div className="flex flex-row justify-left flex-wrap mt-4 gap-5 items-center text-gray-200 text-[20px]">
          {DEVOPS_SKILL.map((skill, i) => {
            return (
              <div
                key={skill.skill_name}
                className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-white py-1.5 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span className="text-[20px]">{skill.skill_name}</span>
              </div>
            );
          })}
        </div>{" "}
      </motion.div>

      {/* --------FRONTEND-------- */}
      <motion.div
        variants={slideInFromTop}
        className="p-10 border rounded-3xl border-[#7042f88b] opacity-[0.9]] mt-5"
      >
        <div className="Welcome-text text-[30px]">Frontend</div>
        <div className="flex flex-row justify-left flex-wrap mt-4 gap-5 items-center text-gray-200 text-[20px]">
          {FRONTEND_SKILL.map((skill, i) => {
            return (
              <div
                key={skill.skill_name}
                className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-white py-1.5 px-3 font-sans text-xs font-bold uppercase text-white"
              >
                <span className="text-[20px]">{skill.skill_name}</span>
              </div>
            );
          })}
        </div>{" "}
      </motion.div>
    </section>
    // <></>
  );
};
