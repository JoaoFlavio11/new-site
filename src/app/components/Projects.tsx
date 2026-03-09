'use client'

import { ChevronDown, ChevronRight, Cloud, Code2, ExternalLink, Terminal } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection() {

  const [openSections, setOpenSections] = useState({
      projects: true,
      certificates: true,
      books: true
    });

  const toggleSection = (section: any) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        className="flex items-center justify-between mb-12 cursor-pointer group"
        onClick={() => toggleSection("projects")}
      >
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Code2 className="text-sky-500 group-hover:text-sky-400 transition-colors" />
          Projetos em Destaque
        </h2>
        <div className="p-2 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
          <ChevronDown
            className={`text-neutral-400 transition-transform duration-500 ${openSections.projects ? "rotate-180" : ""}`}
            size={24}
          />
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${openSections.projects ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <a
              href="https://github.com/JoaoFlavio11/warehouse-api"
              target="_blank"
              rel="noreferrer"
              className="group block bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 hover:border-sky-500/50 hover:bg-[#141414] transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neutral-900 rounded-lg text-sky-400">
                  <Terminal size={24} />
                </div>
                <ExternalLink
                  size={20}
                  className="text-neutral-500 group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Warehouse API
              </h3>
              <p className="text-neutral-400 mb-6 line-clamp-2">
                API de um sistema WMS (Warehouse Management System) desenvolvido
                em Python utilizando a teoria de Grafos para otimização de rotas
                e armazenamento.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  Python
                </span>
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  Grafos
                </span>
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  API REST
                </span>
              </div>
            </a>

            {/* Project Card 2 */}
            <div className="group block bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 hover:border-neutral-700 transition-all cursor-default">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neutral-900 rounded-lg text-neutral-400">
                  <Cloud size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Cloud Infrastructure
              </h3>
              <p className="text-neutral-400 mb-6 line-clamp-2">
                Repositórios e automações focados em provisionamento de
                infraestrutura como código (IaC), pipelines de CI/CD e
                orquestração de containers.
              </p>
              <div className="flex gap-3">
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  Docker
                </span>
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  AWS
                </span>
                <span className="text-xs font-medium px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300">
                  CI/CD
                </span>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <a
                href="https://github.com/JoaoFlavio11"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors"
              >
                Ver todos os repositórios <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
