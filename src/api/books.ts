export interface Livro {
  id: number;
  titulo: string;
  autor: string;
  link: string;
  capa: string;
}

export const livros: Livro[] = [
  {
    id: 1,
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript',
    autor: 'Loiane Groner',
    link: 'https://www.amazon.com.br/Estruturas-Dados-Algoritmos-Com-Javascript/dp/8575226932/ref=asc_df_8575226932/?tag=googleshopp00-20&linkCode=df0&hvadid=709884550309&hvpos=&hvnetw=g&hvrand=16417092624047153820&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031967&hvtargid=pla-811121404201&psc=1&mcid=a9ced9adf9a1306791ae220776a5d6a1&gad_source=1',
    capa:'https://m.media-amazon.com/images/I/71KGa1y8eaL._SY425_.jpg'
  },
  {
    id: 2,
    titulo: 'Primeiros Passos em JavaScript (Node.js)',
    autor: 'Ruhan Avila da Conceição',
    link: 'https://www.amazon.com.br/gp/product/B0C382THXG/ref=kinw_myk_ro_title',
    capa: 'https://m.media-amazon.com/images/I/41sHuszbvBL._SY445_SX342_QL70_ML2_.jpg'
  },
  {
    id: 3,
    titulo: 'Técnicas de Invasão: Aprenda as técnicas usadas por hackers em invasões reais',
    autor: 'Bruno Fraga',
    link: 'https://www.amazon.com.br/T%C3%A9cnicas-Invas%C3%A3o-Aprenda-t%C3%A9cnicas-invas%C3%B5es/dp/6550440181',
    capa:'https://m.media-amazon.com/images/I/41ZLzHFZIYL._SY445_SX342_ML2_.jpg'
  },
  {
    id: 4,
    titulo: 'Entendendo Algoritmos',
    autor: 'Aditya Y. Bhargava',
    link: 'https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634',
    capa: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SY425_.jpg',
  },
  {
    id: 5,
    titulo: 'Sapiens: A Brief History of Humankind',
    autor: 'Yuval Noah Harari',
    link: 'https://www.amazon.com.br/Sapiens-Brief-History-Humankind-English-ebook/dp/B00ICN066A',
    capa: 'https://m.media-amazon.com/images/I/51Sn8PEXwcL._SY445_SX342_QL70_ML2_.jpg',
  },
  {
    id: 6,
    titulo: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    autor: 'James Clear',
    link: 'https://www.amazon.com.br/Atomic-Habits-Proven-Build-English-ebook/dp/B07D23CFGR',
    capa:'https://m.media-amazon.com/images/I/81kg51XRc1L._SY466_.jpg',
  },
  {
    id: 7,
    titulo: 'Robinson Crusoé',
    autor: 'Daniel Defoe',
    link: 'https://www.amazon.com.br/gp/product/B0B9QSPXZD/ref=kinw_myk_ro_title',
    capa:'https://m.media-amazon.com/images/I/9137jmsK9YL._SY466_.jpg',
  },
];