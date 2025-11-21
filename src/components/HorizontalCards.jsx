import React, { useRef, useState, useEffect } from "react";

export default function HorizontalCards({ items = [] }) {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") el.scrollBy({ left: 320, behavior: "smooth" });
      if (e.key === "ArrowLeft") el.scrollBy({ left: -320, behavior: "smooth" });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Drag scrolling
  function handleDown(e) {
    setIsDown(true);
    setStartX((e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }

  function handleMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }

  function handleUp() {
    setIsDown(false);
  }

  // Button scroll
  function scrollByBtn(amount) {
    containerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      {/* Left Button */}
      <button
        onClick={() => scrollByBtn(-320)}
        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 text-white px-2 py-2 rounded-full shadow-lg ml-2"
      >
        ‹
      </button>

      {/* Right Button */}
      <button
        onClick={() => scrollByBtn(320)}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/30 text-white px-2 p rounded-full shadow-lg mr-2"
      >
        ›
      </button>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar  px-6 cursor-grab active:cursor-grabbing"
        onMouseDown={handleDown}
        onMouseLeave={handleUp}
        onMouseUp={handleUp}
        onMouseMove={handleMove}
        onTouchStart={handleDown}
        onTouchMove={handleMove}
        onTouchEnd={handleUp}
        role="list"
        tabIndex={0}
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch"
          
        }}
      >
        {items.map((it) => (
        <article
        key={it.id}
        role="listitem"
        className="
          min-w-[220px] md:min-w-[250px]   /* 50% smaller width */
          flex-shrink-0
          rounded-xl p-3
          backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl
          scroll-snap-align-start
          transition-all duration-300 hover:bg-white/20 hover:border-white/40
        "
      >
        {/* Taller Image Box + Full Image visible */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg flex justify-center items-center bg-black/20">
          <img
            src={it.img}
            alt={it.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      
        <h3 className="mt-2 font-semibold text-sm text-white tracking-wide truncate text-center">
          {it.title}
        </h3>
      
        {it.followers && (
          <p className="text-[11px] text-gray-300 mt-1 text-center">
            {it.followers} Followers
          </p>
        )}
      
        <div className="mt-2 text-center">
          <a
            href={it.ig}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/90 underline hover:text-white"
          >
            View Profile
          </a>
        </div>
      </article>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          height: 200px;
        }
      `}</style>
    </div>
  );
}