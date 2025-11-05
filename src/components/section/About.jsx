import { RevealOnScreen } from "./RevealOnScreen";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export const About = () => {
    const frontendSkills = ["HTML","CSS","JavaScript","React", "Angular",  "TypeScript", "Tailwindcss", "Bootstrap"];
    const backendSkills = [ "JAVA", "SpringBoot", "Mysql" , "JPA" ];
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScreen>
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center
                "
            >
              {""}
              About Me
            </h2>
            <div className="rounded-xl p-8 border-whit/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>

              <div className="grid grid-clos-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-tanslate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10  py-1 px-3 rounded-full text-sm text-blue-500 hover:bg-blue-500/20
                                                    hover:shadow[0_2px_8px_rgba(59,130,2246,.2)] transition cursor-pointer
                                    "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-tanslate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 py-1 px-3 rounded-full text-sm text-blue-500 hover:bg-blue-500/20
                                                    hover:shadow[0_2px_8px_darkblue] transition cursor-pointer
                                    "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="font-bold  mb-4">Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                  <li>
                    <strong>B.A English</strong> - Dagon University (2025 -
                    Present)
                  </li>
                  <li>
                    JavaSpring (SpringBoot) - JDC (Java Developer Calss - Sayar
                    Zaw Min Lwin)
                  </li>
                  <li>A+ (YGN-NET)</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="font-bold  mb-4">Profile</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex gap-2">
                    <h4
                      className="font-semibold text-transparent
                                    bg-clip-text bg-gradient-to-b from-blue-500 to-cyan-400"
                    >
                      Pyae Phyo Thaw
                    </h4>
                    <p>(Junior Full-Stack Developer)</p>
                  </div>
                  <div className="flex gap-6">
                    <h4 className="font-semibold">Email :</h4>
                    <p>pyaephyothaw200@gmail.com</p>
                  </div>
                  <div className="flex gap-4">
                    <h4 className="font-semibold">Phone :</h4>
                    <p>+959 750064068</p>
                  </div>
                  <div className="flex gap-2">
                    <h4 className="font-semibold">Address :</h4>
                    <p className="w-3/5">
                      No.611 Anawyahtar Road, South Dagon , Yangon
                    </p>
                  </div>
                  <div className="flex gap-8">
                    <h4 className="font-semibold">NRC :</h4>
                    <p className="w-3/5">12/ DAGATA (N) / 118422</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-center mt-8">
              <span className="px-2 py-2 rounded-full border-white/30 border hover:-translate-y-1 transition-all">
                <a
                  href="https://www.facebook.com/pyae.phyo.thaw.94794?mibextid=ZbWKwL"
                  className="text-gray-300 hover:text-blue-500 text-2xl transition-colors"
                >
                  <FaFacebook />
                </a>
              </span>
              <span className="px-2 py-2 rounded-full border-white/30 border hover:-translate-y-1 transition-all">
                <a
                  href="https://github.com/pyaeivy"
                  className="text-gray-300 hover:text-blue-500 text-2xl transition-colors"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="px-2 py-2 rounded-full border-white/30 border hover:-translate-y-1 transition-all">
                <a
                  href="https://www.linkedin.com/in/pyae-phyo-thaw-673352289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BnF2vEyEzS22r5mfuHlNhPA%3D%3D"
                  className="text-gray-300 hover:text-blue-500 text-2xl transition-colors"
                >
                  <FaLinkedin />
                </a>
              </span>
             
            </div>
          </div>
        </RevealOnScreen>
      </section>
    );
}