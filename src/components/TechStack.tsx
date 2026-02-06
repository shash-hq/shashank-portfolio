"use client";

import { motion } from "framer-motion";
import {
    SiCplusplus,
    SiExpress,
    SiGit,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiReact,
    SiRedux,
    SiTailwindcss,
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";

const skills = [
    { name: "Java", icon: FaJava, color: "text-orange-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "SQL", icon: FaDatabase, color: "text-gray-600" },
    { name: "PHP", icon: SiPhp, color: "text-purple-600" },
    { name: "Express.js", icon: SiExpress, color: "text-black" },
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Redux", icon: SiRedux, color: "text-violet-600" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "GitHub", icon: SiGithub, color: "text-black" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-20 px-6 w-full border-t border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">
                    <span className="bg-black text-white px-2 py-1">Tech Stack</span>
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[1px] bg-black border border-black"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="bg-white p-6 flex flex-col items-center justify-center gap-4 hover:bg-neutral-50 transition-colors group cursor-default"
                        >
                            <div className={`text-4xl transition-transform duration-200 ease-out group-hover:scale-110 ${skill.color}`}>
                                <skill.icon />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-black">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
