"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="py-20 px-6 w-full border-t border-black bg-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold uppercase tracking-wide">
                    Contact Me
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        href="mailto:shashank1.hq@gmail.com"
                        className="group flex items-center gap-3 px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-200"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-mono font-bold">shashank1.hq@gmail.com</span>
                    </Link>

                    <div className="flex gap-4">
                        <Link
                            href="https://www.linkedin.com/in/shash-hq/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 border border-black hover:bg-neutral-50 transition-all duration-200"
                        >
                            <Linkedin className="w-5 h-5 text-blue-700 transition-transform duration-200 group-hover:scale-110" />
                        </Link>
                        <Link
                            href="https://github.com/shash-hq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-3 border border-black hover:bg-black hover:text-white transition-all duration-200"
                        >
                            <Github className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                        </Link>
                    </div>
                </div>

                <p className="text-xs font-mono uppercase tracking-widest pt-12 text-neutral-500">
                    © {new Date().getFullYear()} Shashank Ranjan. Built with Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
