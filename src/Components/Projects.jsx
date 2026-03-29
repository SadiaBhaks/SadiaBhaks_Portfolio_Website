import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {  ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
{
    title: "E-commerce Website with Rasa Chatbot", 
    video: "/E-commerce.mp4",
    link: "https://github.com/SadiaBhaks/E-Commerce-Website-With-Rasa-AI-Chatbot.git"
  },
  {
    title: "AI Knowledge Based Platform",
    video: "/AIknowledgebased.mp4",
    link: "https://github.com/SadiaBhaks/AI-knowledge-based-platform.git",
  },
  {
    title: "Anemia Prediction App",
    video: "/AiAnemia.mp4",
    link: "https://github.com/SadiaBhaks/Anemia_prediction_app.git",
 },
];

export default function ProjectsCarousel() {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-card");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${projects.length * 150}%`, // Longer scroll for smoother pacing
        pin: true,
        scrub: 0.1, // Near-instant response to scroll
        anticipatePin: 1,
      }
    });

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;

      tl.to(card, {
        rotateX: -110,    // Flips back and away
        y: -100,          // Lifts slightly for 3D depth
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power4.inOut" // Snappy, modern easing
      }, index); 
    });
  }, { scope: container });

  return (
    <section id="Projects"
      ref={container} 
      className=" w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-yellow-400">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2">Scroll to explore</p>
      </div>

      {/* Increased Width Container */}
      <div 
        className="relative w-[95vw] max-w-[1100px] h-[500px] md:h-[650px]" 
        style={{ perspective: "2000px" }} // Deeper perspective for wider cards
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card absolute inset-0 bg-gray-900/90 backdrop-blur-lg border border-yellow-400/30 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] origin-bottom"
            style={{ zIndex: projects.length - index }}
          >
            <div className="w-full md:w-4/5 h-[400px] md:h-full overflow-hidden rounded-2xl border border-white/10 relative group">
  <video
    src={project.video} // Make sure to add 'video' paths to your projects array
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  {/* Optional Overlay to make the video feel more integrated */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
</div>
            
            {/* Text Section */}
            <div className="w-full md:w-2/5 flex flex-col justify-center items-start text-left">
              <h3 className="text-yellow-400 text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Interactive full-stack application built with modern web technologies.
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-white transition-all duration-300"
              >
                <FaGithub size={24} /> View GitHub
              </a>
               <a href={project.link} target="_blank" className="text-accent/30 hover:text-primary">
                    <ExternalLink size={12} />
                  </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}