export const siteConfig = {
  name: "MicroSEO Starter",
  domain: "http://localhost:3000",
  description:
    "Base em Next.js para criar micro sites de conteúdo, ferramentas, comparativos e SEO programático.",
  niche: "SEO programático",
  author: "Miriam Rodrigues",
  language: "pt-BR",
  theme: {
    primaryColor: "#111827",
    accentColor: "#2563EB",
  },
  monetization: {
    affiliate: true,
    leadCapture: true,
    digitalProduct: false,
  },
  navigation: {
    main: [
      { label: "Início", href: "/" },
      { label: "Artigos", href: "/blog" },
      { label: "Ferramentas", href: "/ferramentas" },
      { label: "Comparativos", href: "/comparativos" },
    ],
  },
  categories: [
    {
      name: "Inteligência Artificial",
      slug: "ia",
      description: "Guias práticos sobre IA para pequenos negócios",
      icon: "Brain",
    },
    {
      name: "Produtividade",
      slug: "produtividade",
      description: "Ferramentas e métodos para fazer mais em menos tempo",
      icon: "Zap",
    },
    {
      name: "Marketing Digital",
      slug: "marketing",
      description: "Estratégias simples de marketing para crescer online",
      icon: "TrendingUp",
    },
    {
      name: "Ferramentas",
      slug: "ferramentas",
      description: "Recursos gratuitos para aplicar no dia a dia",
      icon: "Wrench",
    },
  ],
  leadCapture: {
    title: "Receba guias práticos no seu e-mail",
    description:
      "Dicas semanalmente sobre como usar IA e ferramentas digitais no seu negócio. Sem spam.",
    buttonText: "Quero receber",
    placeholder: "seu@email.com",
    successMessage: "Você foi inscrito com sucesso!",
  },
  affiliate: {
    disclosure:
      "Alguns links desta página podem ser links de afiliado. Isso significa que podemos receber uma comissão caso você compre por meio deles, sem custo adicional para você.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
