"use client";

import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { experiencias } from "../../api/jobs";
import DropdownSection from "./DropdownSection";

export default function JobsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleJob = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <DropdownSection
      id="experience"
      title="Experiência Profissional"
      description="A minha trajetória no mercado de tecnologia, infraestrutura e desenvolvimento de software."
      icon={<Briefcase size={32} />}
    >
      <div className="relative z-10 mx-auto max-w-4xl lg:mt-2 md:mt-2 mt-2 mb-3">
        {/* Container principal - Lista ultra fluida com gap e sem bordas duras */}
        <div className="flex flex-col gap-2 md:gap-4">
          {experiencias.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`group relative rounded-3xl transition-all duration-500 ease-out ${
                  isExpanded ? "bg-white/2" : "hover:bg-white/2"
                }`}
              >
                {/* Cabeçalho Clicável Fluido */}
                <button
                  type="button"
                  onClick={() => toggleJob(exp.id)}
                  className="w-full flex items-start sm:items-center justify-between p-5 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 rounded-3xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8 w-full">
                    {/* Logo sóbrio */}
                    <div
                      className={`relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl overflow-hidden bg-[#050505] border border-neutral-800/50 flex items-center justify-center transition-all duration-700 shadow-sm ${
                        isExpanded
                          ? "grayscale-0 scale-105 border-neutral-700/50"
                          : "opacity-80  group-hover:opacity-100 group-hover:scale-105"
                      }`}
                    >
                      <Image
                        src={`/images/${exp.logoName}`}
                        alt={`Logo da ${exp.empresa}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full p-1 rounded-2xl"
                      />
                    </div>

                    {/* Informações Principais - Hierarquia invertida (Cargo > Empresa) */}
                    <div className="flex-1 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-100 tracking-tight transition-colors duration-300 group-hover:text-white">
                          {exp.cargo}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5">
                          <p className="font-medium text-sm md:text-base text-neutral-400">
                            {exp.empresa}
                          </p>
                          {exp.atual && (
                            <span className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                              </span>
                              Atual
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Período visível no desktop à direita */}
                      <div className="hidden md:flex flex-col items-end text-right">
                        <p className="text-sm font-mono text-neutral-500">{exp.periodo}</p>
                        {exp.duracao && (
                          <p className="text-xs text-neutral-600 mt-1">{exp.duracao}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Ícone de Expansão */}
                  <div className="shrink-0 ml-4 mt-2 sm:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className={`p-2 rounded-full transition-transform duration-500 ease-out bg-white/3 ${isExpanded ? "rotate-180" : ""}`}>
                      <ChevronDown size={18} className="text-neutral-400" />
                    </div>
                  </div>
                </button>

                {/* Área Expansível Clean & Editorial */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Alinhamento do conteúdo com o texto (não com a logo) usando padding-left calculado */}
                    <div className="pb-8 px-5 md:px-8 pt-2 md:pl-26">
                      
                      {/* Linha vertical que âncora o conteúdo */}
                      <div className="border-l border-neutral-800/60 pl-5 md:pl-8">
                        
                        {/* Meta Infos Mobile (Data e Local) */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs uppercase tracking-widest text-neutral-500 font-mono mb-8 md:hidden">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="opacity-70" />
                            <span>
                              {exp.periodo}
                            </span>
                          </div>
                        </div>

                        {/* Localização (Desktop e Mobile) */}
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-mono mb-8">
                          <MapPin size={14} className="opacity-70" />
                          <span>
                            {exp.local} <span className="mx-2 opacity-30">|</span> {exp.modalidade}
                          </span>
                        </div>

                        {/* Lista de Projetos/Realizações */}
                        <ul className="space-y-5 mb-10">
                          {exp.projetos.map((projeto, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-4 text-neutral-400 font-light leading-relaxed text-sm md:text-base"
                            >
                              <span className="text-neutral-700 mt-2 text-[8px] shrink-0">■</span>
                              <span className="group-hover:text-neutral-300 transition-colors duration-300">{projeto}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tecnologias Usadas - Tags minimalistas */}
                        <div className="flex flex-wrap gap-2">
                          {exp.techs.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs font-medium px-3.5 py-1.5 bg-[#050505] border border-neutral-800/80 rounded-md text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DropdownSection>
  );
}