'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
    <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.08 0 72.37 72.37 0 0 0-3.39-6.83 105.15 105.15 0 0 0-26.23 8.07C2.84 32.34-3.08 55.8.52 79A105.73 105.73 0 0 0 32.74 96.36a77.7 77.7 0 0 0 6.89-11.1 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.25-17.3c4.13-26.68-4.46-49.88-19.01-70.93zM42.56 65.3c-5.36 0-9.8-4.95-9.8-11 0-6.07 4.33-11 9.8-11 5.51 0 9.87 4.98 9.8 11 0 6.07-4.36 11-9.8 11zm42 0c-5.36 0-9.8-4.95-9.8-11 0-6.07 4.33-11 9.8-11 5.51 0 9.86 4.98 9.8 11 0 6.07-4.36 11-9.8 11z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

const LeetcodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.256 2.409 2.409 0 0 1 .127-.533c.198-.6.54-1.127 1.002-1.54L10.02 9.09l.064-.067 2.766-2.915 5.437 5.45c.545.546 1.432.551 1.968.005.538-.545.535-1.425-.008-1.964L14.453.5A1.37 1.37 0 0 0 13.483 0zm-5.836 17.51a1.37 1.37 0 0 0-1.37 1.37v.001c0 .756.613 1.37 1.37 1.37h5.922a1.371 1.371 0 0 0 1.37-1.37v-.001a1.37 1.37 0 0 0-1.37-1.37H7.647z" />
  </svg>
);

const NAV_LINKS = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contributions', href: '#contributions', id: 'contributions' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ data }: { data?: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass border-b border-outline-variant/15' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-2xl text-primary flex items-center gap-2 tracking-tighter">
          NIRAV <span className="text-secondary opacity-50">/</span> DEV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.filter(l => !data?.visibleSections || data.visibleSections[l.id] !== false).map(link => (
            <a key={link.name} href={link.href} className="text-sm font-label uppercase tracking-wider text-foreground hover:text-primary transition-all hover:scale-110 active:scale-95 duration-200">
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 ml-4 pl-8 border-l border-outline-variant/30">
            {data?.linkedin && (
              <a href={data.linkedin} target="_blank" aria-label="LinkedIn" className="text-outline hover:text-[#0a66c2] transition-all hover:scale-125 active:scale-95 duration-200">
                <LinkedinIcon />
              </a>
            )}
            {data?.github && (
              <a href={data.github} target="_blank" aria-label="GitHub" className="text-outline hover:text-white transition-all hover:scale-125 active:scale-95 duration-200">
                <GithubIcon />
              </a>
            )}
            {data?.email && (
              <a href={`mailto:${data.email}`} aria-label="Email" className="text-outline hover:text-primary transition-all hover:scale-125 active:scale-95 duration-200">
                <Mail size={18} />
              </a>
            )}
            <a href={data?.twitter || "https://x.com"} target="_blank" aria-label="Twitter" className="text-outline hover:text-[#1DA1F2] transition-all hover:scale-125 active:scale-95 duration-200">
              <TwitterIcon />
            </a>
            {data?.discord && (
              <a href={data.discord.startsWith('http') ? data.discord : '#'} target="_blank" aria-label="Discord" className="text-outline hover:text-[#5865F2] transition-all hover:scale-125 active:scale-95 duration-200">
                <DiscordIcon />
              </a>
            )}
            {data?.leetcode && (
              <a href={data.leetcode} target="_blank" aria-label="LeetCode" className="text-outline hover:text-[#FFA116] transition-all hover:scale-125 active:scale-95 duration-200">
                <LeetcodeIcon />
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground hover:text-primary transition-all active:scale-90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden absolute top-0 left-0 w-full bg-[#0a0a0c]/90 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 -z-10"
        >
          {NAV_LINKS.filter(l => !data?.visibleSections || data.visibleSections[l.id] !== false).map((link, i) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (i * 0.1) }}
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-bold uppercase tracking-widest text-foreground hover:text-primary transition-all hover:scale-110 active:scale-95"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-8"
          >
            {data?.linkedin && (
              <a href={data.linkedin} target="_blank" className="p-4 bg-surface rounded-full text-[#0a66c2] hover:text-white hover:bg-[#0a66c2] transition-all hover:scale-110 active:scale-95">
                <LinkedinIcon />
              </a>
            )}
            {data?.github && (
              <a href={data.github} target="_blank" className="p-4 bg-surface rounded-full text-white hover:bg-primary transition-all hover:scale-110 active:scale-95">
                <GithubIcon />
              </a>
            )}
            {data?.email && (
              <a href={`mailto:${data.email}`} className="p-4 bg-surface rounded-full text-primary hover:text-white hover:bg-primary transition-all hover:scale-110 active:scale-95">
                <Mail size={20} />
              </a>
            )}
            <a href={data?.twitter || "https://x.com"} target="_blank" className="p-4 bg-surface rounded-full text-[#1DA1F2] hover:text-white hover:bg-[#1DA1F2] transition-all hover:scale-110 active:scale-95">
              <TwitterIcon />
            </a>
            {data?.discord && (
              <a href={data.discord.startsWith('http') ? data.discord : '#'} target="_blank" className="p-4 bg-surface rounded-full text-[#5865F2] hover:text-white hover:bg-[#5865F2] transition-all hover:scale-110 active:scale-95">
                <DiscordIcon />
              </a>
            )}
            {data?.leetcode && (
              <a href={data.leetcode} target="_blank" className="p-4 bg-surface rounded-full text-[#FFA116] hover:text-white hover:bg-[#FFA116] transition-all hover:scale-110 active:scale-95">
                <LeetcodeIcon />
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
