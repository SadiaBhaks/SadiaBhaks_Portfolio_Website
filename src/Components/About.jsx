import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MYprofile from "/MYprofile.jpg";

gsap.registerPlugin(ScrollTrigger);

// --- 1. Header Scramble Component ---
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useGSAP(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, { trigger: ".scramble-trigger" });

  return <span className="scramble-trigger">{displayText}</span>;
};

// --- 2. Scroll-Aware Typewriter ---
const Typewriter = ({ text, delay = 100, startTrigger }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: startTrigger.current,
      start: "top 30%",
      onEnter: () => setIsStarted(true),
      once: true,
    });
  }, { scope: startTrigger });

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isStarted]);

  return (
    <p className="text-gray-400 leading-relaxed text-lg font-mono min-h-[160px] md:min-h-[120px]">
      {currentText}
      <span className="inline-block w-2 h-5 bg-yellow-400 ml-1 animate-pulse align-middle"></span>
    </p>
  );
};

// --- 3. Main Section ---
export default function About() {
  const containerRef = useRef(null);

  return (
    <section
      id="About"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 border-y border-white/5 relative overflow-hidden "
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-10 gap-12 items-center relative z-10">
        
       
     <div className="md:col-span-4 flex justify-center md:justify-end">
  <div className="group relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] 
    rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl 
    transition-all duration-500 hover:shadow-yellow-400/50 hover:-translate-y-2">

    <img 
      src="/MYprofile.jpg"
      alt="Sadia Bhaks"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

   
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

  
    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
      rotate-45 group-hover:translate-x-full transition-all duration-700"></div>

  </div>
</div>
        
        <div className="md:col-span-6 space-y-12">
          <div className="space-y-4">
            <h2 className="text-yellow-400 font-mono text-sm tracking-widest uppercase">
              [ <ScrambleText text="My.Identity" /> ]
            </h2>
            <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter uppercase italic">
              About <span className="text-yellow-400">Me</span>
            </h1>
          </div>

          <div className="max-w-2xl">
            <Typewriter
              text="I am a Full Stack Developer based in Sylhet, focused on building high-performance web applications. My expertise spans React, Next.js, and AI integration, bridging the gap between aesthetic UI and robust architecture."
              delay={100} // Much slower typing speed
              startTrigger={containerRef}
            />
          </div>

          <div className="pt-8">
            <a
              href="/Sadia_Bhaks.pdf"
              download
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-transparent border border-yellow-400 text-yellow-400 font-mono text-xs uppercase tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30vw] font-black uppercase text-white">About</span>
      </div>
    </section>
  );
}