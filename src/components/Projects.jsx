import React from 'react';
import { Element } from "react-scroll";
import ParticleBackground from "../components/ParticleBackground";


const Projects = () => {
  return (
    <Element name='project' className='h-screen w-full flex flex-col gap-4 items-center justify-center  text-white'>
        <ParticleBackground />
        <h1 className='text-5xl'>Projects</h1>
    </Element>
  )
}

export default Projects
