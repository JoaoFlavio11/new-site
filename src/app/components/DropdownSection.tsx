/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
'use client'

import { ChevronDown } from "lucide-react";
import { useState, ReactNode } from "react";

interface DropdownSectionProps {
  id: string;
  title: string;
  icon: ReactNode;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export default function DropdownSection({
  id,
  title,
  icon,
  description,
  children,
  defaultOpen = true,
  className = "",
}: DropdownSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSection();
    }
  };

  return (
    <section id={id} className={`py-8 px-6 border-t-0 border-b-0 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          onClick={toggleSection}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
        >
          {/* Layout Alinhado à Esquerda */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <div className="text-sky-500 group-hover:text-sky-400 transition-colors">
                {icon}
              </div>
              {title}
            </h2>
            <div className="p-2 rounded-full group-hover:bg-neutral-800 transition-colors">
              <ChevronDown
                className={`text-neutral-400 transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
                size={24}
              />
            </div>
          </div>
          {description && (
            <p className="text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition-colors">
              {description}
            </p>
          )}
        </div>

        {/* Container Expansível com Animação */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{children}</div>
        </div>
      </div>
    </section>
  );
}