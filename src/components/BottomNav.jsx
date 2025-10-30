// src/components/BottomNav.jsx
import React from "react";
import { Home, Image, Video, Info } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg border-t border-gray-300 flex justify-around py-2 md:hidden z-50">
      <button className="flex flex-col items-center text-xs text-blue-600">
        <Home size={22} />
        <span className="text-[11px]">Home</span>
      </button>
      <button className="flex flex-col items-center text-xs text-gray-600">
        <Image size={22} />
        <span className="text-[11px]">Photos</span>
      </button>
      <button className="flex flex-col items-center text-xs text-gray-600">
        <Video size={22} />
        <span className="text-[11px]">Videos</span>
      </button>
      <button className="flex flex-col items-center text-xs text-gray-600">
        <Info size={22} />
        <span className="text-[11px]">About</span>
      </button>
    </div>
  );
}