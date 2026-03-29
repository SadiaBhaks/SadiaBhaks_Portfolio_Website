import React, { useRef } from "react";
import { FaDocker, FaPython, FaAws, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiGooglecloud, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
];

export default function SkillRally() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const balls = gsap.utils.toArray(".skill-node");
    
    balls.forEach((ball) => {
      
      gsap.set(ball, {
        x: gsap.utils.random(0, window.innerWidth - 150),
        y: gsap.utils.random(0, window.innerHeight - 150),
      });

    
      const move = () => {
        gsap.to(ball, {
          x: gsap.utils.random(50, window.innerWidth - 150),
          y: gsap.utils.random(50, window.innerHeight - 150),
          duration: gsap.utils.random(3, 6), 
          ease: "none",
          onComplete: move, 
        });
      };

      move();

      
      gsap.to(ball, {
        rotateX: "random(-30, 30)",
        rotateY: "random(-30, 30)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, { scope: containerRef });

  return (
    <section id="Skills"
      ref={containerRef} 
      className=" w-full h-screen overflow-hidden relative cursor-crosshair"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-10 left-10 z-20">
        <h2 className="text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tighter">
          MY <span className="text-yellow-400/20">SKILLS</span>
        </h2>
      </div>

      {/* The Balls */}
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-node absolute group"
          style={{ perspective: "1000px" }}
        >
          <div 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-900/40 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-yellow-400/50 group-hover:bg-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            style={{ 
              boxShadow: `inset 0 0 20px ${skill.color}22, 0 10px 30px rgba(0,0,0,0.4)` 
            }}
          >
            <div 
              className="text-4xl md:text-5xl" 
              style={{ color: skill.color, filter: `drop-shadow(0 0 10px ${skill.color}44)` }}
            >
              {skill.icon}
            </div>
            
            <span className="mt-2 text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>

            {/* Reflection Shine */}
            <div className="absolute top-4 left-6 w-5 h-2.5 bg-white/10 rounded-full blur-[2px] -rotate-45" />
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 right-10 text-gray-700 font-mono text-xs uppercase tracking-widest animate-pulse">
        [ System Active ]
      </div>
    </section>
  );
}