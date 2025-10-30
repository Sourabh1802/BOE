import React from 'react'
import { motion } from 'framer-motion'

const services = [
  'Wedding Planner',
  'Celebrity Endorsement',
  'Carnivals/Festivals Event Management Services',
  'Employee Parties/Award Ceremonies',
  'Talent Management Services',
  'Corporate Events'
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 md:px-12 lg:px-20 text-white bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#1e1b4b] overflow-hidden"
    >
      {/* Subtle gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-10"
        >
          Products & Services
        </motion.h3>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 8px 25px rgba(59,130,246,0.25)',
              }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 soft-card transition-all duration-300"
            >
              <h4 className="font-semibold text-lg text-white">{service}</h4>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Professional delivery, vendor coordination, and full event
                execution support for {service.toLowerCase()}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}