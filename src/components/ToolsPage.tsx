import { motion } from "motion/react";
import { ArrowLeft, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToolsPage = ({ onBack }: { onBack: () => void }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20 px-6 max-w-6xl mx-auto space-y-12"
    >
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="text-green-500 hover:text-white hover:bg-green-500/10 gap-2 mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> cd ..
      </Button>

      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-white flex items-center gap-4">
          <Terminal className="text-green-500" /> Tools
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          Desarrollo de scripts y herramientas personalizadas para la automatización de tareas de ciberseguridad y análisis forense.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Próximamente: Título",
            description: "Descripción proximamente.",
            tags: ["Pending", "Pending"],
            icon: <Terminal className="w-6 h-6" />
          },
          {
            title: "Próximamente: Título",
            description: "Descripción proximamente.",
            tags: ["Pending", "Pending"],
            icon: <Zap className="w-6 h-6" />
          }
        ].map((tool, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            whileHover={{ y: -5 }}
            className="bg-zinc-900/40 border border-green-500/10 p-8 space-y-6 group hover:border-green-500/40 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-500/5 border border-green-500/20 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
              {tool.icon}
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white">{tool.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {tool.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {tool.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-green-500/50 border border-green-500/10 px-3 py-1 bg-green-500/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
