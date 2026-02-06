"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "MERN Stack | Java | Problem Solving";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] w-full px-6 pt-20 bg-white">
            <div className="max-w-4xl w-full space-y-8 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-bold tracking-widest uppercase border-b border-black inline-block pb-1">Portfolio_v2.0</p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4">Shashank Ranjan</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl border-l-2 border-black pl-6 md:pl-8 py-2">
                        "A Developer specializing in backend architecture. Creator of Flux (ACTIFP) and an active open-source contributor passionate about API ecosystems and Quant."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="h-8 md:h-10 text-lg md:text-xl text-neutral-600 flex items-center justify-center md:justify-start font-mono"
                >
                    <span className="mr-2">&gt;</span>
                    <span className="font-bold text-black">{text}</span>
                    <span className="w-3 h-6 bg-black ml-1 animate-[pulse_1s_ease-in-out_infinite] block"></span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 pt-4"
                >
                    <Link href="#projects" className="brut-btn text-center">
                        View Projects
                    </Link>
                    <Link href="#contact" className="brut-btn bg-white text-black hover:bg-black hover:text-white text-center">
                        Contact Me
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
