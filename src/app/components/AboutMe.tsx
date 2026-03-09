import { Cloud, Code2, ExternalLink, Terminal } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 border-t border-neutral-800 bg-[#0f0f0f]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Terminal className="text-sky-500" />
            Sobre mim
          </h2>
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
              tech: "Node.js, Python, Go",
              icon: <Terminal size={18} />,
            },
            {
              name: "Cloud & DevOps",
              tech: "AWS, Docker, CI/CD",
              icon: <Cloud size={18} />,
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
          ].map((skill, idx) => (
            <div
              key={idx}
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
