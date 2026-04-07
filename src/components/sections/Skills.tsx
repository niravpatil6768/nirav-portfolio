'use client';
import { motion } from 'framer-motion';

export default function Skills({ data }: { data: any[] }) {
  const defaultSkills = data?.length > 0 ? data : [
    { name: 'React / Next.js', category: 'Frontend', progress: 95 },
    { name: 'TypeScript', category: 'Core', progress: 90 },
    { name: 'Tailwind CSS', category: 'Frontend', progress: 98 },
    { name: 'Node.js', category: 'Backend', progress: 85 },
    { name: 'PostgreSQL', category: 'Database', progress: 80 },
    { name: 'Framer Motion', category: 'Frontend', progress: 88 },
  ];

  return (
    <section id="skills" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col gap-4 mb-20"
        >
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4"
          >
            <span className="h-[2px] w-12 bg-secondary shadow-[0_0_10px_rgba(213,117,255,0.8)]"></span>
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary">Capabilities</span>
          </motion.div>
          
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
            className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter"
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-br from-secondary to-secondary-container">Arsenal</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {defaultSkills.map((skill, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", delay: index * 0.1 } }
              }}
              className="glass p-8 border border-outline-variant/10 rounded-sm hover-glitch group"
            >
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-label text-xs uppercase text-primary bg-primary/10 px-2 py-1 rounded-sm tracking-widest">{skill.category}</span>
                  <span className="font-sans font-bold text-foreground">{skill.name}</span>
                </div>
                <span className="font-label text-xs text-outline tracking-wider">{skill.proficiency || skill.progress}%</span>
              </div>
              <div className="w-full h-1 bg-[#1f1f26] relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency || skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (index * 0.1) }}
                  className="absolute top-0 left-0 h-full bg-primary"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.5)] w-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
