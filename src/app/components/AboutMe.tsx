import { Code2, Container, ExternalLink, FileText, Terminal } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 border-t border-neutral-800/50 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Glow (Luz atmosférica sutil para manter o padrão do Hero) */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] -z-10 pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Coluna da Esquerda - Textos */}
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white flex items-center gap-4 tracking-tight">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                <Terminal className="text-sky-400" size={28} />
              </div>
              Sobre mim
            </h2>
            
            {/* Botão do Currículo Estilizado com Glassmorphism */}
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="/api/cv_joao_flavio.pdf"
              className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md font-medium w-full sm:w-auto shadow-[0_0_30px_-10px_rgba(14,165,233,0.15)]"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform" />
              <span>Baixar CV</span>
            </a>
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

        {/* Coluna da Direita - Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          {/* Efeito de sombra sutil atrás do grid */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 blur-3xl -z-10 rounded-[3rem]" />

          {[
            {
              name: "Back-end",
              tech: "Node.JS, Python, PHP",
              icon: <Terminal size={22} />,
            },
            {
              name: "DevOps",
              tech: "Docker",
              icon: <Container size={22} />,
            },
            {
              name: "Banco de Dados",
              tech: "PostgreSQL, Redis, MongoDB",
              icon: <Code2 size={22} />,
            },
            {
              name: "Front-end",
              tech: "React, Tailwind CSS",
              icon: <ExternalLink size={22} />,
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 p-6 rounded-2xl hover:border-sky-500/30 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-xl"
            >
              {/* Linha gradiente superior animada no hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-sky-400 mb-5 p-3 bg-sky-500/10 rounded-xl w-fit group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-500 border border-sky-500/10">
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1 tracking-tight">{skill.name}</h3>
              <p className="text-sm text-neutral-500 font-light">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}