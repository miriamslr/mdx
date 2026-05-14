# MDX Starter

A modern, type-safe MDX content site built with Next.js 16, Velite, and Tailwind CSS. Perfect for blogs, documentation sites, and content-driven projects that need the power of React components within Markdown.

## Overview

This starter template provides a complete foundation for building content-rich websites with MDX. It uses Velite for type-safe content management, ensuring your frontmatter and content structure are validated at build time. With Next.js App Router and React Server Components, you get optimal performance and SEO out of the box.

### Key Features

- **Next.js 16 App Router** - Built on the latest Next.js with React Server Components for optimal performance
- **Type-Safe Content** - [Velite](https://velite.js.org/) validates your MDX frontmatter and generates TypeScript types
- **MDX Support** - Write Markdown with embedded React components
- **Syntax Highlighting** - Beautiful code blocks with copy-to-clipboard functionality powered by Shiki
- **Dark Mode** - Automatic dark mode with system preference detection via next-themes
- **Modern UI** - Pre-configured [Shadcn/UI](https://ui.shadcn.com/) components with Tailwind CSS
- **SEO Optimized** - Automatic sitemap and robots.txt generation
- **TypeScript** - Full type safety across your entire project
- **File-Based Routing** - Content folder structure maps directly to URL routes

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm

## Setup

### 1. Clone or Use This Template

```bash
# Clone the repository
git clone https://github.com/brijr/mdx.git my-mdx-site
cd my-mdx-site

# Or use as a GitHub template
# Click "Use this template" on GitHub
```

### 2. Install Dependencies

```bash
pnpm install
```

This will install all required dependencies including Next.js, Velite, Tailwind CSS, and UI components.

### 3. Start Development Server

```bash
pnpm dev
```

This command does two things:
- Watches your `content/` directory for changes and rebuilds with Velite
- Starts the Next.js development server with Turbopack

Your site will be available at [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
pnpm build
```

This processes your MDX content with Velite and builds an optimized production bundle.

### 5. Start Production Server

```bash
pnpm start
```

Serves your production build locally.

## Project Structure

```
mdx-starter/
├── app/                      # Next.js app directory
│   ├── [...slug]/           # Dynamic route for all MDX pages
│   ├── api/                 # API routes (e.g., bookmark metadata)
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Homepage
├── components/
│   ├── markdown/            # MDX components (code blocks, media, etc.)
│   ├── posts/               # Post list and item components
│   ├── theme/               # Theme provider and toggle
│   └── ui/                  # Shadcn UI components
├── content/                 # Your MDX content goes here
│   └── **/*.mdx            # All MDX files are auto-discovered
├── lib/                     # Utility functions
├── public/                  # Static assets
├── velite.config.ts         # Velite configuration
├── next.config.mjs          # Next.js configuration
└── tailwind.config.ts       # Tailwind CSS configuration
```

## Writing Content

### Creating MDX Files

Create MDX files anywhere in the `content/` directory. The folder structure automatically determines your URLs:

```
content/
├── about.mdx                    → /about
├── blog/
│   ├── getting-started.mdx     → /blog/getting-started
│   └── advanced-tips.mdx       → /blog/advanced-tips
└── docs/
    ├── installation.mdx         → /docs/installation
    └── configuration.mdx        → /docs/configuration
```

### Example MDX File

```mdx
---
title: "Getting Started with MDX"
description: "Learn how to create your first MDX post"
date: "2025-01-09"
author: "Your Name"
tags: ["nextjs", "mdx", "tutorial"]
published: true
---

# Getting Started

This is your MDX content. You can use **markdown** syntax and React components!

## Code Example

\`\`\`typescript
const greeting = "Hello, MDX!";
console.log(greeting);
\`\`\`

Mix in React components for interactive content.
```

### Frontmatter Schema

All frontmatter fields are validated by Velite. Here's what you can use:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Page title (max 99 characters) |
| `description` | string | ❌ | SEO description (max 999 characters) |
| `date` | ISO date | ✅ | Publication date (e.g., "2025-01-09") |
| `author` | string | ❌ | Author name |
| `tags` | string[] | ❌ | Array of tags for categorization |
| `published` | boolean | ❌ | Show/hide post (default: `true`) |

### Using React Components in MDX

You can import and use React components directly in your MDX files:

```mdx
import { Button } from '@/components/ui/button'

# My Page

Click this button:

<Button>Click Me</Button>
```

## Development Workflow

### Adding New Content

1. Create a new `.mdx` file in the `content/` directory
2. Add required frontmatter (title and date)
3. Write your content using Markdown and React components
4. The dev server will automatically reload with your changes

### Adding UI Components

This starter includes Shadcn/UI. Add new components with:

```bash
npx shadcn@latest add [component-name]
```

### Modifying the Schema

Edit `velite.config.ts` to customize your content schema:

```typescript
const posts = defineCollection({
  name: "Post",
  pattern: "**/*.mdx",
  schema: s.object({
    // Add your custom fields here
    customField: s.string().optional(),
  })
});
```

## Customization

### Styling

- **Tailwind Config**: Edit `tailwind.config.ts`
- **Global Styles**: Modify `app/globals.css`
- **Theme Colors**: Update CSS variables in `app/globals.css`

### Site Metadata

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata = {
  title: "Your Site Name",
  description: "Your site description",
  // ... other metadata
}
```

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx)

