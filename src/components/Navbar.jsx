import React from 'react';
import { Link } from "react-scroll";
import { IoMdHome } from "react-icons/io";
import { BiSolidBinoculars } from "react-icons/bi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";


const Navbar = () => {
    // #030712 black
    // #00bcff blue
  return (
    <ul className='bg-[#030712] text-white md:h-full flex md:flex-col md:items-start items-center md:justify-start justify-between md:gap-6 md:border-e-4 md:border-b-0 border-b-4 border-[#00bcff] py-4 px-8'>
        <Link to="home" smooth={true} duration={500} spy={true} activeClass="active">
            <li className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3'>
                <IoMdHome />
                <p>Home</p>
            </li>
        </Link>
        <Link to="project" smooth={true} duration={500} spy={true} activeClass="active">
            <li className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3'>
                <BiSolidBinoculars />
                <p>Projects</p>
            </li>
        </Link>
        <Link to="about" smooth={true} duration={500} spy={true} activeClass="active">
            <li className='text-2xl font-bold hover:text-[#00bcff] duration-300 flex items-center gap-3'>
                <BsEmojiSmileUpsideDown />
                <p>About</p>
            </li>
        </Link>
    </ul>
  )
}

export default Navbar
