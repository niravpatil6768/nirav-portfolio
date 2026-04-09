'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

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
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LeetcodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.256 2.409 2.409 0 0 1 .127-.533c.198-.6.54-1.127 1.002-1.54L10.02 9.09l.064-.067 2.766-2.915 5.437 5.45c.545.546 1.432.551 1.968.005.538-.545.535-1.425-.008-1.964L14.453.5A1.37 1.37 0 0 0 13.483 0zm-5.836 17.51a1.37 1.37 0 0 0-1.37 1.37v.001c0 .756.613 1.37 1.37 1.37h5.922a1.371 1.371 0 0 0 1.37-1.37v-.001a1.37 1.37 0 0 0-1.37-1.37H7.647z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default function Contact({ data }: { data: any }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Replace with your Formspree ID
    const FORMSPREE_ID = "xqegnnbk";

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-32 w-full bg-[#0e0e13] px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
            Initiate Contact
          </h2>
          <p className="font-sans text-outline mb-10 text-lg border-l border-outline-variant/30 pl-4">
            Ready to deploy a high-performance system or have a mission in mind? Send transmission.
          </p>

          <div className="flex gap-4 mb-10 flex-wrap">
            {/* Social links */}
            {data?.github && (
              <a href={data.github} target="_blank" className="p-4 border border-outline-variant/30 text-outline hover:text-white hover:border-white transition-colors group relative overflow-hidden bg-[#131318]" title="GitHub">
                <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <GithubIcon className="relative z-10" />
              </a>
            )}
            {data?.linkedin && (
              <a href={data.linkedin} target="_blank" className="p-4 border border-outline-variant/30 text-outline hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors group relative overflow-hidden bg-[#131318]" title="LinkedIn">
                <div className="absolute inset-0 bg-[#0a66c2]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <LinkedinIcon className="relative z-10" />
              </a>
            )}
            {data?.twitter && (
              <a href={data.twitter} target="_blank" className="p-4 border border-outline-variant/30 text-outline hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors group relative overflow-hidden bg-[#131318]" title="Twitter">
                <div className="absolute inset-0 bg-[#1DA1F2]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <TwitterIcon className="relative z-10" />
              </a>
            )}
            {data?.discord && (
              <a href={data.discord.startsWith('http') ? data.discord : '#'} target="_blank" className="p-4 border border-outline-variant/30 text-outline hover:text-[#5865F2] hover:border-[#5865F2] transition-colors group relative overflow-hidden bg-[#131318]" title="Discord">
                <div className="absolute inset-0 bg-[#5865F2]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <DiscordIcon className="relative z-10" />
              </a>
            )}
            {data?.leetcode && (
              <a href={data.leetcode} target="_blank" className="p-4 border border-outline-variant/30 text-outline hover:text-[#FFA116] hover:border-[#FFA116] transition-colors group relative overflow-hidden bg-[#131318]" title="LeetCode">
                <div className="absolute inset-0 bg-[#FFA116]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <LeetcodeIcon className="relative z-10" />
              </a>
            )}
            {data?.mobile && (
              <a href={`tel:${data.mobile}`} className="p-4 border border-outline-variant/30 text-outline hover:text-[#00fc9a] hover:border-[#00fc9a] transition-colors group relative overflow-hidden bg-[#131318]" title={data.mobile}>
                <div className="absolute inset-0 bg-[#00fc9a]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <PhoneIcon className="relative z-10" />
              </a>
            )}
            {data?.email && (
              <a href={`mailto:${data.email}`} className="p-4 border border-outline-variant/30 text-outline hover:text-primary hover:border-primary transition-colors group relative overflow-hidden bg-[#131318]" title="Email">
                <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform"></div>
                <Mail className="relative z-10" />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#19191f] border border-outline-variant/30 p-8 relative overflow-hidden min-h-[440px] flex flex-col justify-center"
        >
          {/* Luminous line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-transparent"></div>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">Transmission Received</h3>
                <p className="font-sans text-outline">Your data has been successfully sent to the mothership. I will decode and respond shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-label text-[10px] uppercase tracking-widest text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center text-error mb-2">
                  <AlertCircle size={40} />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">Signal Failure</h3>
                <p className="font-sans text-outline">An error occurred during transmission. Please check your connection and try again.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 font-label text-[10px] uppercase tracking-widest text-error hover:underline"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-8"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-label text-[10px] uppercase tracking-widest text-[#76747b]">Identification (Name)</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b border-outline py-2 font-sans text-foreground focus:outline-none focus:border-primary transition-colors hover:border-outline-variant"
                  />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-label text-[10px] uppercase tracking-widest text-[#76747b]">Comms Channel (Email)</label>
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b border-outline py-2 font-sans text-foreground focus:outline-none focus:border-primary transition-colors hover:border-outline-variant"
                  />
                </div>
                <div className="flex flex-col gap-2 relative group">
                  <label className="font-label text-[10px] uppercase tracking-widest text-[#76747b]">Transmission (Message)</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-outline py-2 font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none hover:border-outline-variant"
                  ></textarea>
                </div>
                <button
                  disabled={status === 'loading'}
                  className="w-full mt-4 bg-[#131318] border border-primary text-primary font-label text-xs uppercase tracking-widest py-4 hover:bg-primary hover:text-[#0e0e13] transition-all hover:shadow-[0_0_15px_rgba(161,255,194,0.4)] relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {status === 'loading' ? 'Encrypting & Sending...' : 'Transmit Data'}
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
