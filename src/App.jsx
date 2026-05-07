
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
import { Footer } from './components/Footer';


function App() {
  const [isLoading, setIsloading] = useState(false);
  const [menuOpen, setMeunOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return <>
    {!isLoading && <LoadingScreen onComplete={() => setIsloading(true)} />}
    <div
      className={`min-h-screen transition-opacity duration-700
        ${isLoading ? "opacity-100" : "opacity-0"}
        ${darkMode
          ? "dark bg-gray-950 text-gray-100"
          : "bg-gray-50 text-gray-900"}`}
    >
      <Navbar
        menuOpen={menuOpen}
        setMeunOpen={setMeunOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <MobileMenu
        menuOpen={menuOpen}
        setMeunOpen={setMeunOpen}
        darkMode={darkMode}
      />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </>;
}

export default App;
