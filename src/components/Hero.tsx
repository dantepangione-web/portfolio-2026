"use client";
import { motion } from "framer-motion";
import { Terminal, Server, Shield, Cloud, Code, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-4 md:px-8 flex flex-col justify-center items-center selection:bg-emerald-500 selection:text-neutral-900 min-h-screen relative pt-12 pb-24">
      
      <div className="w-full max-w-5xl bg-[#0a0a0a] rounded-xl shadow-2xl shadow-emerald-900/10 overflow-hidden border border-neutral-800">
        
        {/* Terminal Header */}
        <div className="bg-[#161616] px-4 py-3 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="text-neutral-500 text-xs flex items-center gap-2 font-sans tracking-wider">
            <Terminal size={14} /> dante@portfolio:~
          </div>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-10 space-y-6 text-sm md:text-base font-mono">
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <span className="text-emerald-400 font-bold">dante@portfolio</span>:<span className="text-blue-400">~</span>$ neofetch --profile
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-4">
            
            {/* Left Side: Cleaned ASCII Art */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.3 }}
              className="hidden md:flex flex-col items-center justify-start shrink-0"
            >
              <pre className="text-emerald-500 leading-tight font-bold text-sm">
{`
   .------.
  /  ..    \\
 |  /  \\    |
 |  |  |    |
  \\  \\/    /
   '------'
`}
              </pre>
              <div className="mt-6 text-center text-xs text-neutral-500 font-sans uppercase tracking-widest border-t border-neutral-800 pt-4">
                Uptime: 20 YRS<br/>
                Status: Ready
              </div>
            </motion.div>

            {/* Right Side: The Data (Fixed Layout) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5 }}
              className="flex-1 w-full"
            >
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-emerald-400 mb-1">Dante Pangione</h1>
                <div className="text-neutral-600">-------------------------------</div>
              </div>

              {/* Grid System Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8 text-neutral-300">
                <div className="flex gap-2"><span className="text-emerald-400 font-bold w-16">OS:</span> Plattformentwickler EFZ</div>
                <div className="flex gap-2"><span className="text-emerald-400 font-bold w-16">Host:</span> KESO Assa Abloy ('22-'25)</div>
                <div className="flex gap-2"><span className="text-emerald-400 font-bold w-16">Kernel:</span> IT-Infrastructure</div>
                <div className="flex gap-2"><span className="text-emerald-400 font-bold w-16">Uptime:</span> 6 Semester Completed</div>
              </div>

              {/* Grid Skills Section - FIXED LAYOUT (w-44 & whitespace-nowrap) */}
              <div className="space-y-4 border-t border-neutral-800/50 pt-6">
                
                <div className="grid grid-cols-[30px_1fr] items-start gap-3">
                  <Server className="text-blue-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-blue-400 font-bold inline-block w-44 whitespace-nowrap">Infrastructure:</span>
                    <span className="text-neutral-300">VMware vSphere, Active Directory, DNS/DHCP, Veeam</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-[30px_1fr] items-start gap-3">
                  <Shield className="text-purple-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-purple-400 font-bold inline-block w-44 whitespace-nowrap">Net & Security:</span>
                    <span className="text-neutral-300">Cisco Switches & APs, MS Intune, GPOs</span>
                  </div>
                </div>

                <div className="grid grid-cols-[30px_1fr] items-start gap-3">
                  <Cloud className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-cyan-400 font-bold inline-block w-44 whitespace-nowrap">Cloud & Platform:</span>
                    <span className="text-neutral-300">Public Cloud Services, Linux (Ubuntu)</span>
                  </div>
                </div>

                <div className="grid grid-cols-[30px_1fr] items-start gap-3">
                  <Code className="text-yellow-400 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-yellow-400 font-bold inline-block w-44 whitespace-nowrap">Scripting & Dev:</span>
                    <span className="text-neutral-300">PowerShell, Python, JavaScript, HTML/CSS</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

          {/* Blinking Cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-8 flex items-center gap-2"
          >
            <span className="text-emerald-400 font-bold">dante@portfolio</span>:<span className="text-blue-400">~</span>$ 
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-5 bg-emerald-500 inline-block"
            />
          </motion.div>
        </div>
      </div>

      {/* FIXED: Scroll Indicator Animation (Pinned to bottom) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 font-mono text-xs tracking-widest uppercase w-full"
      >
        <span>Scroll for System Architecture</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-emerald-500" />
        </motion.div>
      </motion.div>

    </section>
  );
}