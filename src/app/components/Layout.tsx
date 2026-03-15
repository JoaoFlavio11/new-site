
import AboutMeSection from './AboutMe';
import BooksSection from './Books';
import CertificatesSection from './Certificates';
import HeroSection from './Hero';
import JobsSection from './JobsSection';
import ProjectsSection from './Projects';

const Layout = () => {

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans selection:bg-sky-500/30">

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT SECTION */}
        <AboutMeSection />

        <div className="mt-10">
          {/* JOBS SECTION */}
          <JobsSection />
          
          {/* CERTIFICATES SECTION (Quadro de Diplomas) */}
          <CertificatesSection />

          {/* PROJECTS SECTION */}
          <ProjectsSection />
          
          {/* BOOKS / LIBRARY SECTION */}
          <BooksSection />
        </div>
        
      </main>

    </div>
  );
};

export default Layout;