import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaFilm, FaStar } from "react-icons/fa";

// ✅ Import all client images
import client1 from "./assets/clients/image copy.png";
import client2 from "./assets/clients/image copy 2.png";
import client3 from "./assets/clients/image copy 3.png";
import client4 from "./assets/clients/image copy 4.png";
import client5 from "./assets/clients/image copy 5.png";
import client6 from "./assets/clients/image copy 6.png";
import client7 from "./assets/clients/image copy 7.png";
import client8 from "./assets/clients/image copy 8.png";
import client9 from "./assets/clients/image copy 9.png";
import client10 from "./assets/clients/image copy 10.png";
import client11 from "./assets/clients/image copy 11.png";
import client12 from "./assets/clients/image copy 12.png";
import client13 from "./assets/clients/image copy 13.png";
import client14 from "./assets/clients/image copy 14.png";
import client15 from "./assets/clients/image copy 15.png";
import client16 from "./assets/clients/image copy 16.png";
import client17 from "./assets/clients/image copy 17.png";
import client18 from "./assets/clients/image copy 18.png";

export default function Home() {
  const clients = [
    client1, client2, client3, client4, client5, client6,
    client7, client8, client9, client10, client11, client12,
    client13, client14, client15, client16, client17, client18,
  ];

  return (
    <div id="home" className="relative text-white bg-gradient-to-b from-black via-[#0a001a] to-[#1a0033] mt-20 overflow-hidden">
      {/* Background Video
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/video1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/70" /> */}

      {/* --- All Page Content in One Div --- */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-32 py-24 px-6 sm:px-10 md:px-16 lg:px-24 text-center">


{/* 🟣 HERO BANNER - with layered gradient & tagline */}
{/* 🟣 HERO BANNER — with animated visible photo wall */}
<section className="relative w-full flex flex-col items-center justify-center py-28 px-6 sm:px-10 md:px-16 lg:px-24 text-center overflow-hidden rounded-b-[40px]">

  {/* 🎞️ Subtle Video Layer (optional) */}
  <video
    className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    src="/video1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* 🧩 Moving Image Wall (background mosaic) */}
  <motion.div
    className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-[1px] opacity-35 blur-[0.5px] brightness-[0.9] contrast-[1.1] z-[1]"
    animate={{ x: ["0%", "-4%", "0%"] }}
    transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
  >
    {[...clients, ...clients].slice(0, 60).map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`bg-${i}`}
        className="w-full h-full object-cover rounded-sm"
      />
    ))}
  </motion.div>

  {/* 🩵 Overlay (so text remains readable but mosaic is visible) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#000]/60 to-[#000]/80 z-[2]" />

  {/* 🧠 Hero Text & Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-[3] max-w-5xl"
  >
    <h1
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight 
                 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 
                 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)] tracking-wide"
    >
      Transforming Vision into{" "}
      <span className="text-cyan-300 drop-shadow-[0_0_15px_#00ffff]">
        Entertainment
      </span>{" "}
      Masterpieces
    </h1>

    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-['Poppins']">
      <strong className="text-sky-300">Blue Orchid Entertainment Pvt. Ltd.</strong> — where creativity meets precision.
      For over a decade, we’ve been curating India’s biggest{" "}
      <span className="text-teal-300 font-semibold">live events</span>, producing
      chart-topping <span className="text-cyan-300 font-semibold">films</span>,
      and managing iconic{" "}
      <span className="text-yellow-400 font-semibold">talents</span>.
    </p>

    {/* 🎬 Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <motion.a
        href="/productions"
        whileHover={{ scale: 1.08 }}
        className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-xl font-semibold text-white 
                   shadow-lg shadow-cyan-400/40 transition-all hover:shadow-cyan-300/60"
      >
        Explore Our Productions 🎬
      </motion.a>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.08 }}
        className="border border-cyan-400/50 px-8 py-3 rounded-xl text-cyan-200 hover:bg-cyan-400/10 
                   transition-all font-semibold"
      >
        Connect With Us ✨
      </motion.a>
    </div>
  </motion.div>
</section>

{/* 🟣 WHO WE ARE - modern 2-column informative layout */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="max-w-6xl w-full text-left bg-white/5 border border-fuchsia-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-xl"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-fuchsia-400 mb-4 text-center">
    Who We Are
  </h2>
  <div className="grid md:grid-cols-2 gap-10 mt-6 items-center">
    <p className="text-gray-300 leading-relaxed">
      Founded in <strong>2012</strong>, Blue Orchid Entertainment is a 
      <span className="text-cyan-300 font-semibold"> multidisciplinary powerhouse</span> in India’s entertainment landscape.
      We’ve produced live experiences, films, and shows that have reached audiences across 
      <strong> India, Africa, and the Middle East</strong>. Our team blends art, technology, and storytelling to
      craft experiences that inspire, entertain, and connect.
    </p>
    <ul className="text-left space-y-3 text-gray-300 text-sm sm:text-base">
      <li>🎭 <strong>Talent Management</strong> – nurturing India’s most celebrated artists</li>
      <li>🎥 <strong>Film & TV Production</strong> – creating cinematic stories that resonate</li>
      <li>🎉 <strong>Event Execution</strong> – from concept to curtain call, we deliver perfection</li>
      <li>📣 <strong>Brand Promotion</strong> – integrating art and strategy for unforgettable campaigns</li>
    </ul>
  </div>
</motion.div>

{/* 🟣 SERVICES HIGHLIGHT */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl"
>
  <QuickLink
    icon={<FaStar size={38} className="text-fuchsia-400 mb-3" />}
    title="Talent Management"
    desc="We represent India’s most dynamic performing artists across film, dance, and television."
    link="/talents"
  />
  <QuickLink
    icon={<FaFilm size={38} className="text-cyan-400 mb-3" />}
    title="Film & TV Productions"
    desc="From idea to on-screen brilliance, our production house transforms concepts into visual magic."
    link="/productions"
  />
  <QuickLink
    icon={<FaUsers size={38} className="text-yellow-400 mb-3" />}
    title="Live Events"
    desc="We conceptualize and execute award-winning concerts, conferences, and reality shows globally."
    link="/events"
  />
</motion.div>

{/* 🟣 INFINITE CLIENT SCROLL — fixed for all screens */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="relative w-full overflow-hidden py-10"
>
  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-10 text-center drop-shadow-[0_0_15px_#00ffff]">
    Our Esteemed Clients
  </h3>

  {/* Gradient fade masks (smaller on mobile) */}
  <div className="absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#0a001a] to-transparent z-10"></div>
  <div className="absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#0a001a] to-transparent z-10"></div>

  <div className="overflow-hidden whitespace-nowrap">
    {/* The animation container */}
    <motion.div
      className="flex items-center space-x-10 sm:space-x-14"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 35, // slower, smooth speed
        ease: "linear",
      }}
    >
      {/* Duplicate the logos for seamless looping */}
      {[...clients, ...clients].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Client ${index + 1}`}
          className="h-10 sm:h-16 md:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
        />
      ))}
    </motion.div>
  </div>
</motion.div>

{/* 🟣 HIGHLIGHTS SECTION */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="w-full max-w-6xl text-center"
>
  <h3 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-8">
    Highlights & Showreel
  </h3>
  <p className="text-gray-300 max-w-3xl mx-auto mb-8">
    From large-scale public spectacles to intimate brand events, our portfolio spans every format.
    Here’s a glimpse of what we’ve brought to life over the years:
  </p>
  <div className="flex flex-wrap justify-center gap-6 px-6 sm:px-12">
    <YouTubeEmbed videoId="e8VThAFeZOI" title="Holi Celebration 2023" />
    <YouTubeEmbed videoId="jchcsRg_hTY" title="31st Dec 2023 Event" />
    {/* <YouTubeEmbed videoId="tDB13CehVOSBhKnt" title="Naach Mari Sathe" /> */}
  </div>
</motion.div>

{/* 🟣 CALL TO ACTION - Elegant outro
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-center max-w-3xl bg-gradient-to-r from-purple-900/40 to-blue-900/30 border border-fuchsia-500/30 rounded-3xl p-10 shadow-lg backdrop-blur-md"
>
  <h3 className="text-3xl font-bold mb-4">
    Let’s Build Your Next Iconic Experience
  </h3>
  <p className="text-gray-300 mb-6">
    Whether it’s a film, reality show, or global event, we blend passion, production, and precision
    to create magic that connects with audiences worldwide.
  </p>
  <a
    href="#contact"
    className="inline-block bg-gradient-to-r from-fuchsia-500 via-purple-600 to-indigo-600 px-10 py-4 rounded-xl font-semibold text-white shadow-lg shadow-fuchsia-500/40 transition-all"
  >
    Get in Touch 🚀
  </a>
</motion.div> */}
</div>
    </div>
  );
}

/* ✅ Reusable Subcomponents */
function QuickLink({ icon, title, desc, link }) {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      className="bg-black/40 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-fuchsia-500/30 transition-all"
    >
      {icon}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </motion.a>
  );
}

function YouTubeEmbed({ videoId, title }) {
  return (
    <div className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-[220px] sm:h-[250px] bg-black rounded-xl overflow-hidden shadow-lg border border-white/10">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}