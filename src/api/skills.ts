export interface Tech {
  name: string;
  url: string;
}

export interface Skill {
  name: string;
  icon: "Terminal" | "Container" | "Code2" | "ExternalLink";
  techs: Tech[]; // Corrigido de string{} para um array do tipo Tech
}

export const skills: Skill[] = [
  {
    name: "Back-end",
    icon: "Terminal",
    techs: [
      {
        name: "Node.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Fastify",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" 
      },
      {
        name: "Firebase",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
      },
      {
        name: "Python",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
    ],
  },
  {
    name: "DevOps",
    icon: "Container",
    techs: [
      {
        name: "Linux",
        url:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
      },
      {
        name: "Docker",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Bash",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg"
      },
      {
        name: "cPanel",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cpanel/cpanel-original.svg",
      },
      {
        name: "Vitest",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
      }
    ],
  },
  {
    name: "Banco de Dados",
    icon: "Code2",
    techs: [
      {
        name: "PostgreSQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Redis",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        name: "MongoDB",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Mongoose",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
      },
      {
        name: "DBeaver",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg"
      },
    ],
  },
  {
    name: "Front-end",
    icon: "ExternalLink",
    techs: [
      {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "NextJS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "HTML5",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
      {
        name: "Javascript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      },
    ],
  },
];