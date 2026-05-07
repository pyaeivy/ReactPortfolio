import { RevealOnScreen } from "./RevealOnScreen";

const projects = [
  {
    title: "Full-Stack Finance-Tracker Project",
    description: "A complete personal finance tracking application.",
    tech: ["SpringBoot", "MySQL", "React", "TypeScript"],
    media: { type: "video", src: "/video/personalFinanceTracker.mp4" },
    link: { label: "View Git →", href: "https://github.com/pyaeivy/Personal-finance-tracker" },
  },
  {
    title: "Responsive Dashboard Flame",
    description: "Flame logo and Designs Monthly Dashboard.",
    tech: ["HTML", "CSS", "JavaScript"],
    media: { type: "image", src: "/images/Flame.png", alt: "Flame Dashboard" },
    link: { label: "View Project →", href: "https://responsive-dashboard-flame.vercel.app/" },
  },
  {
    title: "Responsive Clock-Watch",
    description: "Set Date, Set Alarm, Set-Timer, and more.",
    tech: ["JavaScript", "React", "Bootstrap", "HTML5", "CSS3"],
    media: { type: "image", src: "/images/Clock.png", alt: "Clock Watch" },
    link: { label: "View Project →", href: "https://clock-two-plum.vercel.app/" },
  },
  {
    title: "Mini Project — CSS Animation",
    description: "Creative CSS animation showcase.",
    tech: ["HTML", "CSS"],
    media: { type: "image", src: "/images/CssAni2.png", alt: "CSS Animation" },
    link: { label: "View Project →", href: "https://hi-mu-seven.vercel.app/" },
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r
            from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 dark:border-white/10
                           hover:-translate-y-1 duration-200
                           hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]
                           transition-all bg-white/50 dark:bg-transparent"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 text-sm rounded-full py-1 px-3
                                 hover:bg-blue-500/20 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Media */}
                <div className="mt-2">
                  {project.media.type === "video" ? (
                    <video
                      loop autoPlay muted playsInline
                      className="w-full h-auto border border-gray-200 dark:border-white/30 rounded-xl"
                    >
                      <source src={project.media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={project.media.src}
                      alt={project.media.alt}
                      className="w-full h-auto border border-gray-200 dark:border-white/30 rounded-xl"
                    />
                  )}
                </div>

                {/* Link */}
                <div className="flex justify-between items-center mt-2">
                  <a
                    href={project.link.href}
                    target="_blank" rel="noreferrer"
                    className="text-blue-500 hover:text-blue-400 dark:text-blue-400
                               dark:hover:text-blue-300 transition-colors my-4 font-medium"
                  >
                    {project.link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </RevealOnScreen>
    </section>
  );
};