1. Click the button above or visit [vercel.com/new](https://vercel.com/new)
2. Import your repository
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **Netlify**: Works with Next.js runtime
- **Railway**: Easy Node.js deployment
- **Self-hosted**: Use `pnpm build` and `pnpm start`

### Environment Variables

No environment variables are required for basic functionality. Add your own as needed in `.env.local`:

```bash
# Example
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Built With

- [Next.js 16](https://nextjs.org/) - React framework
- [Velite](https://velite.js.org/) - Type-safe content toolkit
- [MDX](https://mdxjs.com/) - Markdown + JSX
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn/UI](https://ui.shadcn.com/) - Re-usable component library
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [Shiki](https://shiki.style/) - Syntax highlighting
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Scripts

```bash
pnpm dev      # Start development server with Velite watch mode
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Como usar este starter para criar um micro site SEO

Este projeto mantém a base do `brijr/mdx` com Next.js, Velite, MDX, Tailwind e shadcn/ui, mas adiciona uma estrutura inicial para micro sites de conteúdo, SEO programático, comparativos, ferramentas simples e captura de leads.

### 1. Alterar a configuração central do site

Edite `lib/site.config.ts` para personalizar:

- **Nome e domínio**: `name`, `domain`
- **Descrição padrão**: `description`
- **Nicho**: `niche`
- **Autor e idioma**: `author`, `language`
- **Monetização**: `affiliate`, `leadCapture`, `digitalProduct`
- **Categorias e navegação**: `categories`, `navigation`

O SEO global usa essa configuração por meio de `lib/seo.ts`.

### 2. Criar um novo post MDX

Crie um arquivo em `content/blog/`, por exemplo:

```mdx
---
title: "Como escolher ferramentas de IA para pequenos negócios"
description: "Guia prático para comparar ferramentas de IA considerando preço, rotina e objetivos."
date: "2025-05-20"
author: "Miriam Rodrigues"
tags: ["IA", "ferramentas", "pequenos negócios"]
published: true
---

# Como escolher ferramentas de IA para pequenos negócios

Escreva o conteúdo com headings claros, exemplos úteis e links internos.
```

Campos aceitos pelo Velite:

- `title`
- `description`
- `date`
- `author`
- `tags`
- `published`

### 3. Usar CTABox em MDX

`CTABox` está registrado em `components/markdown/mdx-content.tsx`, então pode ser usado diretamente:

```mdx
<CTABox
  title="Quer aplicar isso no seu negócio?"
  description="Baixe um checklist gratuito para começar com mais clareza."
  buttonText="Baixar checklist"
  href="#lead-capture"
  variant="highlight"
/>
```

Também estão disponíveis para MDX:

- `AffiliateDisclosure`
- `ProductCard`
- `ComparisonTable`

### 4. Criar uma nova página programática

As páginas programáticas ficam em `app/guias/[slug]/page.tsx` e são geradas a partir de `data/pseo/ia-use-cases.ts`.

Para adicionar uma nova página, inclua um item em `iaUseCases`:

```ts
{
  slug: "ia-para-contadores",
  title: "IA para contadores: produtividade e atendimento",
  description: "Como escritórios contábeis podem usar IA em tarefas repetitivas.",
  audience: "contadores e escritórios contábeis",
  painPoints: ["Muitas tarefas repetitivas", "Dúvidas frequentes de clientes"],
  benefits: ["Respostas mais rápidas", "Processos mais padronizados"],
  tools: ["ChatGPT", "Claude", "Gemini"],
  cta: {
    title: "Quer automatizar respostas?",
    description: "Teste o gerador de resposta para clientes.",
    buttonText: "Testar ferramenta",
    href: "/ferramentas/gerador-resposta-cliente",
  },
}
```

Depois disso, a página estará disponível em `/guias/ia-para-contadores` e entrará automaticamente no sitemap.

### 5. Estrutura editorial disponível

- `/blog`: lista todos os posts publicados
- `/tags`: lista todas as tags
- `/tags/[tag]`: lista posts por tag
- páginas MDX: renderizadas por `app/[...slug]/page.tsx`
- posts relacionados: calculados por tags
- leitura estimada: calculada a partir do conteúdo MDX
- navegação anterior/próximo: baseada na ordem cronológica dos posts

### 6. SEO técnico

O arquivo `lib/seo.ts` centraliza:

- `createMetadata()`
- `createCanonicalUrl()`
- `createOpenGraph()`
- `createArticleJsonLd()`
- `createBreadcrumbJsonLd()`

O projeto usa os padrões nativos do Next.js:

- `app/sitemap.ts`
- `app/robots.ts`
- `generateMetadata()` em rotas dinâmicas

### 7. Rodar o projeto

```bash
pnpm dev
```

### 8. Validar antes de publicar

```bash
pnpm lint
pnpm build
```

Observação: em versões recentes do Next.js, `next lint` pode não funcionar como em versões anteriores. Se isso acontecer, valide principalmente com:

```bash
pnpm build
```

### 9. Próximos passos recomendados

- **Domínio real**: Atualizar `siteConfig.domain` ou configurar `NEXT_PUBLIC_SITE_URL`
- **Lead capture real**: Integrar o formulário com uma ferramenta de e-mail
- **Afiliados**: Substituir `href="#"` por links reais e manter disclosure visível
- **Conteúdo escalável**: Expandir `data/pseo/ia-use-cases.ts` com pesquisa de palavras-chave
- **Analytics**: Adicionar ferramenta de métricas antes de escalar produção
- **Auditoria SEO**: Validar sitemap, canonical, metadata e JSON-LD após deploy

## License

MIT License - see [LICENSE](LICENSE) for details

## Credits

Made by [Bridger Tower](https://bridgertower.com)

## Support

Found an issue or have a question? Please [open an issue](https://github.com/brijr/mdx/issues) on GitHub.
