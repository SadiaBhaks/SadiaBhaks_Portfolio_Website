import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    title:"E-commerce Website with Rasa Chatbot",
    image:"/ecommerce.png",
    link:"https://github.com/SadiaBhaks/E-Commerce-Website-With-Rasa-AI-Chatbot.git"

  },
  {
    title: "Disaster Resource Coordination",
    image: "/DisasterResource.png", 
    link: "https://github.com/SadiaBhaks/Disaster_resource_coordinator.git",
  },
  
  {
    title: "Tailwind React Demo",
    image: "/tailwind_react.jpg",
    link: "https://github.com/SadiaBhaks/Tailwind-React-project.git",
  },
];

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const handleClick = () => {
    window.open("https://github.com/SadiaBhaks", "_blank");
  };

  return (
    <section id="Projects" className="bg-black py-10 md:py-20 w-full min-h-screen">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold py-5 mb-8 md:mb-12 text-center text-white">
          My <span className="text-yellow-400">Projects</span>
        </h2>
      </div>
      
      <div className="relative flex items-center justify-center w-full h-auto md:h-[600px] bg-black overflow-hidden px-4 md:px-0">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 h-full w-12 md:w-24 flex items-center justify-center bg-gradient-to-r from-black/60 to-transparent text-yellow-400 hover:text-white transition z-30"
          aria-label="Previous project"
        >
          <FiArrowLeft size={isMobile ? 40 : 100} />
        </button>

        {/* Project Cards */}
        <div className="flex gap-4 md:gap-10 items-center transition-transform duration-500 w-full justify-center">
          {projects.map((project, index) => {
            // For mobile, only show current project without side previews
            if (isMobile && index !== current) return null;
            
            let position = "scale-75 opacity-40 blur-sm";
            if (!isMobile) {
              if (index === current)
                position = "scale-100 opacity-100 blur-0 z-20";
              if (index === (current + 1) % projects.length)
                position = "scale-90 opacity-70 blur-md z-10";
              if (index === (current - 1 + projects.length) % projects.length)
                position = "scale-90 opacity-70 blur-md z-10";
            } else {
              position = "scale-100 opacity-100 blur-0 z-20"; // Mobile always shows current clearly
            }

            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${position} bg-gray-900/70 backdrop-blur-md border border-yellow-400 rounded-xl shadow-2xl p-3 md:p-4 w-full max-w-[90vw] md:w-[420px] `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-3 w-full h-auto max-h-[200px] md:max-h-none object-contain"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200/333/fff?text=Image+Not+Found';
                  }}
                />
                <h2 className="text-yellow-400 text-xl font-bold mb-2 text-center">
                  {project.title}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white hover:text-yellow-400"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 h-full w-12 md:w-24 flex items-center justify-center bg-gradient-to-l from-black/60 to-transparent text-yellow-400 hover:text-white transition z-30"
          aria-label="Next project"
        >
          <FiArrowRight size={isMobile ? 40 : 100} />
        </button>
      </div>
      
      {/* Mobile indicators */}
      {isMobile && (
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? 'bg-yellow-400' : 'bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
      )}
     <div className="flex justify-center items-center gap-6 mt-20 md:mt-5">
  <h1 className="text-white underline">For more projects:</h1>
  <button
    onClick={handleClick}
    className="px-6 py-2 bg-yellow-400 text-black text-2xl rounded-lg shadow-md hover:bg-gray-400 hover:text-white transition"
  >
    Visit My GitHub
  </button>
</div>

    </section>
  );
}