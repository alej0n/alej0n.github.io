import { motion } from "motion/react";
import { Shield, Lock, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING SYSTEM...");

  useEffect(() => {
    const statuses = [
      "ESTABLISHING SECURE CONNECTION...",
      "LOADING KERNEL MODULES...",
      "MOUNTING ENCRYPTED FILE SYSTEMS...",
      "INITIALIZING FIREWALL...",
      "STARTING IDS MONITORING...",
      "SYSTEM READY."
    ];

    let currentStatusIndex = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        // Update status text based on progress
        const nextStatusIndex = Math.floor((prev / 100) * statuses.length);
        if (nextStatusIndex > currentStatusIndex && nextStatusIndex < statuses.length) {
          currentStatusIndex = nextStatusIndex;
          setStatus(statuses[currentStatusIndex]);
        }
        
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-green-500"
    >
      <div className="w-full max-w-md space-y-8 px-6">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="p-4 border border-green-500/30 rounded-full"
          >
            <Shield className="w-12 h-12" />
          </motion.div>
          <h2 className="text-xl font-bold tracking-[0.3em] animate-pulse">ALEJANDRO CERON</h2>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-widest">
            <span>{status}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-green-500/10 border border-green-500/20 overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="flex items-center gap-2 text-[8px] text-green-500/40">
            <Lock className="w-3 h-3" /> ENCRYPTION: AES-256
          </div>
          <div className="flex items-center gap-2 text-[8px] text-green-500/40">
            <Terminal className="w-3 h-3" /> PROTOCOL: SSH-2.0
          </div>
        </div>
      </div>

      {/* Background noise effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
    </motion.div>
  );
};
