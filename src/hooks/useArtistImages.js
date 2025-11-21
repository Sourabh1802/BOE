export function useArtistImages() {
    const images = import.meta.glob("/src/assets/artist/*", {
      eager: true,
      as: "url"
    });
  
    const imageMap = {};
  
    // Convert paths → filename → URL
    Object.entries(images).forEach(([path, url]) => {
      const file = path.split("/").pop(); // "raghav_juyal.jpg"
      imageMap[file] = url;
    });
  
    return imageMap;
  }