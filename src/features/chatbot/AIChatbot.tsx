'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIChatbot({ personalInfo, skills, experiences }: { personalInfo?: any, skills?: any[], experiences?: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if(msg.trim() === '') return;
    setMsg("");
    // TODO API Integration
  };

  return (
    <>
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-[#0e0e13] shadow-[0_0_20px_rgba(213,117,255,0.4)] hover:shadow-[0_0_30px_rgba(213,117,255,0.6)] transition-shadow"
      >
        <MessageSquare />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-32px)] md:w-96 bg-[#1f1f26] border border-outline-variant/30 shadow-2xl z-50 flex flex-col overflow-hidden glass"
          >
            {/* Edge Glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary shadow-[0_0_10px_rgba(213,117,255,0.8)]"></div>

            {/* Header */}
            <div className="bg-[#19191f]/80 p-4 flex justify-between items-center border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="font-label tracking-widest uppercase text-xs font-bold text-secondary">System_AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-outline hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Log */}
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4 bg-[#131318]/50">
              <div className="bg-[#2c2b33] border border-outline-variant/20 text-foreground p-3 rounded-sm rounded-tl-none font-sans text-sm self-start max-w-[85%] relative shadow-lg">
                Greetings. I am {personalInfo?.name ? `${personalInfo.name}'s` : "Nirav's"} automated assistant. Query my database regarding his capabilities or mission history.
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-4 border-t border-outline-variant/30 flex items-center gap-2 bg-[#19191f]/90">
              <input 
                type="text" 
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Enter query..." 
                className="flex-1 bg-[#131318] border border-outline-variant px-3 py-2 text-sm text-foreground focus:outline-none focus:border-secondary transition-colors font-sans"
              />
              <button type="submit" className="bg-secondary text-[#0e0e13] px-3 py-2 rounded-sm hover:bg-secondary-dim transition-colors h-full flex items-center justify-center">
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
