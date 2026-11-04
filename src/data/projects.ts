export interface Project {
  id: number;
  title: string;
  cat: string;
  tag: string;
  result: string;
  desc: string;
}

// One confirmed client website and five clearly labeled illustrative use cases.
export const PROJECTS: Project[] = [
  { id: 1, title: "BARRICAS INDUSTRIAIS", cat: "site comercial · King Pack", tag: "PROJETO_REAL", result: "Site desenvolvido por Gabriel", desc: "Apresentação de embalagens industriais, especificações dos produtos e acesso ao atendimento comercial." },
  { id: 2, title: "PEDIDOS", cat: "exemplo ilustrativo", tag: "IDEIA_02", result: "Possibilidade a avaliar", desc: "Exemplo conceitual: organizar pedidos e etapas de atendimento. Não é um projeto de cliente." },
  { id: 3, title: "INTEGRAÇÕES", cat: "exemplo ilustrativo", tag: "IDEIA_03", result: "Possibilidade a avaliar", desc: "Exemplo conceitual: conectar sistemas para reduzir lançamentos repetidos. Não é um projeto de cliente." },
  { id: 4, title: "ORÇAMENTOS", cat: "exemplo ilustrativo", tag: "IDEIA_04", result: "Possibilidade a avaliar", desc: "Exemplo conceitual: estruturar informações e acompanhar propostas comerciais. Não é um projeto de cliente." },
  { id: 5, title: "OPERAÇÃO", cat: "exemplo ilustrativo", tag: "IDEIA_05", result: "Possibilidade a avaliar", desc: "Exemplo conceitual: dar visibilidade às etapas e pendências do trabalho. Não é um projeto de cliente." },
  { id: 6, title: "AUTOMAÇÃO", cat: "exemplo ilustrativo", tag: "IDEIA_06", result: "Possibilidade a avaliar", desc: "Exemplo conceitual: automatizar uma tarefa repetitiva após entender suas regras. Não é um projeto de cliente." },
];
