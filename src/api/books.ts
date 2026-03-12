export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  link: string;
}

export const livros: Livro[] = [
  {
    id: 1,
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    autor: 'Loiane Groner',
    link: 'https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932/ref=asc_df_8575226932/?tag=googleshopp00-20&linkCode=df0&hvadid=709884550309&hvpos=&hvnetw=g&hvrand=16417092624047153820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031967&hvtargid=pla-811121404201&psc=1&mcid=a9ced9adf9a1306791ae220776a5d6a1&gad_source=1',
  },
  {
    id: 2,
    titulo: 'Primeiros Passos em JavaScript (Node.js)',
    autor: 'Ruhan Avila da Conceição',
    link: 'https://www.amazon.com.br/gp/product/B0C382THXG/ref=kinw_myk_ro_title',
  },
  {
    id: 3,
    titulo: 'Técnicas de Invasão: Aprenda as técnicas usadas por hackers em invasões reais',
    autor: 'Bruno Fraga',
    link: 'https://www.amazon.com.br/T%C3%A9cnicas-Invas%C3%A3o-Aprenda-t%C3%A9cnicas-invas%C3%B5es/dp/6550440181',
  },
  {
    id: 4,
    titulo: 'Sapiens: A Brief History of Humankind',
    autor: 'Yuval Noah Harari',
    link: 'https://www.amazon.com.br/Sapiens-Brief-History-Humankind-English-ebook/dp/B00ICN066A',
  },
  {
    id: 5,
    titulo: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    autor: 'James Clear',
    link: 'https://www.amazon.com.br/Atomic-Habits-Proven-Build-English-ebook/dp/B07D23CFGR',
  },
  {
    id: 6,
    titulo: 'Robinson Crusoé',
    autor: 'Daniel Defoe',
    link: 'https://www.amazon.com.br/gp/product/B0B9QSPXZD/ref=kinw_myk_ro_title',
  },
];