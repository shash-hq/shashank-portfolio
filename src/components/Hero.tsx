"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        <section id="hero" className="flex flex-col items-center justify-center min-h-[90vh] w-full px-6 pt-28 md:pt-20 bg-white">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Left Column: Text & Content */}
                <div className="space-y-6 md:space-y-8 text-center md:text-left order-1">
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
                        <p className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl border-l-2 border-black pl-6 md:pl-8 py-2 text-left">
                            "A Developer specializing in backend architecture. Creator of Flux (ACTIFP) and an active open-source contributor passionate about API ecosystems and Quant."
                        </p>
                    </motion.div>

                    {/* Mobile Profile Image (Visible only on mobile, placed between Bio and Typewriter) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="md:hidden flex justify-center py-4"
                    >
                        <div className="relative w-48 h-48 border-2 border-black rounded-none overflow-hidden">
                            <Image
                                src="/profile.jpg"
                                alt="Shashank Ranjan"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
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
                        className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start"
                    >
                        <Link href="#projects" className="brut-btn text-center">
                            View Projects
                        </Link>
                        <Link href="#contact" className="brut-btn bg-white text-black hover:bg-black hover:text-white text-center">
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Desktop Profile Image */}
                <div className="hidden md:flex justify-center items-center order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="relative w-64 h-64 border-2 border-black rounded-none shadow-[16px_16px_0px_0px_rgba(0,0,0,0.1)]"
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Shashank Ranjan"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
