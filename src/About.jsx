import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-20 text-white bg-gradient-to-b from-[#1e1b4b] via-[#111827] to-[#0a0a0f] overflow-hidden"
    >
      {/* Decorative radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-10"
        >
          About Us
        </motion.h3>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(147,51,234,0.25)',
          }}
          className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 text-left"
        >
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Blue Orchid Entertainment (BOE)</span> is an India-based
            events company specializing in Promotion & Event Management, Brand and Image Management, and
            Media Relations. We bring creativity, precision, and excellence to every event we curate — from
            corporate gatherings to luxurious weddings.
          </p>

          <ul className="mt-6 text-sm text-gray-300 space-y-1">
            <li>
              <span className="font-semibold text-white">GST:</span> 27AAFCB4092B1ZY
            </li>
            <li>
              <span className="font-semibold text-white">CIN:</span> U92412MH2012PTC235721
            </li>
            <li>
              <span className="font-semibold text-white">Registered On:</span> 01-07-2017
            </li>
            <li>
              <span className="font-semibold text-white">Legal Status:</span> Limited Company
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}