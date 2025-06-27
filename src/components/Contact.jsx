import React from 'react'
import { Element } from "react-scroll";
import ParticleBackground from "./ParticleBackground";



const Contact = () => {
  return (
    <Element name='contact' className='w-full flex flex-col gap-4 items-center justify-center  text-white pb-8'>
        <ParticleBackground />
        <h1 className='text-5xl'>Contact</h1>
          
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Feel free to contact me for any work related inquiries or questions you may have about any of my work.
        </p>


        <form action="https://formspree.io/f/xqazpqvg" method="POST" className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-10 w-4/5" >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name
                </label>
                <input type="text" name="firstName" required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bcff] dark:bg-gray-800 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name
                </label>
                <input type="text" name="lastName" required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bcff] dark:bg-gray-800 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" name="_replyto" required className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bcff] dark:bg-gray-800 dark:text-white" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Write Message
              </label>
              <textarea name="message" required rows="8" className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00bcff] dark:bg-gray-800 dark:text-white"></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button type="submit" className="px-6 py-3 border border-[#00bcff] text-[#00bcff] font-semibold rounded hover:bg-[#00bcff] hover:text-black transition flex items-center space-x-2">
              <span>SEND EMAIL</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4" />
              </svg>
            </button>
          </div>
        </form>
    </Element>
  )
}

export default Contact
