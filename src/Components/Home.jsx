import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SadiaUltimatePortfolio() {
  const containerRef = useRef(null);
  const horizontalSection = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
   
    gsap.to(".floating-developer", {
      y: 20,
      rotation: 2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  
    if (nameRef.current) {
      const nameElement = nameRef.current;
      const text = "SADIA BHAKS";
      nameElement.innerHTML = "";
      
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");
        
        if (char === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        
        span.style.display = "inline-block";
        span.style.position = "relative";
        span.classList.add("letter");
        span.setAttribute("data-index", i);
        nameElement.appendChild(span);
      }
    }

    
    const letters = document.querySelectorAll(".letter");
    console.log("Found letters:", letters.length); // Should be 10 (S,A,D,I,A, ,B,H,A,K,S)
    
   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalSection.current,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1.5,
        markers: false
      }
    });

    
    tl.to(".scroll-content", {
      xPercent: -70,
      ease: "none",
      duration: 2
    }, 0);

    
    letters.forEach((letter, index) => {
      tl.to(letter, {
        rotationY: 180,
        rotationX: gsap.utils.random(-20, 20),
        scale: 0.8,
        duration: 0.4,
        ease: "back.in",
        transformOrigin: "center center"
      }, index * 0.03); // Staggered start
    });

    letters.forEach((letter, index) => {
      tl.to(letter, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        transformOrigin: "center center"
      }, index * 0.03 + 0.8); 
    });

   
    letters.forEach((letter, index) => {
      const angle = (index / letters.length) * Math.PI * 2;
      const radius = 300;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius - 200;
      
      tl.to(letter, {
        x: x,
        y: y,
        rotation: gsap.utils.random(-180, 180),
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        transformOrigin: "center center"
      }, index * 0.05 + 1.8);
    });

  
    const objects = gsap.utils.toArray(".flying-obj");
    objects.forEach((obj, i) => {
      const speed = obj.dataset.speed || 1;
      tl.to(obj, {
        x: `-=${800 * speed}`,
        y: `+=${gsap.utils.random(-200, 200)}`,
        rotation: `+=${gsap.utils.random(-720, 720)}`,
        scale: gsap.utils.random(0.5, 1.5),
        ease: "none",
        duration: 2
      }, i * 0.2);
    });

   
    gsap.from(".sticker-pop", {
      scale: 0,
      rotation: -45,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: horizontalSection.current,
        start: "top 30%",
        end: "top 10%",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className=" text-white selection:bg-yellow-400 selection:text-black overflow-x-hidden md:pt-20">
      

      <section ref={horizontalSection} className="h-screen overflow-hidden flex items-center relative ">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="flying-obj absolute top-[10%] left-[80%] text-6xl md:text-8xl  opacity-20" data-speed="2">{"{ }"}</div>
          <div className="flying-obj absolute top-[60%] left-[90%] text-6xl text-yellow-500 opacity-30" data-speed="1.5">★</div>
          <div className="flying-obj absolute top-[30%] left-[110%] w-20 h-20 border-4 border-white opacity-10" data-speed="3"></div>
          <div className="flying-obj absolute top-[80%] left-[70%] text-4xl text-yellow-400 opacity-20" data-speed="2.5">⚡</div>
        </div>

        <div className="scroll-content flex whitespace-nowrap items-center px-[10vw] gap-[20vw] relative z-10">
          
          
          <div 
            ref={nameRef} 
            className="text-[18vw] font-black uppercase tracking-tighter italic " 
            style={{ 
              perspective: "1200px",
              transformStyle: "preserve-3d"
            }}
          >
            SADIA BHAKS
          </div>

          <div className="flex gap-10 items-center">
        <div className="sticker-pop bg-yellow-400 text-black p-6 rounded-xl -rotate-6 shadow-2xl ">
              <span className="text-4xl font-black italic uppercase">Full-Stack</span>
            </div>
            
            <div className="floating-developer text-[15vw] md:text-[12vw] font-black uppercase outline-text">
              DEVELOPER
            </div>

            <div className="sticker-pop bg-white text-black p-4 rounded-full rotate-12">
              <span className="text-2xl font-bold uppercase">Secure Backends</span>
            </div>
          </div>

          <div className="text-[8vw] font-light leading-none max-w-[150vw] whitespace-normal pr-40">
            'building <span className="text-yellow-400 font-black">responsive</span> frontends and 
            <span className="italic"> complete web apps'</span>
          </div>

        </div>
      </section>

      

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px white;
        }
        /* Custom Split Styles */
        :global(.letter) {
          display: inline-block !important;
          transform-origin: center center;
          transform-style: preserve-3d;
          white-space: pre;
          will-change: transform, opacity;
          backface-visibility: visible;
          transition: none;
        }
      `}</style>
    </div>
  );
}