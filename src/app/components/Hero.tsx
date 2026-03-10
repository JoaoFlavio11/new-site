import { Code2, Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400 w-fit mb-8">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Disponível para novos desafios
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
        Engenheiro de Computação <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500">
          & Desenvolvedor Full-stack.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
        Construindo aplicações escaláveis, APIs robustas e soluções com IA.
        Foco em performance, código limpo e infraestrutura moderna.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/JoaoFlavio11"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/joaoflaviocl/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://app.rocketseat.com.br/me/joaoflavio-cl"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-neutral-400 hover:text-white px-4 py-3 font-medium transition-colors"
        >
          <Code2 size={20} />
          Rocketseat
        </a>
      </div>
    </section>
  );
}
