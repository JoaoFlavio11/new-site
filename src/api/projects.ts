export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  link: string;
  tags: string[];
  icone: "terminal" | "cloud" | "code";
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Warehouse API",
    descricao:
      "API de um sistema WMS (Warehouse Management System) desenvolvido em Python utilizando a teoria de Grafos para otimização de rotas e armazenamento.",
    link: "https://github.com/JoaoFlavio11/warehouse-api",
    tags: ["Python", "Grafos", "API REST"],
    icone: "terminal",
  },
  {
    id: 2,
    titulo: "Cloud Infrastructure",
    descricao:
      "Repositórios e automações focados em provisionamento de infraestrutura como código (IaC), pipelines de CI/CD e orquestração de containers.",
    link: "https://github.com/JoaoFlavio11",
    tags: ["Docker", "AWS", "CI/CD"],
    icone: "cloud",
  },
];