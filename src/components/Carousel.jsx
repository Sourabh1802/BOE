import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const DEFAULT_ITEMS = [
  {
    id: 1,
    title: "Actor Name",
    mobileImage: "/src/assets/BANNERS/1.png",
    desktopImage: "/src/assets/BANNERS/banner1 copy.png",
  },
  {
    id: 2,
    title: "Actress Name",
    mobileImage: "/src/assets/BANNERS/2.png",
    desktopImage: "/src/assets/BANNERS/banner2 copy.png",
  },
  {
    id: 3,
    title: "Model",
    mobileImage: "/src/assets/BANNERS/3.png",
    desktopImage: "/src/assets/BANNERS/banner3 copy.png",
  },
  {
    id: 4,
    title: "Model",
    mobileImage: "/src/assets/BANNERS/4.png",
    desktopImage: "/src/assets/BANNERS/banner4.png",
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 0;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 6000,
  pauseOnHover = false,
  loop = true,
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const carouselItems = loop ? [...items, items[0]] : items;

  // Responsive width (full container width)
  const [itemWidth, setItemWidth] = useState(300);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      setItemWidth(containerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const trackItemOffset = itemWidth + GAP;

  // Pause on hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const enter = () => setIsHovered(true);
      const leave = () => setIsHovered(false);
      container.addEventListener("mouseenter", enter);
      container.addEventListener("mouseleave", leave);
      return () => {
        container.removeEventListener("mouseenter", enter);
        container.removeEventListener("mouseleave", leave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === items.length - 1 && loop ? prev + 1 : (prev + 1) % items.length
        );
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    // Mobile: full viewport height (h-screen). Desktop/medium screens: md:h-[90vh]
    <div
      ref={containerRef}
      className="h-screen md:h-[90vh] relative overflow-hidden bg-black"
    >
      {/* Track */}
      <motion.div
        className="flex"
        drag="x"
        dragElastic={0.05}
        style={{ x }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];

          const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

          return (
            <motion.div
              key={index}
              className="shrink-0 bg-black overflow-hidden flex items-center justify-center"
              style={{
                width: itemWidth,
                height: "100%",
                rotateY,
              }}
            >
              {/* Mobile: centered, fully visible, not cropped */}
              <img
                src={item.mobileImage}
                alt={item.title}
                className="block md:hidden max-w-full max-h-full object-contain"
                // add loading="lazy" if you want lazy loading
                loading="lazy"
              />

              {/* Desktop: cover style for hero look */}
              <img
                src={item.desktopImage}
                alt={item.title}
                className="hidden md:block w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-20">
        {items.map((_, index) => (
          <motion.div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex % items.length === index ? "bg-white" : "bg-white/40"
            }`}
            animate={{ scale: currentIndex % items.length === index ? 1.3 : 1 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}