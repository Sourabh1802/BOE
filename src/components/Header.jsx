import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products & Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-gradient-to-r from-[#0a0a1a] via-[#0f172a] to-[#1e1b4b] text-white shadow-2xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* 🔹 Logo + Title */}
        <div className="flex items-center gap-3">
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide text-blue-300">
              Blue Orchid Entertainment
            </h1>
            <p className="text-[0.7rem] sm:text-xs text-gray-400">
            Talent, Events, Productions
            </p>
          </div>
        </div>

        {/* 🔹 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* 🔹 Call Button (Desktop Only) */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="tel:08047680295"
          className="ml-4 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5h2l2 7-2 2 4 4 2-2 7 2v2H3z"
            />
          </svg>
          Call Now
        </motion.a>

        {/* 🔹 Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-blue-900/40 hover:bg-blue-800/60 transition"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a] border-t border-blue-800/40 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 text-gray-200 hover:text-blue-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="tel:08047680295"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-blue-500/30 transition-all"
                >
                  📞 Call Now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};