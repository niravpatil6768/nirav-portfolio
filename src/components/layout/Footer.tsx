'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#131318] py-12 border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-label text-sm uppercase tracking-widest text-[#76747b]">
          © {new Date().getFullYear()} Nirav. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="font-display font-bold text-xl text-primary flex items-center gap-2 tracking-tighter">
            NIRAV
          </a>
        </div>
      </div>
    </footer>
  );
}
