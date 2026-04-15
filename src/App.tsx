import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, Zap, Activity, Github, Linkedin, Mail, ExternalLink, ChevronDown, ChevronUp, Terminal as TerminalIcon, Cpu, Globe, Code2 } from "lucide-react";
import { MatrixBackground } from "@/src/components/MatrixBackground";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LoadingScreen } from "@/src/components/LoadingScreen";
import { WriteUpsPage } from "@/src/components/WriteUpsPage";
import { ToolsPage } from "@/src/components/ToolsPage";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState<'home' | 'writeups' | 'tools'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeView]);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-500 selection:text-black overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : activeView === 'writeups' ? (
          <motion.div key="writeups" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <WriteUpsPage onBack={() => setActiveView('home')} />
          </motion.div>
        ) : activeView === 'tools' ? (
          <motion.div key="tools" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ToolsPage onBack={() => setActiveView('home')} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Scanning Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Scanline Animation */}
      <div className="fixed inset-0 pointer-events-none z-50 animate-scanline bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-24 w-full opacity-20" />

      {/* Section 1: Header */}
      <header className="relative z-10 h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <MatrixBackground />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 space-y-8 max-w-4xl"
        >
          <div className="inline-block px-4 py-1 border border-green-500/30 bg-green-500/5 rounded text-[10px] uppercase tracking-[0.3em] animate-pulse">
            System Status: Online // Secure Connection
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              ALEJANDRO CERON
            </h1>
            <p className="text-xl md:text-2xl text-green-400 font-light tracking-widest uppercase">
              Ingeniero en Seguridad de la Información
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4">
            <div className="flex items-center justify-center gap-4">
              <div className="group relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-none border-green-500/30 hover:bg-green-500 hover:text-black transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:productivoalejandro@gmail.com'}
                >
                  <Mail className="w-5 h-5" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-[10px] text-green-500 font-mono tracking-widest bg-black/80 px-2 py-1 border border-green-500/20">
                  productivoalejandro@gmail.com
                </div>
              </div>

              <div className="group relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-none border-green-500/30 hover:bg-green-500 hover:text-black transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/alejandroceronp/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-[10px] text-green-500 font-mono tracking-widest bg-black/80 px-2 py-1 border border-green-500/20">
                  linkedin.com/in/alejandroceronp/
                </div>
              </div>

              <div className="group relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-none border-green-500/30 hover:bg-green-500 hover:text-black transition-all duration-300"
                  onClick={() => window.open('https://github.com/alej0n', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-[10px] text-green-500 font-mono tracking-widest bg-black/80 px-2 py-1 border border-green-500/20">
                  github.com/alej0n
                </div>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-center gap-8 pt-8 text-xs uppercase tracking-[0.4em]">
            <a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-green-500/50 group-hover:text-green-500">[01]</span> About Me
            </a>
            <a href="#projects" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="text-green-500/50 group-hover:text-green-500">[02]</span> Projects
            </a>
          </nav>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-green-500/50 hover:text-green-500 transition-colors cursor-pointer z-30"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.a>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-24 pb-0">
        
        {/* Section 2: About Me */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          id="about"
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <TerminalIcon className="w-5 h-5 text-green-500/50" />
            <h2 className="text-sm uppercase tracking-[0.3em] text-green-500/50">cat about_me.txt</h2>
            <Separator className="flex-1 bg-green-500/20" />
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
            <motion.div variants={fadeInUp} className="space-y-8 bg-zinc-900/30 border border-green-500/10 p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
              <h3 className="text-3xl font-bold text-white leading-tight">
                Especialista en Ciberseguridad
              </h3>
              <div className="space-y-4">
                <p className="text-zinc-400 leading-relaxed text-lg">
                  Ingeniero en Seguridad de la Información, egresado en Rusia. Me dedico a analizar y proteger sistemas y activos digitales.
                </p>
                <p className="text-green-500/80 italic font-mono text-sm border-l-2 border-green-500/30 pl-4 py-1">
                  "Ningún sistema es seguro, no obstante nuestro deber siempre será estar un paso adelante de cualquier ataque"
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-[10px] text-green-500/50 uppercase tracking-widest">Specialization</p>
                  <p className="text-sm text-zinc-300">Cybersecurity Analyst</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-green-500/50 uppercase tracking-widest">Focus</p>
                  <p className="text-sm text-zinc-300">Testing</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-zinc-900/50 border border-green-500/10 p-6 space-y-6 relative overflow-hidden group/arsenal">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500/10 group-hover/arsenal:bg-green-500/40 transition-colors" />
                
                <h4 className="text-xs uppercase tracking-[0.2em] text-green-500 flex items-center gap-2">
                  <Cpu className="w-4 h-4 animate-pulse" /> Technical Arsenal
                </h4>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Programación y Automatización",
                      skills: ["Python", "JavaScript", "CSS", "HTML", "Bash", "SQL Server"],
                      color: "green"
                    },
                    {
                      title: "Seguridad Ofensiva",
                      skills: ["Metasploit", "Burp Suite", "Nmap", "SqlMap"],
                      color: "red"
                    },
                    {
                      title: "Seguridad Defensiva (SOC)",
                      skills: ["Wazuh", "Suricata", "TheHive", "Análisis de Logs", "Gestión de Alertas", "MITRE ATT&CK"],
                      color: "blue"
                    },
                    {
                      title: "Sistemas y Redes",
                      skills: ["Linux (Ubuntu, Kali)", "Windows Server", "TCP/IP"],
                      color: "zinc"
                    },
                    {
                      title: "DevOps / Infraestructura",
                      skills: ["Docker", "Copilot", "Git/GitHub", "CI/CD"],
                      color: "purple"
                    }
                  ].map((cat, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="space-y-2 group/cat transition-all duration-300"
                    >
                      <p className={`text-[10px] uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        cat.color === 'green' ? 'text-green-500/40 group-hover/cat:text-green-400' :
                        cat.color === 'red' ? 'text-red-500/40 group-hover/cat:text-red-400' :
                        cat.color === 'blue' ? 'text-blue-500/40 group-hover/cat:text-blue-400' :
                        cat.color === 'purple' ? 'text-purple-500/40 group-hover/cat:text-purple-400' :
                        'text-zinc-500/40 group-hover/cat:text-zinc-300'
                      }`}>
                        {cat.title}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <motion.span 
                            key={skill}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`px-2 py-0.5 border text-[9px] uppercase tracking-wider transition-all duration-300 cursor-default ${
                              cat.color === 'green' ? 'bg-green-500/5 border-green-500/10 text-green-400 hover:bg-green-500/20 hover:border-green-500/40' :
                              cat.color === 'red' ? 'bg-red-500/5 border-red-500/20 text-red-400 hover:bg-red-500/20 hover:border-red-500/40' :
                              cat.color === 'blue' ? 'bg-blue-500/5 border-blue-500/20 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/40' :
                              cat.color === 'purple' ? 'bg-purple-500/5 border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40' :
                              'bg-zinc-500/5 border-zinc-500/20 text-zinc-400 hover:bg-zinc-500/20 hover:border-zinc-500/40'
                            }`}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 3: Projects */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          id="projects"
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <Code2 className="w-5 h-5 text-green-500/50" />
            <h2 className="text-sm uppercase tracking-[0.3em] text-green-500/50">ls projects/</h2>
            <Separator className="flex-1 bg-green-500/20" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              onClick={() => setActiveView('writeups')}
              className="group relative overflow-hidden bg-zinc-900/30 border border-green-500/10 p-10 space-y-6 cursor-pointer hover:border-green-500/40 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 group-hover:bg-green-500 transition-colors" />
              <div className="w-16 h-16 bg-green-500/5 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                <TerminalIcon className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">Write Ups</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Exploración detallada de vulnerabilidades, metodologías de ataque y reportes técnicos de seguridad.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-green-500/50 group-hover:text-green-500 transition-colors">
                Explorar Directorio <ExternalLink className="w-3 h-3" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              onClick={() => setActiveView('tools')}
              className="group relative overflow-hidden bg-zinc-900/30 border border-green-500/10 p-10 space-y-6 cursor-pointer hover:border-green-500/40 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20 group-hover:bg-green-500 transition-colors" />
              <div className="w-16 h-16 bg-green-500/5 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">Tools</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Desarrollo de scripts y herramientas personalizadas para la automatización de tareas de ciberseguridad.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-green-500/50 group-hover:text-green-500 transition-colors">
                Explorar Directorio <ExternalLink className="w-3 h-3" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="flex justify-center -mt-12 mb-2">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="text-green-500/50 hover:text-green-500 transition-all duration-300 cursor-pointer group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity">Back to Top</span>
            <ChevronUp className="w-8 h-8 animate-bounce" />
          </motion.button>
        </div>

      </main>

          {/* Footer */}
          <footer className="relative z-10 py-10 border-t border-green-500/30 bg-black/90 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] text-zinc-400 uppercase tracking-[0.3em]">
              <div className="flex items-center gap-4">
                <span className="text-white/80">© 2026 Alejandro Ceron</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-green-500/80">Security Information Engineer</span>
              </div>
              <div className="flex items-center gap-8">
                <a 
                  href="mailto:productivoalejandro@gmail.com" 
                  className="hover:text-green-500 transition-all duration-300 hover:tracking-[0.4em]"
                >
                  Email
                </a>
                <a 
                  href="https://www.linkedin.com/in/alejandroceronp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition-all duration-300 hover:tracking-[0.4em]"
                >
                  Linkedin
                </a>
                <a 
                  href="https://github.com/alej0n" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition-all duration-300 hover:tracking-[0.4em]"
                >
                  Github
                </a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
      </AnimatePresence>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 94, 0.2);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.4);
        }
      `}</style>
    </div>
  );
}
