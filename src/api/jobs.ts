export interface Experiencia {
  id: number;
  cargo: string;
  empresa: string;
  logoName: string; 
  periodo: string;
  duracao?: string;
  local: string;
  modalidade: string;
  atual: boolean;
  projetos?: string[]; 
  techs: string[]; 
}

export const experiencias: Experiencia[] = [
  {
    id: 1,
    cargo: "Analista Web",
    empresa: "UNISAL",
    logoName: "unisal.png", 
    periodo: "Jan 2026 - Presente",
    local: "Lorena, SP",
    modalidade: "Presencial",
    atual: true,
    projetos: [
      "Manutenção e evolução da plataforma web educacional da instituição.",
      "Desenvolvimento e modernização do portal Revistas UNISAL, incluindo a atualização e manutenção do sistema OJS (Open Journal Systems)."
    ],
    techs: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    cargo: "Estagiário de desenvolvimento",
    empresa: "Neurosia",
    logoName: "neurosia-logo.png",
    periodo: "Dez 2025 - Presente",
    local: "Lorena, SP",
    modalidade: "Remoto",
    atual: true,
    projetos: [
      "Atuação no desenvolvimento de APIs RESTful e integração com serviços de IA.",
      "Refatoração de código legado e implementação de testes unitários.",
    ],
    techs: ["Python", "FastAPI", "Docker"],
  },
  {
    id: 3,
    cargo: "Estagiário de TI em Infraestrutura",
    empresa: "AmstedMaxion",
    logoName: "ammx.jpeg",
    periodo: "Abr 2024 - Jan 2026",
    duracao: "1 ano e 10 meses",
    local: "Cruzeiro, SP",
    modalidade: "Presencial",
    atual: false,
    projetos: [
      "Suporte à infraestrutura de redes e manutenção de servidores on-premise.",
      "Automação de rotinas de backup, helpdesk.",
    ],
    techs: ["Windows Server", "Redes", "Bash", "Suporte N1"],
  },
  {
    id: 4,
    cargo: "Estagiário de TI",
    empresa: "Prefeitura Municipal de Queluz",
    logoName: "pref-qlz-logo.png",
    periodo: "Fev 2024 - Mar 2024",
    duracao: "2 meses",
    local: "Queluz, SP",
    modalidade: "Presencial",
    atual: false,
    projetos: [
      "Manutenção preventiva de hardwares corporativos e suporte aos usuários.",
      "Contribuição no desenvolvimento de sistemas internos",
    ],
    techs: ["Windows Server", "Hardware", "Suporte N1"],
  },
];