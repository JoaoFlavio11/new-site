
import { Cloud, Code2, ExternalLink, Terminal } from "lucide-react";
import DropdownSection from "../layout/DropdownSection";
import type { Projeto } from "@/types/types";

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Warehouse API",
    descricao:
      "API de um sistema WMS (Warehouse Management System) desenvolvido em Python utilizando a teoria de Grafos para otimização de rotas e armazenamento.",
    link: "https://github.com/JoaoFlavio11/warehouse-api",
    tags: ["Python", "Grafos", "Django","REST"],
    icone: "terminal",
  },
  {
    id: 1,
    titulo: "Easyroute WMS",
    descricao:
      "Frontend dedicado ao projeto Warehous API",
    link: "https://github.com/JoaoFlavio11/data-warehouse",
    tags: ["NextJS", "NodeJS", "Typescript","TailwindCSS"],
    icone: "code",
  },
  {
    id: 3,
    titulo: "Cloud Infrastructure",
    descricao:
      "Repositórios e automações focados em provisionamento de infraestrutura como código (IaC), pipelines de CI/CD e orquestração de containers.",
    link: "https://github.com/JoaoFlavio11",
    tags: ["Docker", "AWS", "CI/CD"],
    icone: "cloud",
  },
];

export default function ProjectsSection() {
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
        <div className="absolute inset-0 -z-10 rounded-[3rem]" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Adicionamos o 'index' aqui para ajudar a criar uma key única */}
          {projetos.map((projeto, index) => (
            <a
              // Forçamos a key a ser única combinando ID e Index caso o ID venha duplicado
              key={`${projeto.id}-${index}`}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 rounded-2xl p-8 hover:border-sky-500/30 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-sky-500/10 border border-sky-500/10 rounded-xl text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-500">
                  {renderIcon(projeto.icone)}
                </div>
                <ExternalLink
                  size={20}
                  className="text-neutral-500 group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {projeto.titulo}
              </h3>

              <p className="text-neutral-400 mb-6 line-clamp-2 font-light leading-relaxed grow">
                {projeto.descricao}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {projeto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-neutral-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </DropdownSection>
  );
}
