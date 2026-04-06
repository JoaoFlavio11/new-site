import Image from "next/image";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e910,transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-8">

          {/* Avatar + Nome */}
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
              <Image
                src="/profile.png"
                alt="João Flávio"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                João Flávio
              </h1>
              <p className="text-neutral-500 mt-1">
                @joaoflavio.dev
              </p>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight max-w-2xl">
            Construindo sistemas escaláveis,
            <br />
            <span className="text-sky-500">não apenas interfaces.</span>
          </h2>

          {/* Bio */}
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
            Engenheiro de Computação focado em backend, cloud e arquitetura.
            Experiência com APIs, dados e integração de sistemas modernos.
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/JoaoFlavio11"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-sky-500 transition"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/joaoflaviocl/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-sky-500 transition"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-3 pt-4">
            {["Node.js", "Next.js", "TypeScript", "Docker", "AWS", "MongoDB"].map((item) => (
              <span
                key={item}
                className="text-sm px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT - TERMINAL */}
        <div className="relative">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden scale-[1.02]">

            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-neutral-800">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-4 text-xs text-neutral-500 font-mono">
                joao@dev ~ portfolio
              </span>
            </div>

            {/* Conteúdo */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base text-neutral-300 space-y-3">

              <p><span className="text-sky-500">$</span> whoami</p>
              <p className="text-neutral-400">João Flávio - Full-stack Engineer</p>

              <p className="mt-4"><span className="text-sky-500">$</span> skills</p>
              <p className="text-neutral-400">APIs, Cloud, System Design</p>

              <p className="mt-4"><span className="text-sky-500">$</span> current_focus</p>
              <p className="text-neutral-400">Scalable systems & SaaS</p>

              <p className="mt-4"><span className="text-sky-500">$</span> status</p>
              <p className="text-emerald-400">Available for opportunities</p>

              <p className="mt-4">
                <span className="text-sky-500">$</span>{" "}
                <span className="animate-pulse">_</span>
              </p>

            </div>
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 bg-sky-500/10 blur-3xl rounded-3xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}