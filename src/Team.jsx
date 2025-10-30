import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Tejas Pendurkar', role: 'CEO & M.D.' },
  { name: 'Yogesh Nardekar', role: 'Sr. Manager' },
  { name: 'N. Madhumita', role: 'H.R. Head' },
  { name: 'Shruti Sawant', role: 'Legal Advisor' },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-20 px-6 md:px-12 lg:px-20 text-white bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#1e1b4b] overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Animated heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-10"
        >
          Our Team
        </motion.h3>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: '0 8px 25px rgba(147,51,234,0.25)',
              }}
              className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white shadow-md">
                {member.name.split(' ')[0][0]}
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-300 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}