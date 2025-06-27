import { useState } from 'react';
import { Link, Element } from "react-scroll";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Skills';
import About from './components/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full flex md:flex-row flex-col overflow-hidden h-screen">
        <div className="lg:w-1/4 md:w-2/6 bg-[#030712] text-white md:h-screen sticky top-0 right-4 overflow-hidden">
          <Navbar />
        </div>

        <div id="scroll-container" className="w-full overflow-y-auto">
          <Home />
          <Projects />
          <About />
        </div>
      </div>
    </>
  )
}

export default App
