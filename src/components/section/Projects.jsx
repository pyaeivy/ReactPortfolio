import { RevealOnScreen } from "./RevealOnScreen";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 founded-xl border rounded-[10px] border-white/10 hover:-translate-y-1 duration-200
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_blue/20]"
            >
              <h3 className="text-xl font-bold mb-2">
                Full-Stack Finance-Tracker Project
              </h3>
              <p className="text-gray-400 mb-4">Git Link</p>
              <div>
                {["SpringBoot", "Mysql", "React", "Typescript"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm rounded-full py-1 px-4 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_blue/30] transition-all cursor-pointer mx-1"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div>
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="border border-white/30 rounded-[10px] mt-2"
                >
                  <source
                    src="./src/video/personalFinanceTracker.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/pyaeivy/Personal-finance-tracker"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Git {"->"}
                </a>
              </div>
            </div>
            <div
              className="p-6 founded-xl border rounded-[1rem] border-white/10 
                     hover:-translate-y-1 duration-200
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_blue/20]"
            >
              <h3 className="text-xl font-bold mb-2">
                Responsive Dashboard Flame
              </h3>
              <p className="text-gray-400 mb-4">
                Flame logo and Designs Monthly Dashboard.
              </p>
              <div>
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 text-sm rounded-full py-1 px-4 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_blue/30] transition-all cursor-pointer mx-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <img
                  src="./src/images/Flame.png"
                  alt="Flame.jpg"
                  className="border border-white/30 rounded-[10px] mt-2"
                ></img>
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://responsive-dashboard-flame.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project {"->"}
                </a>
              </div>
            </div>

            <div
              className="p-6 founded-xl border rounded-[10px] border-white/10 hover:-translate-y-1 duration-200
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_blue/20]"
            >
              <h3 className="text-xl font-bold mb-2">Responsive Clock-Watch</h3>
              <p className="text-gray-400 mb-4">
                Set Date,Set Alarm, Set-Timer , so on.
              </p>
              <div>
                {["JavaScript", "React", "Bootstrap", "HTML5", "CSS3"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm rounded-full py-1 px-4 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_blue/30] transition-all cursor-pointer mx-1"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div>
                <img
                  src="./src/images/Clock.png"
                  alt="Flame.jpg"
                  className="border border-white/30 rounded-[10px] mt-2 "
                ></img>
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://clock-two-plum.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project {"->"}
                </a>
              </div>
            </div>

            <div
              className="p-6 founded-xl border rounded-[10px] border-white/10 hover:-translate-y-1 duration-200
                     hover:border-blue-500/30 hover:shadow-[0_2px_8px_blue/20]"
            >
              <h3 className="text-xl font-bold mb-2">Mini Project</h3>
              <p className="text-gray-400 mb-4">CSS Animation.</p>
              <div>
                {["HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 text-sm rounded-full py-1 px-4 
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_blue/30] transition-all cursor-pointer mx-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <img
                  src="./src/images/CssAni2.png"
                  alt="Flame.jpg"
                  className="border border-white/30 rounded-[10px] mt-2 "
                ></img>
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://hi-mu-seven.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project {"->"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScreen>
    </section>
  );
};
