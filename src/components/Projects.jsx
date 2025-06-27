import React from 'react';
import { Element } from "react-scroll";
import ParticleBackground from "./ParticleBackground";

const About = () => {
  const projects = [
    {
      title: "To do list",
      description: "Full stack to do list app with authentication.",
      image: "/images/toDoApp.png",
      link: "https://to-do-list-one-blue-43.vercel.app/",
    },
    {
      title: "Quiz App",
      description: "A simple quiz app to test your knowledge.",
      image: "/images/quiz.png",
      link: "https://quiz-app-topaz-ten.vercel.app/",
    },
    {
      title: "Weather App",
      description: "A simple weather app to check the weather in your city.",
      image: "/images/weatherApp.png",
      link: "https://weather-app-tau-ten-64.vercel.app/",
    },
    {
      title: "Cut off mark",
      description: "A simple app to check your cut off mark for admission.",
      image: "/images/cutOffMark.png",
      link: "https://check-your-cut-off-mark.vercel.app/",
    },
  ];
  return (
    <Element name='projects' className='w-full flex flex-col gap-4 items-center justify-center  text-white'>
      <ParticleBackground />
      <h1 className='text-5xl'>Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-md border border-gray-800 transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="px-4 py-2 bg-yellow-400 text-black rounded-md font-medium hover:bg-yellow-300 transition"
              >
                View Website
              </a>
            </div>
          </div>
        ))}
      </div>

    </Element>
  )
}

export default About
