import { useState } from 'react';
import { Link, Element } from "react-scroll";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-full flex md:flex-row flex-col overflow-hidden">
        <div className="lg:w-1/4 md:w-2/6 bg-[#030712] text-white md:h-full overflow-hidden">
          <Navbar />
        </div>

        <div className="w-full">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
