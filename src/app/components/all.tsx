/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
'use client'

import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Award, 
  Code2, 
  Cloud, 
  Terminal,
  Menu,
  X,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const All = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado para controlar as seções dropdown
  const [openSections, setOpenSections] = useState({
    projects: true,
    certificates: true,
    books: true
  });

  // Função para alternar o estado aberto/fechado
  const toggleSection = (section: any) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Efeito para mudar o estilo do header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Certificados', href: '#certificates' },
    { name: 'Biblioteca', href: '#books' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans selection:bg-sky-500/30">
      
      {/* HEADER / NAVIGATION */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white tracking-tighter">
            joaoflavio<span className="text-sky-500">.cloud</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-neutral-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111] border-b border-neutral-800 flex flex-col py-4 px-6 gap-4 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-300 hover:text-white py-2 border-b border-neutral-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400 w-fit mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Disponível para novos desafios
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Engenheiro de Software <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              & Cloud Developer.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
            Construindo arquiteturas escaláveis, APIs robustas e soluções em nuvem. 
            Foco em performance, código limpo e infraestrutura moderna.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://github.com/JoaoFlavio11" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/joaoflaviocl/" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://app.rocketseat.com.br/me/joaoflavio-cl" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-3 font-medium transition-colors"
            >
              <Code2 size={20} />
              Rocketseat
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 border-t border-neutral-800 bg-[#0f0f0f]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal className="text-sky-500" />
                Sobre mim
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Sou um desenvolvedor apaixonado por resolver problemas complexos através de tecnologia. 
                  Minha jornada me levou a especializar na criação de sistemas distribuídos e infraestrutura em nuvem.
                </p>
                <p>
                  Atuo principalmente no ecossistema de back-end, projetando APIs (como meu sistema WMS com grafos em Python) 
                  e automatizando processos para garantir entregas contínuas e seguras.
                </p>
              </div>
            </div>
            
            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Back-end', tech: 'Node.js, Python, Go', icon: <Terminal size={18}/> },
                { name: 'Cloud & DevOps', tech: 'AWS, Docker, CI/CD', icon: <Cloud size={18}/> },
                { name: 'Banco de Dados', tech: 'PostgreSQL, Redis, MongoDB', icon: <Code2 size={18}/> },
                { name: 'Front-end', tech: 'React, Tailwind CSS', icon: <ExternalLink size={18}/> },
              ].map((skill, idx) => (
                <div key={idx} className="bg-[#141414] border border-neutral-800 p-5 rounded-xl hover:border-neutral-700 transition-colors">
                  <div className="text-sky-400 mb-3">{skill.icon}</div>
                  <h3 className="text-white font-medium mb-1">{skill.name}</h3>
                  <p className="text-sm text-neutral-500">{skill.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
          <div 
            className="flex items-center justify-between mb-12 cursor-pointer group" 
            onClick={() => toggleSection('projects')}
          >
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Code2 className="text-sky-500 group-hover:text-sky-400 transition-colors" />
              Projetos em Destaque
            </h2>
            <div className="p-2 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
              <ChevronDown className={`text-neutral-400 transition-transform duration-500 ${openSections.projects ? 'rotate-180' : ''}`} size={24} />
            </div>
          </div>
          
          <div className={`grid transition-all duration-500 ease-in-out ${openSections.projects ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Card 1 */}
                <a href="https://github.com/JoaoFlavio11/warehouse-api" target="_blank" rel="noreferrer" className="group block bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 hover:border-sky-500/50 hover:bg-[#141414] transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-900 rounded-lg text-sky-400">
                      <Terminal size={24} />
                    </div>
                    <ExternalLink size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Warehouse API</h3>
                  <p className="text-neutral-400 mb-6 line-clamp-2">
                    API de um sistema WMS (Warehouse Management System) desenvolvido em Python utilizando a teoria de Grafos para otimização de rotas e armazenamento.
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">Python</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">Grafos</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">API REST</span>
                  </div>
                </a>

                {/* Project Card 2 */}
                <div className="group block bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all cursor-default">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-900 rounded-lg text-neutral-400">
                      <Cloud size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
                  <p className="text-neutral-400 mb-6 line-clamp-2">
                    Repositórios e automações focados em provisionamento de infraestrutura como código (IaC), pipelines de CI/CD e orquestração de containers.
                  </p>
                  <div className="flex gap-3">
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">Docker</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">AWS</span>
                    <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">CI/CD</span>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex justify-center mt-6">
                  <a href="https://github.com/JoaoFlavio11" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors">
                    Ver todos os repositórios <ChevronRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION (Quadro de Diplomas) */}
        <section id="certificates" className="py-24 px-6 border-y border-neutral-800 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div 
              className="flex flex-col items-center mb-16 text-center cursor-pointer group"
              onClick={() => toggleSection('certificates')}
            >
              <Award className="text-neutral-500 mb-4 group-hover:text-sky-500 transition-colors" size={32} />
              <div className="flex items-center gap-4 justify-center mb-4">
                <h2 className="text-3xl font-bold text-white">Certificações e Formações</h2>
                <div className="p-2 rounded-full bg-[#111] group-hover:bg-[#1a1a1a] transition-colors border border-neutral-800">
                  <ChevronDown className={`text-neutral-400 transition-transform duration-500 ${openSections.certificates ? 'rotate-180' : ''}`} size={20} />
                </div>
              </div>
              <p className="text-neutral-400 max-w-xl group-hover:text-neutral-300 transition-colors">
                Um registro formal do meu aprendizado contínuo e especializações técnicas.
              </p>
            </div>

            <div className={`grid transition-all duration-500 ease-in-out ${openSections.certificates ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                {/* Estilo Quadro de Diplomas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Diploma 1 */}
                  <div className="bg-[#111] p-3 rounded shadow-2xl">
                    <div className="border border-neutral-700 p-1 h-full">
                      <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                        <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                        <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Rocketseat</h4>
                        <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">Ignite <br/> Trilha Node.js</h3>
                        <p className="text-xs text-neutral-500 font-mono mt-auto">Autenticado</p>
                      </div>
                    </div>
                  </div>

                  {/* Diploma 2 */}
                  <div className="bg-[#111] p-3 rounded shadow-2xl">
                    <div className="border border-neutral-700 p-1 h-full">
                      <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                        <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                        <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Rocketseat</h4>
                        <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">Ignite <br/> Trilha ReactJS</h3>
                        <p className="text-xs text-neutral-500 font-mono mt-auto">Autenticado</p>
                      </div>
                    </div>
                  </div>

                  {/* Diploma 3 */}
                  <div className="bg-[#111] p-3 rounded shadow-2xl">
                    <div className="border border-neutral-700 p-1 h-full">
                      <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                        <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                        <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Cloud & DevOps</h4>
                        <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">Fundamentos <br/> Arquitetura AWS</h3>
                        <p className="text-xs text-neutral-500 font-mono mt-auto">Formação Contínua</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKS / LIBRARY SECTION */}
        <section id="books" className="py-24 px-6 max-w-6xl mx-auto">
          <div 
            className="mb-12 cursor-pointer group"
            onClick={() => toggleSection('books')}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                <BookOpen className="text-sky-500 group-hover:text-sky-400 transition-colors" />
                Biblioteca Pessoal
              </h2>
              <div className="p-2 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
                <ChevronDown className={`text-neutral-400 transition-transform duration-500 ${openSections.books ? 'rotate-180' : ''}`} size={24} />
              </div>
            </div>
            <p className="text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition-colors">
              Alguns dos livros que moldaram minha forma de pensar sobre engenharia de software, código limpo e arquitetura de sistemas.
            </p>
          </div>

          <div className={`grid transition-all duration-500 ease-in-out ${openSections.books ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                
                {/* Livro 1 */}
                <div className="group perspective-1000">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-neutral-800 to-[#1a1a1a] border border-neutral-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm"></div>
                    <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2">Clean Code</h3>
                    <p className="text-neutral-400 text-xs italic">Robert C. Martin</p>
                  </div>
                </div>

                {/* Livro 2 */}
                <div className="group perspective-1000">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-slate-800 to-[#1a1a24] border border-slate-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm"></div>
                    <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">The Pragmatic Programmer</h3>
                    <p className="text-neutral-400 text-xs italic mt-2">Hunt & Thomas</p>
                  </div>
                </div>

                {/* Livro 3 */}
                <div className="group perspective-1000">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-sky-900/40 to-[#0a1118] border border-sky-900/50 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm"></div>
                    <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">Designing Data-Intensive Applications</h3>
                    <p className="text-neutral-400 text-xs italic mt-2">Martin Kleppmann</p>
                  </div>
                </div>

                {/* Livro 4 */}
                <div className="group perspective-1000">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-neutral-800 to-black border border-neutral-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm"></div>
                    <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2">SRE</h3>
                    <p className="text-neutral-400 text-xs mt-1">Site Reliability Engineering</p>
                    <p className="text-neutral-500 text-[10px] italic mt-2">O'Reilly</p>
                  </div>
                </div>

                {/* Livro 5 */}
                <div className="group perspective-1000">
                  <div className="relative aspect-[2/3] bg-gradient-to-br from-stone-800 to-[#1c1917] border border-stone-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent rounded-l-sm"></div>
                    <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">Arquitetura Limpa</h3>
                    <p className="text-neutral-400 text-xs italic mt-2">Robert C. Martin</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 bg-[#050505] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-tighter mb-1">
              joaoflavio<span className="text-sky-500">.cloud</span>
            </h2>
            <p className="text-sm text-neutral-500">Software Engineer & Cloud Developer</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/JoaoFlavio11" className="text-neutral-500 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/joaoflaviocl/" className="text-neutral-500 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="mailto:contato@joaoflavio.cloud" className="text-neutral-500 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} João Flávio. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default All;