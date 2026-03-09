
import ProjectsSection from './Projects';
import CertificatesSection from './Certificates';
import BooksSection from './Books';
import Footer from './Footer';
import AboutMeSection from './AboutMe';
import Header from './Header';
import HeroSection from './Hero';

const Layout = () => {

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans selection:bg-sky-500/30">
      
      {/* HEADER / NAVIGATION */}
      <Header />

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT SECTION */}
        <AboutMeSection />

        {/* PROJECTS SECTION */}
        <ProjectsSection />

        {/* CERTIFICATES SECTION (Quadro de Diplomas) */}
        <CertificatesSection />

        {/* BOOKS / LIBRARY SECTION */}
        <BooksSection />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;