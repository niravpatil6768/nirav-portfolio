'use client';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

export default function Contributions({ data }: { data: any }) {
  // Extract github username from URL
  const getGithubUsername = (url: string) => {
    if (!url) return 'niravanand';
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('github.com')) {
        const parts = parsed.pathname.split('/').filter(Boolean);
        if (parts.length > 0) return parts[0];
      }
    } catch(e) { /* ignore */ }
    
    const parts = url.split('/').filter(Boolean);
    const username = parts[parts.length - 1];
    return (username && !username.includes('localhost')) ? username : 'niravanand';
  };

  const githubUsername = getGithubUsername(data?.github);
  
  // Extract leetcode username
  const getLeetcodeUsername = (url: string) => {
    if (!url) return '';
    const parts = url.replace(/\/$/, '').split('/');
    return parts[parts.length - 1];
  };
  
  const leetcodeUsername = getLeetcodeUsername(data?.leetcode);

  return (
    <section id="contributions" className="py-32 w-full px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Activity & <span className="text-primary">Contributions</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* GitHub Contributions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#131318] border border-outline-variant/30 p-8 flex flex-col items-center w-full"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-widest text-[#76747b] mb-8">GitHub Commits</h3>
            <div className="overflow-x-auto w-full flex justify-center custom-scrollbar pb-4">
              <GitHubCalendar 
                username={githubUsername} 
                colorScheme="dark"
                theme={{
                  dark: ['#19191f', '#2a4335', '#39784b', '#4db263', '#a1ffc2']
                }}
              />
            </div>
          </motion.div>
          
          {/* LeetCode Proxy widget using leetcard */}
          {leetcodeUsername && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#131318] border border-outline-variant/30 p-8 flex flex-col items-center w-full"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-widest text-[#76747b] mb-8">LeetCode Stats</h3>
              <div className="flex justify-center w-full max-w-2xl overflow-hidden rounded-lg border border-outline-variant/30">
                 <img src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Inter&ext=activity`} alt="LeetCode Stats" className="w-full mix-blend-screen" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
