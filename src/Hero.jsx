import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4"];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showFullVideo, setShowFullVideo] = useState(false);

  // Auto-change video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section
      id="home"
      className="relative mt-20 pt-20 px-4 sm:px-6 md:px-12 lg:px-20 text-white overflow-hidden bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),#0a001a_70%)]"
    >
      {/* 🌈 Animated gradient glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-40 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-yellow-500 via-fuchsia-600 to-cyan-400 opacity-25 rounded-full blur-3xl animate-pulse delay-3000" />
      </div>

      {/* 🔹 Main Content Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center z-10">
        {/* LEFT SIDE — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative order-2 md:order-1"
        >
          <div className="p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-white/10 border border-fuchsia-400/30 shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all duration-500">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(90deg,#ff00cc,#3333ff,#00ffff)] bg-[length:200%_auto] animate-[shine_5s_linear_infinite]"
            >
              Blue Orchid Entertainment
            </motion.h2>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mt-3">
              India’s Premier{" "}
              <span className="text-pink-400 font-semibold">Event</span> &{" "}
              <span className="text-cyan-300 font-semibold">Entertainment</span>{" "}
              Company — bringing Bollywood sparkle to your weddings, corporate
              events, and celebrity shows.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-fuchsia-500/30 transition-all"
              >
                Let’s Connect ✨
              </motion.a>
              <a
                href="#services"
                className="px-6 sm:px-8 py-3 rounded-xl border border-cyan-300/40 text-cyan-200 hover:bg-cyan-300/10 transition"
              >
                Explore Services 🎭
              </a>
            </div>

            {/* Company Info */}
            <div className="mt-8 text-xs sm:text-sm text-gray-300 space-y-1">
              <div>🎬 GST: 27AAFCB4092B1ZY</div>
              <div>📍 Mumbai, Maharashtra</div>
              <div>🕛 11 Years of Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative order-1 md:order-2"
        >
          <div
            className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-3xl overflow-hidden 
              shadow-[0_0_40px_rgba(59,130,246,0.5)] border border-blue-500/40 
              cursor-pointer hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)] 
              transition-all duration-500 mx-auto"
            onClick={() => setShowFullVideo(true)}
          >
            <motion.video
              key={currentVideo}
              src={videos[currentVideo]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-all duration-1000"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                            flex flex-col items-center justify-end pb-3 sm:pb-4 opacity-0 hover:opacity-100 
                            transition-opacity">
              <p className="text-pink-300 font-semibold tracking-wide text-xs sm:text-sm">
                🎥 Watch Full Highlight
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULL VIDEO MODAL */}
      {showFullVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
          <video
            src={videos[currentVideo]}
            controls
            autoPlay
            className="w-full max-w-4xl max-h-[80vh] rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.5)]"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-fuchsia-400"
            onClick={() => setShowFullVideo(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* ✨ Shine Animation */}
      <style>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}