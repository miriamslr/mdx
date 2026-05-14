export interface IAUseCase {
  slug: string;
  title: string;
  description: string;
  audience: string;
  painPoints: string[];
  benefits: string[];
  tools: string[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
  };
}

export const iaUseCases: IAUseCase[] = [
  {
    slug: "ia-para-clinicas",
    title: "IA para clínicas: atendimento, agenda e relacionamento com pacientes",
    description:
      "Veja como clínicas podem usar IA para responder pacientes, organizar agendamentos e melhorar a comunicação sem perder o cuidado humano.",
    audience: "clínicas médicas, odontológicas, estéticas e profissionais de saúde",
    painPoints: [
      "Muitas mensagens repetidas sobre horários, preços e preparo para consultas",
      "Equipe sobrecarregada com tarefas administrativas",
      "Dificuldade para manter comunicação rápida e padronizada",
    ],
    benefits: [
      "Respostas mais rápidas para dúvidas frequentes",
      "Scripts de atendimento mais claros e humanizados",
      "Redução de retrabalho em confirmações e lembretes",
    ],
    tools: ["ChatGPT", "Claude", "Google Gemini", "WhatsApp Business"],
    cta: {
      title: "Quer melhorar o atendimento da sua clínica?",
      description:
        "Use a ferramenta gratuita para criar respostas profissionais para pacientes em poucos segundos.",
      buttonText: "Gerar resposta para cliente",
      href: "/ferramentas/gerador-resposta-cliente",
    },
  },
  {
    slug: "ia-para-advogados",
    title: "IA para advogados: produtividade, pesquisa e comunicação com clientes",
    description:
      "Entenda como escritórios de advocacia podem usar IA para organizar informações, revisar textos e melhorar a comunicação com clientes.",
    audience: "advogados autônomos, pequenos escritórios e equipes jurídicas enxutas",
    painPoints: [
      "Grande volume de textos, documentos e mensagens para revisar",
      "Tempo perdido resumindo casos e organizando informações",
      "Comunicação técnica demais para clientes leigos",
    ],
    benefits: [
      "Resumos rápidos de documentos e conversas",
      "Textos mais claros para explicar próximos passos ao cliente",
      "Apoio na organização de argumentos e checklists internos",
    ],
    tools: ["Claude", "ChatGPT", "Notion AI", "Google Drive"],
    cta: {
      title: "Transforme mensagens complexas em respostas claras",
      description:
        "Teste uma resposta simulada para clientes e adapte ao tom do seu escritório.",
      buttonText: "Testar gerador",
      href: "/ferramentas/gerador-resposta-cliente",
    },
  },
  {
    slug: "ia-para-lojas",
    title: "IA para lojas: vendas, atendimento e conteúdo para redes sociais",
    description:
      "Aprenda como lojas físicas e online podem usar IA para vender mais, responder clientes e criar conteúdo com consistência.",
    audience: "lojas locais, e-commerces pequenos e empreendedores de varejo",
    painPoints: [
      "Perguntas repetidas sobre preço, disponibilidade e entrega",
      "Dificuldade para criar posts frequentes nas redes sociais",
      "Atendimento lento em horários de pico",
    ],
    benefits: [
      "Descrições de produtos mais persuasivas",
      "Respostas rápidas para dúvidas comuns",
      "Ideias de campanhas, ofertas e posts sazonais",
    ],
    tools: ["ChatGPT", "Canva", "Gemini", "WhatsApp Business"],
    cta: {
      title: "Crie respostas melhores para vender mais",
      description:
        "Gere uma resposta pronta para clientes que perguntam preço, entrega ou disponibilidade.",
      buttonText: "Gerar resposta",
      href: "/ferramentas/gerador-resposta-cliente",
    },
  },
  {
    slug: "ia-para-social-media",
    title: "IA para social media: pautas, legendas e calendário de conteúdo",
    description:
      "Veja como profissionais de social media podem usar IA para acelerar pesquisa, criação de pautas, legendas e planejamento editorial.",
    audience: "social medias, agências pequenas e freelancers de conteúdo",
    painPoints: [
      "Bloqueio criativo para criar pautas novas toda semana",
      "Necessidade de adaptar conteúdos para vários clientes",
      "Tempo alto gasto com legendas, títulos e variações",
    ],
    benefits: [
      "Geração rápida de ideias e calendários editoriais",
      "Variações de tom para marcas diferentes",
      "Reaproveitamento inteligente de conteúdos longos",
    ],
    tools: ["ChatGPT", "Claude", "Canva", "Notion"],
    cta: {
      title: "Organize seu conteúdo com mais velocidade",
      description:
        "Baixe prompts e modelos para transformar ideias em calendário editorial.",
      buttonText: "Receber modelos",
      href: "#lead-capture",
    },
  },
  {
    slug: "ia-para-professores",
    title: "IA para professores: planejamento, atividades e feedback personalizado",
    description:
      "Descubra formas práticas de usar IA para planejar aulas, criar atividades e oferecer feedback mais claro aos alunos.",
    audience: "professores, coordenadores pedagógicos e criadores de cursos",
    painPoints: [
      "Pouco tempo para planejar aulas e atividades variadas",
      "Dificuldade para personalizar explicações para diferentes níveis",
      "Carga alta de correção e feedback",
    ],
    benefits: [
      "Planos de aula estruturados em minutos",
      "Atividades adaptadas por faixa etária e nível",
      "Feedbacks mais claros e objetivos para alunos",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Google Docs"],
    cta: {
      title: "Leve IA para sua rotina docente",
      description:
        "Use guias práticos para transformar planejamento e comunicação sem complicar sua rotina.",
      buttonText: "Ver artigos",
      href: "/blog",
    },
  },
];

export function getIAUseCaseBySlug(slug: string) {
  return iaUseCases.find((item) => item.slug === slug);
}
