import { skills } from "@/api/skills";
import { ArrowUpRight, Code2, Container, ExternalLink, FileText, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutMeSection() {
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Terminal":
        return <Terminal size={24} />;
      case "Container":
        return <Container size={24} />;
      case "ExternalLink":
        return <ExternalLink size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 border-t border-neutral-800 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Coluna da Esquerda - Textos */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-4 tracking-tight">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                <Terminal className="text-sky-400" size={28} />
              </div>
              Sobre mim
            </h2>
          </div>

            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg font-light">
              <p>
                Sou um desenvolvedor apaixonado por resolver problemas complexos
                através de tecnologia. Minha jornada me levou a especializar na
                criação de sistemas distribuídos e infraestrutura em nuvem.
              </p>
              <p>
                Atuo principalmente no ecossistema de back-end, projetando APIs
                (como meu sistema WMS com grafos em Python) e automatizando
                processos para garantir entregas contínuas e seguras.
              </p>
            </div>
          </div>

          {/* Botão do Currículo Estilizado (Editorial) */}
          <div className="mt-12">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/docs/cv_joao_flavio.pdf"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
            >
              <FileText size={18} />
              <span>Baixar Currículo</span>
              <ArrowUpRight size={16} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Coluna da Direita - Tech Stack Grid (Agora em Lista/Linha Única) */}
        <div className="lg:col-start-7 lg:col-span-6">
          <div className="flex flex-col gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 p-4 sm:p-5 rounded-2xl hover:border-sky-500/30 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1 shadow-xl gap-4"
              >
                {/* Linha gradiente à esquerda (animada no hover) combinando com o layout horizontal */}
                
                
                {/* Header do Card (Icone + Nome da Categoria) */}
                <div className="flex items-center gap-4 pl-2">
                  <div className="text-sky-400 p-2.5 bg-sky-500/10 rounded-xl group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-500 border border-sky-500/10">
                    {renderIcon(skill.icon)}
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-tight whitespace-nowrap">
                    {skill.name}
                  </h3>
                </div>

                {/* Ícones das Tecnologias em SVG (Alinhados à direita) */}
                <div className="flex flex-wrap sm:justify-end gap-2 pl-2 sm:pl-0">
                  {skill.techs.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="group/icon relative flex items-center justify-center w-12 h-12 sm:w-11 sm:h-11 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-sky-500/50 transition-all duration-300"
                    >
                      <Image
                        src={tech.url}
                        alt={tech.name}
                        width={30}
                        height={30}
                        className="opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover/icon:scale-110 drop-shadow-md"
                      />
                      
                      {/* Tooltip super minimalista (aparece no hover) */}
                      <span className="absolute -top-11 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-800 border border-neutral-700 text-white text-sm font-medium uppercase tracking-wider rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}