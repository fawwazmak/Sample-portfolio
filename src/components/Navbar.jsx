import React from 'react';
import { Link } from "react-scroll";
import { IoMdHome } from "react-icons/io";
import { BiSolidBinoculars } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import fawwaz from "/images/fawwaz.jpg"; 



const Navbar = () => {
    // #030712 black
    // #00bcff blue
  return (
    <div className='md:bg-[#030712] bg-white md:text-white md:h-full md:border-e-4 md:border-b-0 border-b-4 border-[#00bcff] py-4 px-8'>

        <img src={fawwaz} alt="My Image" className='md:h-40 md:w-40 h-20 object-contain block mb-8 border-2 border-[#00bcff] rounded-full' />
        <ul className=' flex md:flex-col md:items-start items-center md:justify-start justify-between md:gap-6 '>
            <Link to="home" smooth={true} duration={500} spy={true} activeClass="active" containerId="scroll-container" offset={-10} className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3 [&.active]:text-[#00bcff] cursor-pointer'>
                <IoMdHome />
                <p>Home</p>
            </Link>

            <Link to="skills" smooth={true} duration={500} spy={true} activeClass="active" containerId="scroll-container" offset={-10} className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3 [&.active]:text-[#00bcff] cursor-pointer'> 
                <BiSolidBinoculars />
                <p>Skills</p>
            </Link>

            <Link to="projects" smooth={true} duration={500} spy={true} activeClass="active" containerId="scroll-container" offset={-10} className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3 [&.active]:text-[#00bcff] cursor-pointer'>
                <BsEmojiSmileUpsideDown />
                <p>Projects</p>
            </Link>

            <Link to="contact" smooth={true} duration={500} spy={true} activeClass="active" containerId="scroll-container" offset={-10} className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3 [&.active]:text-[#00bcff] cursor-pointer'>
                <RiContactsFill />
                <p>Contact</p>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar
