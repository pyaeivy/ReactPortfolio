import { RevealOnScreen } from "./RevealOnScreen";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Angular", "TypeScript", "Tailwindcss", "Bootstrap"];
const backendSkills  = ["JAVA", "SpringBoot", "MySQL", "JPA", "PostgreSQL"];
const tools          = ["VS Code", "Git", "GitHub", "Postman", "Eclipse", "IntelliJ IDEA"];

const SkillBadge = ({ label }) => (
  <span className="bg-blue-500/10 py-1 px-3 rounded-full text-sm text-blue-500
                   hover:bg-blue-500/20 transition cursor-pointer">
    {label}
  </span>
);

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScreen>
        <div className="max-w-4xl mx-auto px-4 w-full">

          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
            from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills card */}
          <div className="rounded-xl p-4 sm:p-8 border border-gray-200 dark:border-white/10
                          hover:-translate-y-1 transition-all">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Frontend & Backend grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => <SkillBadge key={key} label={tech} />)}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => <SkillBadge key={key} label={tech} />)}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, key) => <SkillBadge key={key} label={tool} />)}
              </div>
            </div>
          </div>

          {/* Education & Profile grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">

            {/* Education */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10
                            hover:-translate-y-1 transition-all">
              <h3 className="font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  <strong>B.A English</strong> — Dagon University (2025 – Present)
                </li>
                <li>
                  JavaSpring (SpringBoot) — JDC (Java Developer Class — Sayar Zaw Min Lwin)
                </li>
                <li>A+ (YGN-NET)</li>
              </ul>
            </div>

            {/* Profile */}
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10
                            hover:-translate-y-1 transition-all">
              <h3 className="font-bold mb-4">Profile</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <div className="flex flex-col sm:flex-row gap-1">
                  <span className="font-semibold text-transparent bg-clip-text
                                   bg-gradient-to-b from-blue-500 to-cyan-400 shrink-0">
                    Pyae Phyo Thaw
                  </span>
                  <span>(Junior Full-Stack Developer)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="font-semibold shrink-0">Email:</span>
                  <span className="break-all">pyaephyothaw200@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold shrink-0">Phone:</span>
                  <span>+959 750064068</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold shrink-0">Address:</span>
                  <span>No.611 Anawyahtar Road, South Dagon, Yangon</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold shrink-0">NRC:</span>
                  <span>12/ DAGATA (N) / 118422</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 justify-center mt-8">
            {[
              { href: "https://www.facebook.com/pyae.phyo.thaw.94794?mibextid=ZbWKwL", icon: <FaFacebook /> },
              { href: "https://github.com/pyaeivy", icon: <FaGithub /> },
              { href: "https://www.linkedin.com/in/pyae-phyo-thaw-673352289", icon: <FaLinkedin /> },
            ].map(({ href, icon }, i) => (
              <span key={i}
                className="px-2 py-2 rounded-full border border-gray-300 dark:border-white/30
                           hover:-translate-y-1 transition-all">
                <a
                  href={href}
                  target="_blank" rel="noreferrer"
                  className="text-gray-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400
                             text-2xl transition-colors block"
                >
                  {icon}
                </a>
              </span>
            ))}
          </div>

        </div>
      </RevealOnScreen>
    </section>
  );
};