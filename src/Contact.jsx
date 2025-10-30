import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 lg:px-20 text-white bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#1e1b4b] overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-10"
        >
          Get in Touch
        </motion.h3>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <h4 className="text-xl font-bold">Blue Orchid Entertainment Pvt. Ltd.</h4>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
            Blue Orchid Entertainment Pvt. Ltd.
B 178, Aram Nagar Part 2, Jeet Nagar, Versova, 
Andheri West, Mumbai, Maharashtra 400061

            </p>

            <div className="mt-5 text-sm text-gray-300 space-y-1">
              <div>
                📞 Call:{' '}
                <a href="tel:9819189871 " className="underline hover:text-blue-400">
                9819189871 
                </a> ,
                <a href="tel:7738050093 " className="underline hover:text-blue-400">7738050093</a>
              </div>
              <div>Ext: 3431</div>
              <div>GST: 27AAFCB4092B1ZY</div>
            </div>

            <div className="mt-6">
              <a
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all inline-block"
                href="#"
              >
                Contact Supplier
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Message sent! (demo)');
              }}
            >
              <input
                type="text"
                className="w-full rounded-xl p-3 bg-transparent border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
              <input
                type="text"
                className="w-full rounded-xl p-3 bg-transparent border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email or Mobile"
                required
              />
              <textarea
                className="w-full rounded-xl p-3 bg-transparent border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Message"
                rows={4}
                required
              ></textarea>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 