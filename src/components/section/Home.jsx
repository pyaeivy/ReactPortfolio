import { RevealOnScreen } from "./RevealOnScreen"

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <RevealOnScreen>
        <div className="text-center z-10 px-4">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Pyae Phyo Thaw
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-lg mx-auto px-2">
            I'm a full-stack developer who loves crafting clean,
            scalable web applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-5
                rounded-xl font-medium transition relative overflow-hidden duration-300
                hover:-translate-y-1 "
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6
                rounded-xl font-medium transition-all duration-300
                hover:-translate-y-1
                hover:bg-blue-500/10"
            >
              Contact me
            </a>
          </div>

        </div>
      </RevealOnScreen>
    </section>
  );
};