import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RainBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ""; 
    const dropCount = 40; 

    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement("div");
      
      const startLeft = Math.random() * 100;
      const startTop = Math.random() * 100;
      const dropHeight = Math.random() * 150 + 100;

      Object.assign(drop.style, {
        position: "absolute",
        width: "3px", 
        height: `${dropHeight}px`,
        background: "linear-gradient(to bottom, transparent, #facc15)", 
        opacity: "0.5", 
        left: `${startLeft}%`,
        top: `${startTop}%`,
        borderRadius: "20px",
        boxShadow: "0px 0px 12px rgba(250, 204, 21, 0.6)", 
      });

      container.appendChild(drop);

      gsap.to(drop, {
        y: 1200,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      // Changed z-index to 1 (Positive but low)
      className="fixed inset-0 pointer-events-none overflow-hidden bg-black z-[1]"
      style={{ height: '100vh', width: '100vw' }}
    />
  );
};

export default RainBackground;