import { Award } from "lucide-react";
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
      className="border-y border-neutral-800 bg-[#0a0a0a]"
    >
      <div className="overflow-hidden mt-8">
        {/* Estilo Quadro de Diplomas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapeando a array de certificados */}
          {certificados.map((cert) => (
            <Link 
              key={cert.id} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-[#111] p-3 rounded shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 h-53 w-90">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a] group-hover:border-sky-500/30 transition-colors">
                    
                    <div className="absolute top-4 w-12 h-px bg-neutral-600 group-hover:bg-sky-500/50 transition-colors"></div>
                    
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      {cert.ensino}
                    </h4>
                    
                    <h3 className="text-lg font-mono text-neutral-200 mb-6 leading-snug group-hover:text-sky-400 transition-colors">
                      {cert.titulo}
                    </h3>
                    
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Autenticado
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </DropdownSection>
  );
}