import { Code2, Github, Linkedin, TerminalSquare, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[90vh] overflow-hidden"
    >
      {/* Background Glow (Efeito de iluminação sutil de fundo) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-2/3 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Coluna da Esquerda - Textos e CTA */}
      <div className="flex flex-col items-start w-full lg:w-3/5 relative z-10">
        
        {/* Badge de Status Estilizado (Glassmorphism) */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-neutral-300 w-fit mb-8 shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
          </span>
          Disponível para novos desafios
        </div>

        {/* Tipografia Principal com ajuste de line-height para ficar mais compacta e robusta */}
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
          Engenheiro de Computação
          <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-indigo-500">
            & Desenvolvedor Full-stack.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed font-light">
          Construindo aplicações escaláveis, APIs robustas e integrando soluções com IA. 
          Foco absoluto em performance, código limpo e infraestrutura moderna.
        </p>

        {/* Hierarquia de Botões Inovadora */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Botão Primário (GitHub) em Destaque */}
          <a
            href="https://github.com/JoaoFlavio11"
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            <Github size={22} />
            Explorar GitHub
            <ArrowUpRight size={18} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          {/* Redes Secundárias como Ícones Quadrados (Mais elegante) */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/in/joaoflaviocl/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://app.rocketseat.com.br/me/joaoflavio-cl"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400 transition-all duration-300 hover:scale-105 active:scale-95"
              aria-label="Rocketseat"
            >
              <Code2 size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Coluna da Direita - Elemento Visual (Abstract Code Card) só visível no Desktop */}
      <div className="hidden lg:flex w-2/5 justify-end relative z-10 perspective-1000">
        <div className="relative w-80 lg:w-96 h-auto transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
          
          {/* Main Card (Janela de Terminal Simulada) */}
          <div className="relative bg-linear-to-br from-neutral-900/90 to-[#050505] border border-neutral-800 rounded-2xl shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
            {/* Faixa superior colorida */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-400 to-indigo-500"></div>
            
            {/* Controles da Janela */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-red-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-yellow-500 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-green-500 transition-colors"></div>
            </div>
            
            {/* Código Estilizado */}
            <div className="space-y-3 font-mono text-[13px] sm:text-sm leading-relaxed">
              <p className="text-sky-400">const <span className="text-white">engineer</span> = {'{'}</p>
              <p className="text-neutral-400 pl-4">name: <span className="text-green-400">'João Flávio'</span>,</p>
              <p className="text-neutral-400 pl-4">role: <span className="text-green-400">'Full-stack Eng'</span>,</p>
              <p className="text-neutral-400 pl-4">passion: <span className="text-green-400">'Build scalable APIs'</span>,</p>
              <p className="text-neutral-400 pl-4">isAvailable: <span className="text-orange-400">true</span></p>
              <p className="text-sky-400">{'}'};</p>
            </div>
            
            {/* Footer do Terminal */}
            <div className="mt-8 pt-5 border-t border-neutral-800/50 flex justify-between items-center text-neutral-500 font-mono text-xs">
              <div className="flex items-center gap-2">
                <TerminalSquare size={14} />
                <span>~/joaoflavio/sys</span>
              </div>
              <span className="text-sky-500 animate-pulse font-bold">_</span>
            </div>
          </div>
          
          {/* Efeito de Reflexo Atrás do Card */}
          <div className="absolute -inset-1 bg-linear-to-br from-sky-500/20 to-indigo-500/20 rounded-2xl blur-xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </section>
  );
}