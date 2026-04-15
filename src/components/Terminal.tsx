import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal as TerminalIcon, ShieldCheck, Lock, Cpu, Globe, Mail, Github, Linkedin } from "lucide-react";

interface CommandResponse {
  type: "text" | "list" | "error" | "success" | "ascii";
  content: string | string[];
}

const ASCII_ART = `
 ██████╗██╗   ██╗██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝███████╗█████╗  ██║     
██║       ╚██╔╝  ██╔══██╗██╔════╝██╔══██╗╚════██║██╔════╝██║     
╚██████╗   ██║   ██████╔╝███████╗██║  ██║███████║███████╗╚██████╗
 ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝
`;

const COMMANDS: Record<string, CommandResponse> = {
  help: {
    type: "list",
    content: [
      "whoami    - Display current user information",
      "skills    - List technical security skills",
      "projects  - Show recent security audits & tools",
      "contact   - Get secure communication channels",
      "clear     - Clear the terminal screen",
      "banner    - Show the system banner",
      "status    - Check system security status"
    ]
  },
  whoami: {
    type: "text",
    content: "Name: Alex 'Cipher' Vance\nRole: Senior Cybersecurity Engineer\nSpecialization: Penetration Testing & Cloud Security\nLocation: [REDACTED]\nStatus: Active"
  },
  skills: {
    type: "list",
    content: [
      "🛡️ Network Security: Nmap, Wireshark, Metasploit",
      "☁️ Cloud Security: AWS GuardDuty, Azure Sentinel",
      "💻 Web App Sec: OWASP Top 10, Burp Suite",
      "📜 Scripting: Python, Bash, Go, Rust",
      "🔐 Cryptography: AES, RSA, Elliptic Curve",
      "🔍 Forensics: Autopsy, Volatility"
    ]
  },
  projects: {
    type: "list",
    content: [
      "🚀 Project 'Aegis': Automated vulnerability scanner for K8s clusters.",
      "🔒 'Shadow-Vault': Zero-knowledge password manager implementation.",
      "📡 'Net-Stalker': IDS/IPS system using machine learning for anomaly detection.",
      "🕵️ 'Ghost-Protocol': Custom C2 framework for red team simulations."
    ]
  },
  contact: {
    type: "list",
    content: [
      "📧 Email: cipher@secure-mail.io",
      "🐙 GitHub: github.com/cipher-sec",
      "🔗 LinkedIn: linkedin.com/in/cipher-vance",
      "🔑 PGP: 0xDEADBEEFCAFEBABE"
    ]
  },
  status: {
    type: "success",
    content: "SYSTEM STATUS: SECURE\nFIREWALL: ACTIVE\nIDS: MONITORING\nENCRYPTION: AES-256-GCM"
  },
  banner: {
    type: "ascii",
    content: ASCII_ART
  }
};

export const Terminal = () => {
  const [history, setHistory] = useState<{ command: string; response: CommandResponse }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial banner
    setHistory([{ command: "system --init", response: COMMANDS.banner }]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response = COMMANDS[cmd] || {
      type: "error",
      content: `Command not found: ${cmd}. Type 'help' for available commands.`
    };

    setHistory((prev) => [...prev, { command: input, response }]);
    setInput("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] bg-black/80 border border-green-500/30 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.1)] flex flex-col overflow-hidden backdrop-blur-sm">
      {/* Terminal Header */}
      <div className="bg-zinc-900 px-4 py-2 border-b border-green-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-green-500" />
          <span className="text-xs font-mono text-zinc-400">cipher@secure-node: ~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="flex-1 p-6 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-green-500/20"
      >
        <AnimatePresence mode="popLayout">
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-4"
            >
              <div className="flex gap-2 text-green-500/70">
                <span>$</span>
                <span>{item.command}</span>
              </div>
              <div className="mt-1 pl-4">
                {item.response.type === "ascii" && (
                  <pre className="text-green-400 text-[10px] leading-tight whitespace-pre">
                    {item.response.content}
                  </pre>
                )}
                {item.response.type === "text" && (
                  <p className="text-zinc-300 whitespace-pre-wrap">{item.response.content}</p>
                )}
                {item.response.type === "list" && (
                  <ul className="space-y-1">
                    {(item.response.content as string[]).map((line, i) => (
                      <li key={i} className="text-zinc-300">{line}</li>
                    ))}
                  </ul>
                )}
                {item.response.type === "error" && (
                  <p className="text-red-400">{item.response.content}</p>
                )}
                {item.response.type === "success" && (
                  <p className="text-green-400 font-bold">{item.response.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current Input Line */}
        <form onSubmit={handleCommand} className="flex gap-2 text-green-500">
          <span>$</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none p-0 text-zinc-100"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};
