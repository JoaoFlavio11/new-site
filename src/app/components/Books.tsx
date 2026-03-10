/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
'use client'

import { BookOpen, ChevronDown } from "lucide-react";
import { useState } from "react";

// Tipamos as seções válidas para o TypeScript parar de reclamar do 'any'
type SectionKey = "projects" | "certificates" | "books";

export default function BooksSection() {
  // Estado para controlar as seções dropdown
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    projects: true,
    certificates: true,
    books: true,
  });
  
  // Função para alternar o estado aberto/fechado com tipagem correta
  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Lidar com eventos de teclado (Enter ou Espaço) para acessibilidade
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Evita que o espaço role a página para baixo
      toggleSection("books");
    }
  };

  return(
    <section id="books" className="py-24 px-6 max-w-6xl mx-auto">
      <div
        className="mb-12 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
        onClick={() => toggleSection("books")}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={openSections.books}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="text-sky-500 group-hover:text-sky-400 transition-colors" />
            Biblioteca Pessoal
          </h2>
          <div className="p-2 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
            <ChevronDown
              className={`text-neutral-400 transition-transform duration-500 ${openSections.books ? "rotate-180" : ""}`}
              size={24}
            />
          </div>
        </div>
        <p className="text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition-colors">
          Alguns dos livros que moldaram minha forma de pensar sobre engenharia de
          software, código limpo e arquitetura de sistemas.
        </p>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${openSections.books ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Livro 1 */}
            <div className="group perspective-1000">
              <div className="relative aspect-2/3 bg-linear-to-br from-neutral-800 to-[#1a1a1a] border border-neutral-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2">
                  Clean Code
                </h3>
                <p className="text-neutral-400 text-xs italic">
                  Robert C. Martin
                </p>
              </div>
            </div>

            {/* Livro 2 */}
            <div className="group perspective-1000">
              <div className="relative aspect-2/3 bg-linear-to-br from-slate-800 to-[#1a1a24] border border-slate-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">
                  The Pragmatic Programmer
                </h3>
                <p className="text-neutral-400 text-xs italic mt-2">
                  Hunt & Thomas
                </p>
              </div>
            </div>

            {/* Livro 3 */}
            <div className="group perspective-1000">
              <div className="relative aspect-2/3 bg-linear-to-br from-sky-900/40 to-[#0a1118] border border-sky-900/50 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">
                  Designing Data-Intensive Applications
                </h3>
                <p className="text-neutral-400 text-xs italic mt-2">
                  Martin Kleppmann
                </p>
              </div>
            </div>

            {/* Livro 4 */}
            <div className="group perspective-1000">
              <div className="relative aspect-2/3 bg-linear-to-br from-neutral-800 to-black border border-neutral-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2">
                  SRE
                </h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Site Reliability Engineering
                </p>
                <p className="text-neutral-500 text-[10px] italic mt-2">
                  O'Reilly
                </p>
              </div>
            </div>

            {/* Livro 5 */}
            <div className="group perspective-1000">
              <div className="relative aspect-2/3 bg-linear-to-br from-stone-800 to-[#1c1917] border border-stone-700 rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12">
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 leading-tight">
                  Arquitetura Limpa
                </h3>
                <p className="text-neutral-400 text-xs italic mt-2">
                  Robert C. Martin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  );
}