// ./api/books.ts
export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  link: string;
  capa: string;
}

// ./api/certificates.ts
export interface Certificado {
  id: number;
  titulo: string;
  ensino: string;
  link: string;
}

// ./api/jobs.ts
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

// ./api/projects.ts
export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  link: string;
  tags: string[];
  icone: "terminal" | "cloud" | "code" | "warehouse";
}

// ./api/skill.ts
export interface Tech {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: "Terminal" | "Container" | "Code2" | "ExternalLink";
  techs: Tech[]; 
}