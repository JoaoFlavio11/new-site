import { Code2, Cloud, Terminal, ExternalLink, ChevronRight } from "lucide-react";
import DropdownSection from "./DropdownSection";
import { projetos } from "@/api/projects";

export default function ProjectsSection() {
  // Função auxiliar para renderizar o ícone correto dinamicamente
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "terminal":
        return <Terminal size={24} />;
      case "cloud":
        return <Cloud size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <DropdownSection
      id="projects"
      title="Projetos em Destaque"
      description="Alguns projetos que desenvolvi ao longo dos anos de estudo."
      icon={<Code2 size={32} />}
    >
      <div className="relative z-10 mt-4">
        {/* Efeito de sombra sutil atrás do grid de projetos */}
        <div className="absolute inset-0  -z-10 rounded-[3rem]" />

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Mapeando a array de projetos */}
          {projetos.map((projeto) => (
            <a
              key={projeto.id}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 rounded-2xl p-8 hover:border-sky-500/30 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-xl"
            >
              {/* Linha gradiente superior animada no hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-sky-500/10 border border-sky-500/10 rounded-xl text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-500">
                  {renderIcon(projeto.icone)}
                </div>
                <ExternalLink size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {projeto.titulo}
              </h3>
              
              {/* flex-grow garante que essa área ocupe o espaço extra, empurrando as tags para baixo */}
              <p className="text-neutral-400 mb-6 line-clamp-2 font-light leading-relaxed grow">
                {projeto.descricao}
              </p>
              
              {/* mt-auto mantém as tags grudadas no fundo do card sempre alinhadas */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {projeto.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-neutral-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}

          {/* Botão de Ver Todos */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <a 
              href="https://github.com/JoaoFlavio11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md font-medium shadow-[0_0_30px_-10px_rgba(14,165,233,0.15)]"
            >
              Ver todos os repositórios 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </DropdownSection>
  );
}