import React, { useState } from "react";
import { cn } from "../lib/utils"; 


const skills= [
    {name:"HTML/CSS",level:100,category:"frontend"},
    {name:"Javascript",level:95,category:"frontend"},
    {name:"React",level:95,category:"frontend"},
    {name:"Tailwind CSS",level:100,category:"frontend"},
    {name:"Typescript",level:85,category:"frontend"},
    {name:"Next.js",level:85,category:"frontend"},

    {name:"Node.js",level:95,category:"Backend"},
    {name:"Express",level:85,category:"Backend"},
    {name:"MongoDB",level:100,category:"Backend"},
    {name:"PostgreSQL",level:90,category:"Backend"},
    {name:"GraphQL",level:80,category:"Backend"},
    {name:"MySQL",level:100,category:"Backend"},
    {name:"Php",level:80,category:"Backend"},
    {name:"Java",level:95,category:"Backend"},
    
    {name:"AWS",level:80,category:"Cloud"},
    {name:"DigitalOcean",level:70,category:"Cloud"},
    {name:"Azure",level:95,category:"Cloud"},
    {name:"GoogleCloud",level:85,category:"Cloud"},

    


    {name:"Git/Github",level:100,category:"tools"},
    {name:"Docker",level:95,category:"tools"},
    {name:"Figma",level:80,category:"tools"},
    {name:"VS code",level:100,category:"tools"},
    {name:"Kubernetes",level:75,category:"tools"},
];

const categories = ["all","frontend","Backend","Cloud","tools"];

export default function Skills(){
    const [activeCategory,setActiveCategory] =useState("all");

    const filteredSkills = skills.filter((skills) => activeCategory ==="all" || skills.category===activeCategory)

return(
<section id="Skills" className="bg-black py-20 px-4 position relative ">
          <div className="container mx-auto max-w-5xl ">
     <h2 className="text-3xl md:text-4xl font-bold py-5 mb-12 text-center text-white">
        My <span className="text-yellow-400">Skills</span>
     </h2>
    </div>
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {categories.map((category,key) =>(
                <button key={key}
                onClick={() => setActiveCategory(category)} 
                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
                  activeCategory === category ? "bg-yellow-400 text-white " :"bg-gray-400 text-black hover:bg-gray-400" 
                )}
                >
                    {category}

                </button>
            ))}

          </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredSkills.map((skills,key) =>(
            <div key={key} className="bg-black-40 p-6 rounded-full   border-2 border-yellow-400  backdrop-blur-md shadow-[0_0_10px_#facc15] ">
                <div className="text-left mb-4 ">
                    <h3 className="text-white font-semibold text-lg ">{skills.name}</h3>
                </div>
                <div className="w-full bg-gray-400 h-2 rounded-full overflow-hidden">
                <div className="bg-yellow-400  h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                style={{width:skills.level+ "%"}}
                />

                </div>
                <div className="text-right text-white  mt-1 ">
                   <span className="text-sm ">{skills.level}%</span>

                </div>
                </div>
        ))}
       
    </div> 


</section>

);



}