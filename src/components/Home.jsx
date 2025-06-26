import React from 'react';
import { Element } from "react-scroll";
import ParticleBackground from "../components/ParticleBackground";


const Home = () => {
  return (
    <Element name='home' className='h-screen w-full text-center flex flex-col gap-4 items-center justify-center  text-white'>
        <ParticleBackground />
        <h1 className='text-5xl'>Hello, I'm <span className='text-[#00bcff]'>Fawwaz</span>.</h1>
        <p className='text-4xl'>I'm a FrontEnd Developer</p>
        <p className='py-3 px-12 border-2 border-[#00bcff] hover:translate-y-0.5 hover:shadow-sm hover:shadow-white'>Contact Me</p>
    </Element>
  )
}

export default Home
