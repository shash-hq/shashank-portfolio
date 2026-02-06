import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank Ranjan | Backend Architect",
  description: "Portfolio of Shashank Ranjan, specializing in backend architecture, API ecosystems, and Quant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-white font-mono text-black antialiased selection:bg-black selection:text-white",
          spaceMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
