import React from 'react';
import { Element } from "react-scroll";
import ParticleBackground from "./ParticleBackground";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGit, FaSass } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";
import Avatar from "./Avatar";


const Projects = () => {
    
  return (
    <Element name='project' className='w-full flex flex-col gap-4 items-center justify-center  text-white'>
        <ParticleBackground />
        <h1 className='text-5xl'>Projects</h1>

        <section className="min-h-screen text-white px-4 md:px-20 py-20" id="about">
            <Avatar />
            <p className="text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                Fully committed to the philosophy of life-long learning, I’m a frontend developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
                {[ 
                { icon: <FaHtml5 />, label: "HTML" },
                { icon: <FaCss3Alt />, label: "CSS" },
                { icon: <FaJs />, label: "JavaScript" },
                { icon: <FaReact />, label: "React" },
                { icon: <SiNextdotjs />, label: "Next.js" },
                { icon: <FaSass />, label: "Sass" },
                { icon: <FaGit />, label: "Git" },
                { icon: <SiMongodb />, label: "MongoDB" },
                { icon: <SiExpress />, label: "Express.js" },
                { icon: <FaNode />, label: "Node.js" },
                ].map((tech, i) => (
                <div
                    key={i}
                    className="w-28 h-28 flex flex-col items-center justify-center border rounded-lg border-transparent hover:border-pink-500 transition-all duration-300 text-white text-center p-4 bg-[#111] shadow-md hover:shadow-pink-500"
                >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-medium">{tech.label}</p>
                </div>
                ))}
            </div>
        </section>
    </Element>
  )
}

export default Projects
