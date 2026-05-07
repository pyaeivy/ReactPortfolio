import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMeunOpen, darkMode, setDarkMode }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 backdrop-blur-lg border-b shadow-lg transition-colors duration-300
        ${darkMode
          ? "bg-[rgba(10,10,10,.85)] border-white/10"
          : "bg-white/80 border-gray-200"}`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className={`font-mono text-xl font-bold transition-colors duration-300
              ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            {""}Pyaeivy<span className="text-blue-500">.Dev</span>
          </a>

          {/* Hamburger (mobile) */}
          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden text-2xl
              ${darkMode ? "text-white" : "text-gray-800"}`}
            onClick={() => setMeunOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop nav links + toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`capitalize transition-colors duration-200 hover:text-blue-500
                  ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {link}
              </a>
            ))}

            {/* Dark / Light Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none
                ${darkMode
                  ? "bg-white/10 hover:bg-white/20 text-yellow-400"
                  : "bg-gray-100 hover:bg-gray-200 text-indigo-600"}`}
            >
              {darkMode
                ? <FaSun className="text-lg" />
                : <FaMoon className="text-lg" />
              }
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};