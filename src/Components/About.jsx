import React from "react";

import WavyBackground from "./WavyBackground";


export default function About() {

  
  return (
    <section id="About" className="relative bg-black min-h-screen flex flex-col md:flex-row justify-center items-center px-6 overflow-hidden">
      
      
         <div className="absolute inset-0 z-0">
    <WavyBackground />
  </div>
      
     
      <div className="relative  mt-10 max-w-lg text-center md:text-left">
        <h1 className="text-yellow-400 text-4xl md:text-5xl font-extrabold mb-4">
          <div className="w-40 border-t-6 border-gray-300 mb-3 "></div>
          Hi, I'm Sadia Bhaks
        </h1>
        <p className="text-white font-medium text-lg md:text-xl">
          a passionate Full Stack Developer<br/> 
          who loves building modern, scalable, and user-friendly applications.
        </p>
        <div className="p-6">
          <button
  onClick={() => {
    document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-10 py-5 rounded-lg bg-yellow-400 text-black text-2xl font-semibold hover:bg-gray-400 hover:text-white transition"
>
  Go to Projects ➜
</button>
        </div>
      </div>

      
      <div className="flex flex-col justify-center items-center border-2 border-blue-500 rounded-xl p-6 m-6 w-full sm:w-3/4 md:w-1/2 lg:w-96 bg-black/50 backdrop-blur-md shadow-[0_0_20px_#3b82f6]">
        <h1 className="text-2xl font-bold text-yellow-400 mb-4">About Me</h1>
        <p className="text-white text-lg leading-relaxed mb-3">
          I specialize in both frontend and backend development, taking an idea 
          from concept to a fully deployed product.
        </p>
        <p className="text-white text-sm leading-relaxed mb-3">
          I create responsive, futuristic, and interactive UIs that deliver seamless user experiences.
        </p>
        <p className="text-white text-sm leading-relaxed mb-3">
          I design robust APIs and database systems that ensure performance, security, and reliability.
        </p>
        <p className="text-white text-sm leading-relaxed">
          <span className="font-semibold text-yellow-300">Full Stack Projects:</span> 
          From authentication systems with role-based access, to resource coordination platforms 
          and portfolio websites, I enjoy solving real-world problems with clean code and scalable architecture.
        </p>
      </div>
    </section>
  );
}
