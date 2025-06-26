import React from 'react';
import { Element } from "react-scroll";
import ParticleBackground from "../components/ParticleBackground";


const Home = () => {
  return (
    <Element name='home' className='h-screen w-full flex flex-col gap-4 items-center justify-center bg-[#030712] text-white'>
        <ParticleBackground />
        <h1 className='text-5xl'>Hello, I'm <span className='text-[#00bcff]'>Fawwaz</span>.</h1>
        <p className='text-4xl'>I'm a FrontEnd Developer</p>
    </Element>
  )
}

export default Home
