import { Award, ChevronDown } from "lucide-react";
import DropdownSection from "./DropdownSection";

export default function CertificatesSection() {


  return (
        <DropdownSection
          id="certificates"
          title="Certificações e Formações"
          icon={<Award size={32}/>}
          className=""
        >
          <div className="flex flex-col items-center mb-16 text-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg">
          <p className="text-neutral-400 max-w-xl group-hover:text-neutral-300 transition-colors">
            Um registro formal do meu aprendizado contínuo e especializações
            técnicas.
          </p>
          </div>
        
          <div className="overflow-hidden">
            {/* Estilo Quadro de Diplomas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Diploma 1 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-px bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Rocketseat
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Ignite <br /> Trilha Node.js
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Autenticado
                    </p>
                  </div>
                </div>
              </div>

              {/* Diploma 2 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-px bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Rocketseat
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Ignite <br /> Trilha ReactJS
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Autenticado
                    </p>
                  </div>
                </div>
              </div>

              {/* Diploma 3 */}
              <div className="bg-[#111] p-3 rounded shadow-2xl">
                <div className="border border-neutral-700 p-1 h-full">
                  <div className="border border-neutral-700 border-dashed h-full p-8 flex flex-col items-center text-center justify-center relative bg-[#0a0a0a]">
                    <div className="absolute top-4 w-12 h-px bg-neutral-600"></div>
                    <h4 className="text-xs text-neutral-500 tracking-widest uppercase mb-4">
                      Cloud & DevOps
                    </h4>
                    <h3 className="text-lg font-serif text-neutral-200 mb-6 leading-snug">
                      Fundamentos <br /> Arquitetura AWS
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-auto">
                      Formação Contínua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DropdownSection>
  );
}
