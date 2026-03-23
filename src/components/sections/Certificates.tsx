import { certificados } from "@/api/certificates";
import { Award, BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import DropdownSection from "@/components/layout/DropdownSection";

export default function CertificatesSection() {
  return (
    <DropdownSection
      id="certificates"
      title="Certificações e Formações"
      icon={<Award size={24} className="opacity-50" />}
      description="Registros técnicos e validações de competência em engenharia e software."
    >
      <div className="relative mt-10 group/slider">
        {/* Slider Container: Scroll horizontal com snap para travar nos cards */}
        <div className="flex overflow-x-auto gap-4 pb-12 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
          
          {certificados.map((cert, index) => (
            <Link
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-[280px] md:w-[380px] snap-start group relative"
            >
              

              {/* Card Style: Industrial & Minimal */}
              <div className="relative bg-[#0c0c0c] border border-neutral-900 p-6 md:p-8 transition-all duration-500 group-hover:border-neutral-700">
                
                {/* Indicador de Hover: Apenas uma linha sutil */}
                <div className="absolute top-0 left-0 w-0 h-[1px] bg-neutral-400 transition-all duration-700 group-hover:w-full" />

                <div className="flex flex-col justify-between h-[160px]">
                  <div>
                    <h4 className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase font-mono mb-2">
                      {cert.ensino}
                    </h4>
                    <h3 className="text-xl font-semibold font-mono text-neutral-300 tracking-tight leading-snug group-hover:text-white transition-colors">
                      {cert.titulo}
                    </h3>
                  </div>

                  {/* Footer do Card */}
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity text-emerald-500">
                      <BadgeCheck size={12} />
                      <span>Verified_Auth</span>
                    </div>
                    <ArrowRight size={16} className="text-neutral-700 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Spacer final para garantir que o último card não cole na borda */}
          <div className="flex-none w-12 pointer-events-none" />
        </div>

        {/* Gradiente de Mascaramento para indicar que há mais conteúdo */}
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10 hidden md:block" />
      </div>

      {/* Footer da Seção: Navegação Visual */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-1">
          <div className="w-8 h-[1px] bg-neutral-800" />
          <div className="w-2 h-[1px] bg-neutral-900" />
          <div className="w-2 h-[1px] bg-neutral-900" />
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] opacity-20">
          Scroll to Explore Data
        </span>
      </div>
    </DropdownSection>
  );
}