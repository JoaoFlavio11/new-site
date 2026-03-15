import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import DropdownSection from "./DropdownSection";
import { certificados } from "@/api/certificates";
import Link from "next/link";

export default function CertificatesSection() {
  return (
    <DropdownSection
      id="certificates"
      title="Certificações e Formações"
      icon={<Award size={32} />}
      description="Um registro formal do meu aprendizado contínuo e especializações técnicas."
    >
      <div className="mt-8">
        {/* Grid fluida e responsiva em vez de caixas com tamanho fixo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          
          {/* Mapeando a array de certificados */}
          {certificados.map((cert) => (
            <Link 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/60 p-6 md:p-8 rounded-2xl hover:border-sky-500/30 hover:bg-neutral-800/80 transition-all duration-500 hover:-translate-y-1 overflow-hidden shadow-xl min-h-[240px]"
            >
              {/* Linha gradiente superior animada no hover (Mantém o padrão visual dos Projetos) */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex-1">
                {/* Header do Card com Ícones */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-neutral-500 group-hover:text-sky-400 transition-colors duration-500">
                    <Award size={28} strokeWidth={1.5} />
                  </div>
                  
                  {/* Ícone de link externo que aparece no hover deslizando suavemente */}
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                    <ExternalLink size={14} className="text-white" />
                  </div>
                </div>
                
                {/* Conteúdo (Instituição e Título) */}
                <h4 className="text-[11px] text-neutral-500 tracking-widest uppercase mb-3 font-mono">
                  {cert.ensino}
                </h4>
                
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-400 transition-colors">
                  {cert.titulo}
                </h3>
              </div>
              
              {/* Footer (Badge Autenticado) */}
              <div className="mt-8 pt-4 border-t border-neutral-800/50 flex items-center gap-2 text-xs font-mono text-emerald-500/70 group-hover:text-emerald-400 transition-colors">
                <BadgeCheck size={16} />
                <span>Autenticado</span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </DropdownSection>
  );
}