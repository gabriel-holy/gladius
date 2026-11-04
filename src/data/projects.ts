export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
}

// Client work confirmed by Gabriel. No unverified performance or sales claims.
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "BARRICAS INDUSTRIAIS",
    category: "Site comercial · King Pack",
    description:
      "Site de vendas desenvolvido por Gabriel para apresentar barricas de papelão e baldes plásticos e direcionar interessados ao atendimento comercial.",
    url: "https://barricasindustriais.com/",
  },
];
