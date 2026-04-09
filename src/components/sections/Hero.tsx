'use client';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import RobotMascot from '@/three/RobotMascot';

export default function Hero({ data }: { data: any }) {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-start pt-20 h-full justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col gap-6 w-full md:w-1/2 relative z-20"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4"
          >
            <span className="h-[2px] w-12 bg-primary shadow-[0_0_10px_rgba(161,255,194,0.8)]"></span>
            <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary">System Online</span>
          </motion.div>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } } }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-foreground uppercase"
          >
            <span className="block text-white">{data?.heroTitlePrimary || data?.name?.split(" ")[0] || "NIRAV"}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">{data?.heroTitleSecondary || data?.role?.split(" ")[1] || "ENGINEER"}</span>
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            className="font-sans text-lg md:text-xl text-[#76747b] mt-2 max-w-xl border-l border-outline-variant/30 pl-4"
          >
            {data?.tagline || "Full Stack Developer forging highly kinetic, high-contrast digital experiences."}
          </motion.p>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-[#0e0e13] font-label uppercase tracking-widest text-xs font-bold rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(161,255,194,0.6)] flex items-center justify-center gap-2"
            >
              Initialize Sequence
            </a>
            <a 
              href={data?.resumeUrl || "/resume.pdf"} 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-secondary border border-outline-variant font-label uppercase tracking-widest text-xs font-bold rounded-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:border-secondary hover:bg-secondary/10 hover:shadow-[0_0_30px_rgba(213,117,255,0.4)] flex items-center justify-center gap-2"
            >
              <Download size={16} /> Data Log
            </a>
          </motion.div>
        </motion.div>
        
        {/* Interactive 3D Mascot properly replacing the old static image */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ 
             opacity: { duration: 1, delay: 0.5 },
             scale: { duration: 1, delay: 0.5, type: "spring" }
           }}
           className="absolute right-0 bottom-0 lg:bottom-auto font-sans lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-[300px] h-[400px] md:w-[350px] md:h-[500px] lg:w-[450px] lg:h-[750px] z-10 hidden md:block"
        >
          <RobotMascot />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-label text-[9px] uppercase tracking-[0.3em] text-outline-variant">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
