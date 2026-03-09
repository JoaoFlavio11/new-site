import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#050505] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-tighter mb-1">
            joaoflavio<span className="text-sky-500">.cloud</span>
          </h2>
          <p className="text-sm text-neutral-500">
            Software Engineer & Cloud Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/JoaoFlavio11"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/joaoflaviocl/"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contato@joaoflavio.cloud"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} João Flávio. Todos os direitos reservados.
      </div>
    </footer>
  );
}
