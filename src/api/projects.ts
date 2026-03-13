export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  link: string;
  tags: string[];
  icone: "terminal" | "cloud" | "code" | "warehouse";
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Warehouse API",
    descricao:
      "API de um sistema WMS (Warehouse Management System) desenvolvido em Python utilizando a teoria de Grafos para otimização de rotas e armazenamento.",
    link: "https://github.com/JoaoFlavio11/warehouse-api",
    tags: ["Python", "Grafos", "Django","REST"],
    icone: "terminal",
  },
  {
    id: 1,
    titulo: "Easyroute WMS",
    descricao:
      "Frontend dedicado ao projeto Warehous API",
    link: "https://github.com/JoaoFlavio11/data-warehouse",
    tags: ["NextJS", "NodeJS", "Typescript","TailwindCSS"],
    icone: "code",
  },
  {
    id: 3,
    titulo: "Cloud Infrastructure",
    descricao:
      "Repositórios e automações focados em provisionamento de infraestrutura como código (IaC), pipelines de CI/CD e orquestração de containers.",
    link: "https://github.com/JoaoFlavio11",
    tags: ["Docker", "AWS", "CI/CD"],
    icone: "cloud",
  },
];