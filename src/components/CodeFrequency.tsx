"use client";

import { motion } from "framer-motion";

export default function CodeFrequency() {
    const weeks = 52;
    const days = 7;

    // A pseudo-random pattern to mimic a busy GitHub graph
    // We'll generate this deterministically based on index to keep SSR stable
    const getContributionLevel = (i: number) => {
        // A simple hash function to generate "random" levels 0-4
        const x = Math.sin(i * 0.5) * 10000;
        const r = x - Math.floor(x);

        if (r > 0.85) return 4; // High (Dark Green)
        if (r > 0.65) return 3; // Medium-High
        if (r > 0.45) return 2; // Medium
        if (r > 0.25) return 1; // Low
        return 0; // None (Gray)
    };

    const getColor = (level: number) => {
        switch (level) {
            case 4: return "bg-green-700";
            case 3: return "bg-green-500";
            case 2: return "bg-green-400";
            case 1: return "bg-green-200";
            default: return "bg-neutral-200";
        }
    };

    return (
        <section className="py-20 px-6 w-full border-t border-black bg-white">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide self-start md:self-center">
                    <span className="bg-black text-white px-2 py-1">Code Frequency</span>
                </h2>

                <div className="overflow-x-auto w-full flex justify-center">
                    <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-max">
                        {Array.from({ length: weeks * days }).map((_, i) => {
                            const level = getContributionLevel(i);
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.001, duration: 0.2 }}
                                    className={`w-3 h-3 md:w-4 md:h-4 ${getColor(level)} rounded-[1px]`}
                                />
                            );
                        })}
                    </div>
                </div>

                <p className="mt-6 text-sm font-mono font-bold text-neutral-600 uppercase tracking-widest">
                    1,200+ Contributions in the last year
                </p>
            </div>
        </section>
    );
}
