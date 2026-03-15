"use client";

import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { livros } from "../../api/books";
import DropdownSection from "@/components/layout/DropdownSection";

export default function BooksSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Função para rolar o carrossel estilo Netflix
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Define a quantidade de rolagem. Rola o equivalente a ~2 livros por clique.
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <DropdownSection
      id="books"
      title="Biblioteca Pessoal"
      icon={<BookOpen size={32} />}
      description="Alguns dos livros que moldaram minha forma de pensar sobre engenharia de software, código limpo e arquitetura de sistemas."
    >
      <div className="relative group mt-8">
        {/* Botão de Rolar para a Esquerda (Fica invisível até passar o mouse) */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-20 items-center justify-center w-12 h-12 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 hover:scale-110 transition-all duration-300 disabled:opacity-0 hidden md:flex shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Rolar para esquerda"
        >
          <ChevronLeft size={28} className="-ml-1" />
        </button>

        {/* Container do Slider (Lista horizontal com scroll oculto) */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Iterando sobre a array de livros dinâmica */}
          {livros.map((livro) => (
            <a
              key={livro.id}
              href={livro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/book perspective-1000 block shrink-0 snap-center w-40 md:w-50 lg:w-55"
              title={`${livro.titulo} - ${livro.autor}`}
            >
              {/* Container do Livro (Capa) */}
              <div className="relative aspect-2/3 border border-neutral-800 rounded-r-xl rounded-l-sm shadow-xl transition-transform duration-500 group-hover/book:-translate-y-4 group-hover/book:rotate-y-12 overflow-hidden bg-neutral-900">
                {/* Imagem otimizada do Next.js */}
                <Image
                  src={livro.capa}
                  alt={`Capa do livro ${livro.titulo}`}
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 200px, 220px"
                  className="object-cover transition-opacity duration-300"
                />

                {/* Efeito de sombra da lombada do livro para manter a imersão 3D */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/60 to-transparent"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Botão de Rolar para a Direita (Fica invisível até passar o mouse) */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-20 items-center justify-center w-12 h-12 bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 hover:bg-sky-500/80 hover:scale-110 transition-all duration-300 disabled:opacity-0 hidden md:flex shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          aria-label="Rolar para direita"
        >
          <ChevronRight size={28} className="-mr-1" />
        </button>
      </div>
    </DropdownSection>
  );
}
