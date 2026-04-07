'use client';
import { motion } from 'framer-motion';
import { PortableText } from 'next-sanity';

export default function Experience({ data }: { data: any[] }) {
  const experiences = data?.length > 0 ? data : [
    { 
      company: 'Tech Corp', 
      role: 'Full Stack Engineer', 
      date: '2023 - PRESENT', 
      description: [{ _type: 'block', children: [{ text: 'Leading frontend architecture and building scalable APIs.' }] }],
      techStack: ['React', 'Node.js', 'PostgreSQL']
    },
    { 
      company: 'Agency X', 
      role: 'Frontend Developer', 
      date: '2021 - 2023', 
      description: [{ _type: 'block', children: [{ text: 'Developed award-winning experiences for high-profile clients.' }] }],
      techStack: ['Three.js', 'Framer Motion', 'WebGL']
    },
  ];

  return (
    <section id="experience" className="py-32 w-full bg-transparent px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-center mb-24 text-center"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 mb-4">
            <span className="text-secondary opacity-50 font-display">/</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Experience<span className="text-primary">.</span>Log
            </h2>
          </motion.div>
          <div className="h-0.5 w-12 bg-primary/30 mb-6"></div>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-sans text-outline max-w-xl text-lg">
            Chronological documentation of my technical impact across various platforms and industries.
          </motion.p>
        </motion.div>

        <div className="relative border-l border-outline-variant/30 ml-4 lg:ml-0 lg:left-1/2">
          {experiences.map((exp: any, index: number) => {
            const dateStr = exp.startDate ? `${new Date(exp.startDate).getFullYear()} - ${exp.current ? 'PRESENT' : exp.endDate ? new Date(exp.endDate).getFullYear() : ''}` : exp.date;
            
            return (
              <motion.div 
                key={exp._id || index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={`relative mb-20 w-full lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-16 lg:text-right lg:-translate-x-full' : 'lg:pl-16'
                }`}
              >
                {/* Timeline Ball */}
                <div className="absolute left-[-25px] lg:left-0 lg:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(161,255,194,0.6)] z-20"></div>

                <div className="flex flex-col gap-2">
                  <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
                    {dateStr}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <div className="font-display text-xl text-primary opacity-80 mb-6">{exp.company}</div>

                  <div className={`prose prose-invert max-w-none text-outline font-sans leading-relaxed ${index % 2 === 0 ? 'lg:items-end' : ''}`}>
                    {exp.description ? (
                      <div className="experience-rich-text">
                        <PortableText value={exp.description} />
                      </div>
                    ) : (
                      <p>{exp.desc || 'No detailed log provided.'}</p>
                    )}
                  </div>

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className={`flex flex-wrap gap-2 mt-8 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.techStack.map((tech: string) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-[#19191f] border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

