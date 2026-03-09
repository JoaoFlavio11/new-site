'use client'

import { Award, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CertificatesSection() {
  // Estado para controlar as seções dropdown
  const [openSections, setOpenSections] = useState({
    projects: true,
    certificates: true,
    books: true,
  });

  // Função para alternar o estado aberto/fechado
  const toggleSection = (section: any) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <section
      id="certificates"
      className="py-24 px-6 border-y border-neutral-800 bg-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="flex flex-col items-center mb-16 text-center cursor-pointer group"
          onClick={() => toggleSection("certificates")}
        >
          <Award
            className="text-neutral-500 mb-4 group-hover:text-sky-500 transition-colors"
            size={32}
          />
          <div className="flex items-center gap-4 justify-end mb-4">
            <h2 className="text-3xl font-bold text-white">
              Certificações e Formações
            </h2>
            <div className="p-2 rounded-full bg-[#111] group-hover:bg-[#1a1a1a] transition-colors border border-neutral-800">
              <ChevronDown
                className={`text-neutral-400 transition-transform duration-500 ${openSections.certificates ? "rotate-180" : ""}`}
                size={20}
              />
            </div>
          </div>
          <p className="text-neutral-400 max-w-xl group-hover:text-neutral-300 transition-colors">
            Um registro formal do meu aprendizado contínuo e especializações
            técnicas.
          </p>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${openSections.certificates ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            {/* Estilo Quadro de Diplomas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Diploma 1 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Rocketseat
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Ignite <br /> Trilha Node.js
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Autenticado
                    </p>
                  </div>
                </div>
              </div>

              {/* Diploma 2 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Rocketseat
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Ignite <br /> Trilha ReactJS
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Autenticado
                    </p>
                  </div>
                </div>
              </div>

              {/* Diploma 3 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-[1px] bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Cloud & DevOps
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Fundamentos <br /> Arquitetura AWS
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Formação Contínua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
