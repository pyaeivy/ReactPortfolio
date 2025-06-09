import { RevealOnScreen } from "./RevealOnScreen";

export const About = () => {
    const frontendSkills = ["HTML","CSS","JavaScript","React", "Vue", "TypeScript", "Tailwindcss" , "Servlet"];
    const backendSkills = ["Node.js", "Python","Laravel","AWS", "Mongo" , "JAVA"];
    return (
        <section id="about" 
        className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScreen>
            <div className="max-w-3xl mx-auto px-4">
                <h2
                 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center
                ">
                    {""}
                    About Me
                    </h2>
                <div
                className="rounded-xl p-8 border-whit/10 border hover:-translate-y-1 transition-all" >
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web
                        applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-clos-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-tanslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech ,key) =>(
                                   <span 
                                    key ={key}
                                    className="bg-blue-500/10  py-1 px-3 rounded-full text-sm text-blue-500 hover:bg-blue-500/20
                                                    hover:shadow[0_2px_8px_rgba(59,130,2246,.2)] transition cursor-pointer
                                    ">
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    
                        <div className="rounded-xl p-6 hover:-tanslate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech ,key) =>(
                                
                                    <span 
                                    key ={key}
                                    className="bg-blue-500/10 py-1 px-3 rounded-full text-sm text-blue-500 hover:bg-blue-500/20
                                                    hover:shadow[0_2px_8px_darkblue] transition cursor-pointer
                                    ">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" >
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="font-bold  mb-4"> 
                          Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                            <li>
                                <strong>B.A English</strong> - Dagon University (2021-2025)
                            </li>
                            <li>
                                JavaSpring (SpringBoot)  - JDC (Java Developer Calss - Sayar Zaw Min Lwin)
                            </li>
                            <li>
                                A+ (YGN-NET)
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="font-bold  mb-4"> 
                          Work Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Software Enginner at ATOM Corp (2020- Present)</h4>
                                    <p>
                                        Development and maintained microservices for cloud-based applicaition.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Full-Stack Web-Developer at Microsoft Corp (2019)</h4>
                                    <p>
                                        Charges in building front-end and back-end web using React,SpringBoot.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScreen>
        </section>
    )
}