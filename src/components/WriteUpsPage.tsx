import { motion } from "motion/react";
import { ArrowLeft, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WriteUpsPage = ({ onBack }: { onBack: () => void }) => {
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
          <FileText className="text-green-500" /> Write Ups
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          Documentación detallada de análisis de vulnerabilidades, metodologías de ataque y reportes técnicos de seguridad.
        </p>
      </div>

      <div className="grid gap-8">
        {[
          {
            title: "Próximamente: Título",
            description: "Descripción proximamente.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450",
            tags: ["Pending", "Pending"],
            link: "#"
          },
          {
            title: "Próximamente: Título",
            description: "Descripción proximamente.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=450",
            tags: ["Pending", "Pending"],
            link: "#"
          }
        ].map((project, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="group grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center bg-zinc-900/20 border border-green-500/10 p-6 hover:border-green-500/30 transition-all duration-500 cursor-pointer"
            onClick={() => window.open(project.link, '_blank')}
          >
            <div className="relative overflow-hidden aspect-video border border-green-500/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay" />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[9px] text-green-500/50 uppercase tracking-widest">
                  <Globe className="w-3 h-3" /> WriteUp_{i + 1}.pdf
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {project.title}
                </h4>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-mono uppercase tracking-wider text-green-500/70 border border-green-500/20 px-2 py-0.5 bg-green-500/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
