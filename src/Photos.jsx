import React from "react";
import { motion } from "framer-motion";

// ✅ Correct image paths — use `/filename.png` (not /public/filename)
const images = [
  "/WhatsApp Image 2025-10-27 at 17.14.17 (1).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.16.jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.17.jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.16 (1).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.16 (2).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.17 (2).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.18 (1).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.18 (2).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.18.jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.15 (1).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.15 (2).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.15.jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.16 (2).jpeg",
  "/WhatsApp Image 2025-10-27 at 17.14.16.jpeg",
];

export default function Photos() {
  return (
    <section
      id="photos"
      className="relative pt-20 pb-20 px-4 sm:px-8 md:px-12 lg:px-20 
                 bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#1e1b4b] overflow-hidden"
    >
      {/* Title */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Our Artists
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Showcasing our finest moments and talented performers 🎤✨
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{
            x: ["0%", "-100%"], // Smooth continuous scroll
          }}
          transition={{
            ease: "linear",
            duration: 40, // slower = smoother
            repeat: Infinity,
          }}
        >
          {/* Duplicate images for infinite loop */}
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[180px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] 
                         rounded-2xl overflow-hidden border border-white/10 
                         shadow-lg shadow-blue-500/10 hover:shadow-purple-400/20 
                         transition-all duration-500"
            >
              <img
                src={src}
                alt={`Artist ${i + 1}`}
                loading="lazy"
                className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative light blur effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}