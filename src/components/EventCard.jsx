import React from "react";
import { motion } from "framer-motion";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-[#0b0018] border border-cyan-500/20 rounded-2xl overflow-hidden 
                 shadow-[0_0_25px_rgba(0,255,255,0.1)] hover:shadow-[0_0_35px_rgba(0,255,255,0.3)] 
                 transition-all duration-300 backdrop-blur-sm"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 object-cover border-b border-cyan-500/10"
      />
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-cyan-300 mb-2 font-['Orbitron']">
          {event.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          {event.description}
        </p>
        <div className="text-xs text-gray-400 space-y-1">
          <p>📅 {event.date}</p>
          <p>📍 {event.venue}</p>
        </div>
      </div>
    </motion.div>
  );
}