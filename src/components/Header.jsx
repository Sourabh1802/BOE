import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Talent Management", href: "#talent" },
    { name: "Productions & IPs", href: "#productions" },
    { name: "Events", href: "#events" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[85%] lg:w-[70%]">
      <div
        className="
          flex items-center justify-between gap-6
          px-6 py-4
          rounded-full
          backdrop-blur-2xl
          bg-white/5
          border border-white/10
          shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]
          relative overflow-hidden
        "
      >
        {/* Subtle gradient inside like screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-20 pointer-events-none"></div>

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3 relative z-10">
          <Logo className="w-10 h-10" />
          <h1 className="font-[Inter] tracking-tight text-lg text-white font-semibold">
            Blue Orchid Entertainment
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 font-[Inter] text-white/90 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 text-white"
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden mt-3
              w-full px-6 py-5
              rounded-3xl
              backdrop-blur-xl bg-white/5
              border border-white/10
              shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)]
            "
          >
            <ul className="flex flex-col items-center gap-4 font-[Inter] text-white/90">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-sm hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}