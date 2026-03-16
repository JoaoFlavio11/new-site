import { ArrowUpRight, Code2, Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] w-full flex flex-col justify-center overflow-hidden  pt-24 pb-12"
    >
      {/* Background Pattern: Malha de arquitetura sutil com fade-out nas bordas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col flex-grow justify-center">
        
        {/* Status indicator super minimalista */}
        <div className="flex items-center gap-3 mb-12 w-fit border border-neutral-800 bg-neutral-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            Disponível para novos desafios
          </span>
        </div>

        {/* Tipografia de Impacto (Editorial) */}
        <div className="flex flex-col gap-2 mb-16 md:mb-24">
          <h1 className="text-[4rem] sm:text-[6rem] lg:text-[8rem] font-extrabold tracking-tighter text-white leading-[0.9] -ml-1">
            João Flávio<span className="text-sky-500">.</span>
          </h1>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-neutral-500 mt-4 md:mt-2">
            Engenheiro de Computação <span className="hidden sm:inline mx-2 opacity-30">/</span> <br className="sm:hidden" />
            <span className="text-neutral-300">Desenvolvedor Full-stack</span>
          </h2>
        </div>

        {/* Grid Inferior Estruturado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pt-10 border-t border-neutral-800">
          
          {/* Bio Column */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Construindo aplicações escaláveis, APIs robustas e integrando soluções complexas. 
              Elevando a infraestrutura moderna através de código limpo e arquitetura inteligente.
            </p>
          </div>

          {/* Core Focus / Tech Column */}
          <div className="md:col-span-4 lg:col-start-6 lg:col-span-3">
            <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Core Focus</h3>
            <ul className="space-y-3 font-light text-neutral-300">
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-sky-500 rounded-full"></span> System Design & APIs</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-sky-500 rounded-full"></span> Cloud Infrastructure</li>
              <li className="flex items-center gap-3"><span className="w-1 h-1 bg-sky-500 rounded-full"></span> Data & AI Integration</li>
            </ul>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 lg:col-start-10 lg:col-span-3 flex flex-col gap-4 items-start md:items-end">
            <a
              href="https://github.com/JoaoFlavio11"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between w-full sm:w-48 pb-3 border-b border-neutral-800 hover:border-sky-500 transition-colors"
            >
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Github size={18} />
                <span className="font-medium">GitHub</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-sky-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/joaoflaviocl/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between w-full sm:w-48 pb-3 border-b border-neutral-800 hover:border-sky-500 transition-colors"
            >
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Linkedin size={18} />
                <span className="font-medium">LinkedIn</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-sky-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://app.rocketseat.com.br/me/joaoflavio-cl"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between w-full sm:w-48 pb-3 border-b border-neutral-800 hover:border-sky-500 transition-colors"
            >
              <div className="flex items-center gap-3 text-neutral-300 group-hover:text-white transition-colors">
                <Code2 size={18} />
                <span className="font-medium">Rocketseat</span>
              </div>
              <ArrowUpRight size={16} className="text-neutral-600 group-hover:text-sky-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}