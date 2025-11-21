import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

export default function ArtistCards({ data }) {
  return (
    <div className="w-full overflow-x-auto py-10">
      <motion.div
        className="flex gap-6 px-6"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {data.map((artist, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] sm:min-w-[350px] bg-black rounded-2xl shadow-lg overflow-hidden relative"
          >
            {/* Artist Image Poster */}
            <img
              src={artist.image}
              className="w-full h-[380px] object-cover"
              alt={artist.name}
            />

            {/* Name + Role */}
            <div className="p-4">
              <h2 className="text-xl font-bold uppercase">{artist.name}</h2>
              <p className="text-sm text-cyan-300">{artist.role}</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 p-4">
              {artist.instagram && (
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} className="text-pink-500" />
                </a>
              )}
              {artist.facebook && (
                <a href={artist.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} className="text-blue-500" />
                </a>
              )}
              {artist.youtube && (
                <a href={artist.youtube} target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={26} className="text-red-500" />
                </a>
              )}
              {artist.twitter && (
                <a href={artist.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} className="text-blue-400" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}