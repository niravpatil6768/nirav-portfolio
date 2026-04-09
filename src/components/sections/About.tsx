'use client';
import { motion } from 'framer-motion';

import { urlFor } from '@/lib/sanityClient';

export default function About({ data }: { data: any }) {
  return (
    <section id="about" className="py-32 bg-transparent text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }}
            className="flex flex-col gap-8"
          >
          <div className="aspect-[4/5] w-full max-w-md bg-[#131318] border border-outline-variant/20 relative group overflow-hidden">
            {/* Tonal Layering / Ghost Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#19191f] to-[#131318] z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t border-l border-primary-dim/30 z-10 pointer-events-none"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-8 z-20">
              {/* Fallback avatar - later sanity image */}
              <div className="w-full h-full bg-[#1f1f26] opacity-50 relative overflow-hidden group-hover:opacity-70 transition-opacity">
                <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-40" style={{ backgroundImage: `url('${data?.avatar ? urlFor(data.avatar).url() : 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop'}')` }}></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary blur-[80px] opacity-20"></div>
              </div>
            </div>
            
            {/* Decorators */}
            <div className="absolute top-4 right-4 text-xs font-label text-outline tracking-widest z-20">LVL.99</div>
            <div className="absolute bottom-4 left-4 h-[2px] w-12 bg-primary z-20"></div>
          </div>
        </motion.div>

        {/* Right Side - Bio & Stats */}
        <motion.div 
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-secondary opacity-50">/</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Sys<span className="text-primary">.</span>Info
            </h2>
          </div>

          <div className="space-y-6 text-[#acaab1] font-sans text-lg">
            <p>{data?.bio || "I engineer digital systems where aesthetics and performance converge. My focus is on creating high-fidelity web experiences that feel alive, using modern architecture and precision UI mechanics. Avoid standard templates."}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-outline-variant/30">
            {[
              { label: 'Experience', value: `${data?.yearsOfExperience || 0}+ Years` },
              { label: 'Projects', value: data?.projectsCount || '40+' },
              { label: 'Deployments', value: data?.deploymentsCount || '100+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 relative pl-4 border-l border-outline-variant/30 group">
                <div className="absolute left-[-1px] top-0 h-0 w-[2px] bg-primary group-hover:h-full transition-all duration-300"></div>
                <span className="font-display text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="font-label text-xs uppercase tracking-widest text-[#76747b]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
