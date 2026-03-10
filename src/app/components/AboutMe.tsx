import { Code2, Container, ExternalLink, FileText, Terminal  } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-neutral-800 bg-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-sky-500" />
              Sobre mim 
            </h2>
            
            {/* Botão do Currículo Estilizado */}
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="/api/cv_joao_flavio.pdf"
              className="group flex items-center gap-2 bg-neutral-900 border border-neutral-700 text-sky-400 px-4 py-2 rounded-lg font-medium hover:bg-neutral-800 hover:text-sky-300 transition-colors text-sm"
            >
              <FileText size={16} />
              <span>Meu CV</span>
            </a>
          </div>

          <div className="space-y-4 text-neutral-400 leading-relaxed text-lg">
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

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              name: "Back-end",
              tech: "Node.JS, Python, PHP",
              icon: <Terminal size={18} />,
            },
            {
              name: "DevOps",
              tech: "Docker",
              icon: <Container size={18} />,
            },
            {
              name: "Banco de Dados",
              tech: "PostgreSQL, Redis, MongoDB",
              icon: <Code2 size={18} />,
            },
            {
              name: "Front-end",
              tech: "React, Tailwind CSS",
              icon: <ExternalLink size={18} />,
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-[#141414] border border-neutral-800 p-5 rounded-xl hover:border-neutral-700 transition-colors"
            >
              <div className="text-sky-400 mb-3">{skill.icon}</div>
              <h3 className="text-white font-medium mb-1">{skill.name}</h3>
              <p className="text-sm text-neutral-500">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}