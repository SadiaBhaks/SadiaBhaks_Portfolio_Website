import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Metropolitan University",
      year: "Expected December 2026",
      location: "Sylhet, Bangladesh",
      description: "Specialized in Software Engineering and Artificial Intelligence.",
    },
    {
      degree: "Higher Secondary Certificate",
      school: "Khajanchibari School And College",
      year: "2019 - 2021",
      location: "Sylhet, Bangladesh",
      description: "Focused on Mathematics, Physics, English, Chemistry and Computer Science.",
    }
  ];

  return (
    <section id="education" className="relative bg-black py-20 px-6 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-yellow-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          My <span className="text-yellow-400">Education</span>
        </h2>

        <div className="relative border-l-2 border-gray-700 ml-4 md:ml-0 md:left-1/2">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-12 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]" />

              {/* Card Container */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:-translate-x-full' : 'md:pl-12 text-left'}`}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                    <GraduationCap className="text-yellow-400 w-6 h-6" />
                    <span className="text-gray-400 font-mono text-sm flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {edu.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-gray-300 font-medium mt-1">{edu.school}</p>
                  
                  <div className={`flex items-center gap-1 text-gray-500 text-sm mt-2 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <MapPin className="w-3 h-3" /> {edu.location}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;