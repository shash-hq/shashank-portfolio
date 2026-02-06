"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "B.Tech CSE",
        school: "Lovely Professional University",
        year: "2024 - 2027",
    },
    {
        degree: "Diploma CSE",
        school: "Lovely Professional University",
        year: "2020 - 2023",
    },
];

export default function Education() {
    return (
        <section className="py-20 px-6 w-full border-t border-black bg-neutral-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">
                    <span className="bg-black text-white px-2 py-1">Education</span>
                </h2>

                <div className="space-y-0">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row md:items-baseline justify-between py-6 border-b border-black last:border-b-0"
                        >
                            <div>
                                <h3 className="text-xl font-bold">{edu.degree}</h3>
                                <p className="text-sm uppercase tracking-wide text-neutral-600 mt-1">{edu.school}</p>
                            </div>
                            <p className="font-mono text-sm mt-2 md:mt-0 font-bold">{edu.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
