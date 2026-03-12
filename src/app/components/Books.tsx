import { BookOpen } from "lucide-react";
import DropdownSection from "./DropdownSection";
// Aqui nós importamos a array que você criou no outro arquivo!
import { livros } from "../../api/books"; 

// Array de estilos para manter a variação de cores dos livros dinamicamente
const bookStyles = [
  "bg-linear-to-br from-neutral-800 to-[#1a1a1a] border-neutral-700",
  "bg-linear-to-br from-slate-800 to-[#1a1a24] border-slate-700",
  "bg-linear-to-br from-sky-900/40 to-[#0a1118] border-sky-900/50",
  "bg-linear-to-br from-neutral-800 to-black border-neutral-700",
  "bg-linear-to-br from-stone-800 to-[#1c1917] border-stone-700",
];

export default function BooksSection() {
  return (
    <DropdownSection
      id="books"
      title="Biblioteca Pessoal"
      icon={<BookOpen size={32} />}
      description="Alguns dos livros que moldaram minha forma de pensar sobre engenharia de software, código limpo e arquitetura de sistemas."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {/* Aqui pegamos a sua array 'livros' e fazemos o .map() */}
        {livros.map((livro, index) => {
          // Essa linha faz os livros terem cores diferentes ciclando a array de estilos
          const styleClass = bookStyles[index % bookStyles.length];

          return (
            <a 
              key={livro.id} 
              href={livro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group perspective-1000 block"
              title={`${livro.titulo} - ${livro.autor}`}
            >
              <div 
                className={`relative aspect-2/3 border rounded-r-xl rounded-l-sm shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-y-12 ${styleClass}`}
              >
                {/* Sombra da lombada do livro */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-black/40 to-transparent rounded-l-sm"></div>
                
                <h3 className="text-white font-serif font-bold text-sm md:text-base mb-2 line-clamp-3 leading-tight">
                  {livro.titulo}
                </h3>
                
                <p className="text-neutral-400 text-xs italic mt-auto">
                  {livro.autor}
                </p>
              </div>
            </a>
          );
        })}

      </div>
    </DropdownSection>
  );
}