import React, { useEffect, useState } from "react";


export default function TimebasedBg() {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    const updateBackground = () => {
      const hour = new Date().getHours();
      let color;

      if (hour >= 5 && hour < 9) {
        color = "linear-gradient(to bottom, #FFD580, #FFB347)"; // Morning
      } else if (hour >= 9 && hour < 17) {
        color = "linear-gradient(to bottom, #87CEEB, #f0f8ff)"; // Day
      } else if (hour >= 17 && hour < 20) {
        color = "linear-gradient(to bottom, #FF7E5F, #FEB47B)"; // Evening
      } else {
        color = "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)"; // Night
      }

      setBgColor(color);
    };

    updateBackground();

    
    const interval = setInterval(updateBackground, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return bgColor;
}

