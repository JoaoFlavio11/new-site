import { BookOpen } from "lucide-react";
import Image from "next/image";
import { livros } from "../../api/books";
import DropdownSection from "./DropdownSection";

export default function BooksSection() {
  return (
    <DropdownSection
      id="books"
      title="Biblioteca Pessoal"
      icon={<BookOpen size={32} />}
      description="Alguns dos livros que moldaram minha forma de pensar sobre engenharia de software, código limpo e arquitetura de sistemas."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        
        {/* Iterando sobre a array de livros dinâmica */}
        {livros.map((livro) => (
          <a 
            key={livro.id} 
            href={livro.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group perspective-1000 block"
            title={`${livro.titulo} - ${livro.autor}`}
          >
            {/* Container do Livro (Capa) */}
            <div 
              className="relative aspect-2/3 border border-neutral-800 rounded-r-xl rounded-l-sm shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12 overflow-hidden bg-neutral-900"
            >
              {/* Imagem otimizada do Next.js */}
              <Image 
                src={livro.capa} 
                alt={`Capa do livro ${livro.titulo}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                className="object-cover transition-opacity duration-300"
              />

              {/* Efeito de sombra da lombada do livro para manter a imersão 3D */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/60 to-transparent"></div>
            </div>
            
          </a>
        ))}

      </div>
    </DropdownSection>
  );
}