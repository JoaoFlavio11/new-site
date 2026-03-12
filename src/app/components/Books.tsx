import { BookOpen, ChevronDown } from "lucide-react";
import DropdownSection from "./DropdownSection";

export default function BooksSection() {
  return (
    <DropdownSection
      id="books"
      title="Biblioteca Pessoal"
      icon={<BookOpen size={32} />}
    >
      <p className="text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition-colors">
        Alguns dos livros que moldaram minha forma de pensar sobre engenharia de
        software, código limpo e arquitetura de sistemas.
      </p>

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
    </DropdownSection>
  );
}
