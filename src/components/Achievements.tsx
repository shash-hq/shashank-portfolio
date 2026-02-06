"use client";

import { motion } from "framer-motion";
import { SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";
import Link from "next/link";

const achievements = [
    {
        platform: "LeetCode",
        rating: "1711",
        link: "https://leetcode.com/",
        icon: SiLeetcode,
        color: "text-yellow-600",
    },
    {
        platform: "Codeforces",
        rating: "1300",
        link: "https://codeforces.com/",
        icon: SiCodeforces,
        color: "text-red-600",
    },
    {
        platform: "HackerRank",
        rating: "5 Stars",
        link: "https://www.hackerrank.com/",
        icon: SiHackerrank,
        color: "text-green-600",
    },
];

export default function Achievements() {
    return (
        <section className="py-20 px-6 w-full border-t border-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">
                    <span className="bg-black text-white px-2 py-1">Stats</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.platform}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-6 border border-black hover:bg-neutral-50 transition-colors duration-200 group"
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${item.color}`} />
                                    <span className="font-bold uppercase tracking-wider">{item.platform}</span>
                                </div>
                                <span className="font-mono font-bold group-hover:text-black">
                                    {item.rating}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
