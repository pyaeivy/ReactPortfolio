import { FaMoon, FaSun } from "react-icons/fa";

export const MobileMenu = ({ menuOpen, setMeunOpen, darkMode }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        ${darkMode ? "bg-[rgba(10,10,10,.95)]" : "bg-white/98 backdrop-blur-md"}`}
    >
      {/* Close button */}
      <button
        onClick={() => setMeunOpen(false)}
        className={`absolute top-4 right-6 text-3xl focus:outline-none cursor-pointer transition-colors
          ${darkMode ? "text-white hover:text-blue-400" : "text-gray-800 hover:text-blue-500"}`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Nav links */}
      {["home", "about", "projects", "contact"].map((link) => (
        <a
          key={link}
          href={`#${link}`}
          onClick={() => setMeunOpen(false)}
          className={`text-2xl font-semibold my-4 capitalize transform transition-all duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            ${darkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-800 hover:text-blue-500"}`}
        >
          {link}
        </a>
      ))}
    </div>
  );
};