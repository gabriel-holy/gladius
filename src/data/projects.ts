export interface Project {
  id: number;
  title: string;
  cat: string;
  tag: string;
  result: string;
  desc: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MAISON DORÉE",
    cat: "landing page",
    tag: "GL_01_26",
    result: "+340% reservas",
    desc: "Landing page + reservas via WhatsApp Business para restaurante fine dining.",
  },
  {
    id: 2,
    title: "CLÍNICA VITALE",
    cat: "funil + automação",
    tag: "GL_02_26",
    result: "+180 leads/mês",
    desc: "Funil automatizado com agendamento online para clínica de estética.",
  },
  {
    id: 3,
    title: "OPUS ADVOCACIA",
    cat: "site institucional",
    tag: "GL_03_25",
    result: "2.4× consultas",
    desc: "Site institucional com formulário inteligente de triagem de casos.",
  },
  {
    id: 4,
    title: "STUDIO FORMA",
    cat: "portfólio digital",
    tag: "GL_04_25",
    result: "+95% tempo no site",
    desc: "Portfólio interativo com galeria imersiva e captação de orçamentos.",
  },
  {
    id: 5,
    title: "BELLA FIORE",
    cat: "e-commerce",
    tag: "GL_05_26",
    result: "3.1× vendas",
    desc: "E-commerce simplificado com entrega automatizada para floricultura.",
  },
  {
    id: 6,
    title: "DR. MENDES",
    cat: "landing page",
    tag: "GL_06_25",
    result: "+220% agendamentos",
    desc: "Landing page de captação com remarketing para consultório odontológico.",
  },
];
