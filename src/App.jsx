
import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Projects';
import { Contact } from './components/section/Contact';

function App() {
  const [isLoading,setIsloading] = useState(false);
  const [menuOpen, setMeunOpen] = useState(false);

  return <>
  {!isLoading && <LoadingScreen onComplete= {() => setIsloading(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 
      ${isLoading ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen}  setMeunOpen={setMeunOpen}/>;
        <MobileMenu menuOpen={menuOpen}  setMeunOpen={setMeunOpen}/>;
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  </>;
}

export default App;
