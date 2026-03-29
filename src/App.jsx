import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import RainBackground from "./Components/RainBackground";

function App() {
  return (
    <div 
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        
        background: "radial-gradient(circle at center, #111111 0%, #000000 100%)",
        backgroundColor: "#000000" // Fallback
      }}
    >
      
      <RainBackground />

      <div className="relative z-10 bg-transparent">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;