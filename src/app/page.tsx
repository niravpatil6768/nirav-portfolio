import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contributions from '@/components/sections/Contributions';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import { getPersonalInfo, getSkills, getProjects, getExperiences } from '@/services/sanity';
import HeroSceneWrapper from '@/components/three/HeroSceneWrapper';

export const revalidate = 60; // ISR cache as requested!

export default async function Home() {
  const [personalInfo, skills, projects, experiences] = await Promise.all([
    getPersonalInfo(),
    getSkills(),
    getProjects(),
    getExperiences()
  ]);

  return (
    <main className="relative text-white min-h-screen">
      {/* Universal 3D Background */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none bg-black">
        <HeroSceneWrapper />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar data={personalInfo} />
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.hero !== false) && <Hero data={personalInfo} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.about !== false) && <About data={personalInfo} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.skills !== false) && <Skills data={skills} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.projects !== false) && <Projects data={projects} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.experience !== false) && <Experience data={experiences} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.contributions !== false) && <Contributions data={personalInfo} />}
        {(!personalInfo?.visibleSections || personalInfo.visibleSections?.contact !== false) && <Contact data={personalInfo} />}
        <Footer />
      </div>
    </main>
  );
}
