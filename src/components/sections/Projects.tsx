'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';

export default function Projects({ data }: { data: any[] }) {
  const [activeTag, setActiveTag] = useState('All');
  
  const tags = ['All', 'React', 'Next.js', 'Node.js', 'MongoDB', 'WebGL'];

  const rawProjects = data?.length > 0 ? data : [
    { title: 'Project Alpha 1', description: 'High-performance web application utilizing modern architectures.', techStack: ['Next.js', 'React', 'Tailwind'] },
    { title: 'Project Alpha 2', description: 'Dynamic dashboard with real-time data visualization.', techStack: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Project Alpha 3', description: 'Advanced 3D rendering engine for browser-based experiences.', techStack: ['WebGL', 'Three.js'] },
  ];

  const filteredProjects = rawProjects.filter(proj => {
    if (activeTag === 'All') return true;
    const stack = (proj.techStack || []).map((s: string) => s.toLowerCase());
    return stack.includes(activeTag.toLowerCase());
  });

  return (
    <section id="projects" className="py-32 bg-transparent text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-primary shadow-[0_0_10px_rgba(161,255,194,0.8)]"></span>
              <span className="font-label text-xs uppercase tracking-[0.4em] text-primary">Deployments</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Featured <br className="hidden md:block" /> <span className="text-outline-variant">Work</span>
            </h2>
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { type: "spring" } } }} className="flex flex-wrap gap-3 md:self-end">
            {tags.map((tag, i) => (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 font-label text-[10px] tracking-widest uppercase border transition-all duration-300 ${activeTag === tag ? 'border-primary text-primary bg-primary/10 shadow-[0_0_10px_rgba(161,255,194,0.2)]' : 'border-outline-variant text-outline hover:text-foreground hover:border-outline'}`}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((proj, i) => (
              <motion.div 
                layout
                key={proj.title} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="group relative bg-[#131318] border border-outline-variant/30 h-[400px] flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="h-1/2 w-full bg-[#19191f] border-b border-outline-variant/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131318] to-transparent z-10 opacity-60"></div>
                  <div className="w-full h-full opacity-20 group-hover:opacity-40 transition-opacity bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-[#131318] to-[#131318]"></div>
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 z-20"></div>
                </div>

                {/* Content */}
                <div className="h-1/2 p-6 flex flex-col justify-between relative z-20 bg-[#131318] group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl text-foreground font-bold uppercase tracking-wide">{proj.title}</h3>
                      <div className="flex gap-2 text-outline group-hover:text-primary transition-colors">
                        {proj.githubUrl && (
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.open(proj.githubUrl, '_blank')}>
                            <Code size={18} />
                          </motion.button>
                        )}
                        {proj.liveUrl && (
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => window.open(proj.liveUrl, '_blank')}>
                            <ExternalLink size={18} />
                          </motion.button>
                        )}
                      </div>
                    </div>
                    <p className="font-sans text-sm text-[#acaab1] line-clamp-3 mt-2">
                      {proj.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(proj.techStack || []).map((tech: string) => (
                      <span key={tech} className="font-label text-[10px] text-secondary bg-secondary/10 px-2 py-1 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
