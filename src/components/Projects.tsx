"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Flux (ACTIFP)",
        subtitle: "Technology Intelligence Forecasting",
        description:
            "A platform synthesizing fragmented web data into a structured knowledge base. Features an unstructured-to-structured data parsing engine and scalable MERN/Next.js architecture.",
        tags: ["MERN", "Next.js", "Data Parsing", "Quant"],
        link: "#",
        github: "#",
        hasDiagram: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 w-full border-t border-black bg-neutral-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">
                    <span className="bg-black text-white px-2 py-1">Featured Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className={`group bg-white border border-black p-6 md:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${project.hasDiagram ? 'md:col-span-2' : ''}`}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-sm font-bold uppercase text-neutral-500 tracking-wider text-[10px] md:text-xs mt-1">
                                        {project.subtitle}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href={project.github} className="hover:opacity-50 transition-opacity">
                                        <Github className="w-6 h-6" />
                                    </Link>
                                    <Link href={project.link} className="hover:opacity-50 transition-opacity">
                                        <ExternalLink className="w-6 h-6" />
                                    </Link>
                                </div>
                            </div>

                            {project.hasDiagram && (
                                <div className="mb-8 py-8 px-4 border border-dashed border-neutral-300 bg-neutral-50 overflow-x-auto">
                                    <div className="flex flex-nowrap items-center justify-between min-w-[500px] gap-2 text-xs md:text-sm font-mono font-bold uppercase text-center">
                                        <div className="p-3 bg-white border border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            Raw Web Data
                                        </div>
                                        <div className="flex-1 border-t-2 border-black relative">
                                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 px-1 text-[10px] text-neutral-500">Ingest</span>
                                            <ArrowRight className="absolute -right-3 -top-2.5 w-5 h-5 fill-black" />
                                        </div>
                                        <div className="p-3 bg-black text-white border border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                                            Parsing Engine
                                        </div>
                                        <div className="flex-1 border-t-2 border-black relative">
                                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 px-1 text-[10px] text-neutral-500">Clean</span>
                                            <ArrowRight className="absolute -right-3 -top-2.5 w-5 h-5 fill-black" />
                                        </div>
                                        <div className="p-3 bg-white border border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            Structured DB
                                        </div>
                                        <div className="flex-1 border-t-2 border-black relative">
                                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 px-1 text-[10px] text-neutral-500">API</span>
                                            <ArrowRight className="absolute -right-3 -top-2.5 w-5 h-5 fill-black" />
                                        </div>
                                        <div className="p-3 bg-white border border-black rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            Client
                                        </div>
                                    </div>
                                </div>
                            )}

                            <p className="mb-8 leading-relaxed text-sm md:text-base max-w-3xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs font-bold border border-black bg-neutral-100"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
