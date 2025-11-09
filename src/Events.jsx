import React from "react";
import { motion } from "framer-motion";
import EventCard from "./components/EventCard";
import { eventsData } from "./data/eventsData";

// Framer Motion variants for staggered entry
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function Events() {
  return (
    <motion.div
      id="events"
      className="min-h-screen bg-gradient-to-b from-black via-[#050016] to-[#0a002a] text-white py-20 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 
                     drop-shadow-[0_0_25px_rgba(0,255,255,0.6)] font-['Orbitron'] mb-4"
        >
          Our Legendary Events
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          A journey through Blue Orchid Entertainment’s most iconic events, productions, and performances — 
          spanning continents, cultures, and unforgettable moments.
        </p>
      </motion.div>

      {/* Grid of Motion Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {eventsData.map((event, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.4}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <EventCard event={event} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}