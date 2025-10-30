import React from "react";

export default function ClientsVideos() {
  const videos = [
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* LEFT SIDE - Text */}
        <div className="md:col-span-1">
          <h2 className="text-4xl font-bold mb-4">Our Client Stories</h2>
          <p className="text-gray-400 text-lg">
            Explore the cinematic experiences we’ve crafted for our amazing clients —
            blending creativity, storytelling, and innovation in every frame.
          </p>
        </div>

        {/* RIGHT SIDE - Bigger video grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            ></video>
          ))}
        </div>
      </div>
    </section>
  );
}