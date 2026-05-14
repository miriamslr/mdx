import { Section, Container, Prose } from "@/components/ds";
import { siteConfig } from "@/lib/site.config";
import { AffiliateDisclosure } from "@/components/monetization/AffiliateDisclosure";
import { CTABox } from "@/components/monetization/CTABox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, Minus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melhores ferramentas de IA para pequenos negócios - Comparativo 2025",
  description:
    "Compare as principais ferramentas de IA para pequenos negócios. Análise completa de preços, funcionalidades e custo-benefício.",
};

const tools = [
  {
    name: "ChatGPT Plus",
    price: "R$ 103/mês",
    features: {
      textGeneration: true,
      imageGeneration: false,
      codeAssistance: true,
      customAssistants: true,
      apiAccess: false,
    },
    pros: ["Respostas rápidas", "Ótimo para texto", "Fácil de usar"],
    cons: ["Sem imagens nativas", "Preço em dólar"],
    affiliateUrl: "#",
  },
  {
    name: "Claude Pro",
    price: "R$ 103/mês",
    features: {
      textGeneration: true,
      imageGeneration: false,
      codeAssistance: true,
      customAssistants: false,
      apiAccess: false,
    },
    pros: ["Textos mais longos", "Análise profunda", "Ética robusta"],
    cons: ["Sem integrações", "Limite de mensagens"],
    affiliateUrl: "#",
  },
  {
    name: "Gemini Advanced",
    price: "R$ 96/mês",
    features: {
      textGeneration: true,
      imageGeneration: true,
      codeAssistance: true,
      customAssistants: true,
      apiAccess: true,
    },
    pros: ["Inclui Google One", "Gera imagens", "Integração Google"],
    cons: ["Interface confusa", "Menos popular"],
    affiliateUrl: "#",
  },
  {
    name: "Copilot Pro",
    price: "R$ 103/mês",
    features: {
      textGeneration: true,
      imageGeneration: true,
      codeAssistance: true,
      customAssistants: false,
      apiAccess: false,
    },
    pros: ["Integração Office", "Designer (imagens)", "Bing integrado"],
    cons: ["Requer Microsoft 365", "Limitado em criatividade"],
    affiliateUrl: "#",
  },
];

const FeatureIcon = ({ value }: { value: boolean | null }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400" />;
  }
  return <Minus className="w-5 h-5 text-gray-400" />;
};

export default function ComparativoFerramentasIAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Section className="bg-gradient-to-b from-muted/50 to-background border-b">
        <Container className="py-12">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Melhores ferramentas de IA para pequenos negócios
              </h1>
              <p className="text-xl text-muted-foreground">
                Comparativo completo de 2025: ChatGPT, Claude, Gemini e Copilot.
                Descubra qual se encaixa melhor no seu bolso e necessidades.
              </p>
              <AffiliateDisclosure variant="inline" className="pt-2" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-12">
            <Prose>
              <h2>Tabela comparativa</h2>
            </Prose>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[140px]">Recurso</TableHead>
                    {tools.map((tool) => (
                      <TableHead key={tool.name} className="text-center">
                        <div className="font-semibold">{tool.name}</div>
                        <div className="text-sm font-normal text-muted-foreground">
                          {tool.price}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Geração de texto
                    </TableCell>
                    {tools.map((tool) => (
                      <TableCell key={tool.name} className="text-center">
                        <FeatureIcon value={tool.features.textGeneration} />
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Geração de imagens
                    </TableCell>
                    {tools.map((tool) => (
                      <TableCell key={tool.name} className="text-center">
                        <FeatureIcon value={tool.features.imageGeneration} />
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Assistente de código
                    </TableCell>
                    {tools.map((tool) => (
                      <TableCell key={tool.name} className="text-center">
                        <FeatureIcon value={tool.features.codeAssistance} />
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Assistentes personalizados
                    </TableCell>
                    {tools.map((tool) => (
                      <TableCell key={tool.name} className="text-center">
                        <FeatureIcon value={tool.features.customAssistants} />
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Acesso à API
                    </TableCell>
                    {tools.map((tool) => (
                      <TableCell key={tool.name} className="text-center">
                        <FeatureIcon value={tool.features.apiAccess} />
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <Prose>
              <h2>Análise detalhada</h2>
            </Prose>

            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-6 rounded-xl border bg-card space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{tool.name}</h3>
                    <span className="text-sm font-medium text-muted-foreground">
                      {tool.price}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-green-600 mb-1">
                        ✅ Pontos fortes
                      </p>
                      <ul className="text-sm space-y-1">
                        {tool.pros.map((pro) => (
                          <li key={pro} className="text-muted-foreground">
                            • {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-red-500 mb-1">
                        ❌ Limitações
                      </p>
                      <ul className="text-sm space-y-1">
                        {tool.cons.map((con) => (
                          <li key={con} className="text-muted-foreground">
                            • {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CTABox
              title="Ainda não decidiu?"
              description="Leia nosso guia completo sobre como escolher a melhor IA para o seu negócio, com testes práticos e exemplos reais."
              buttonText="Ler guia completo"
              href="/blog/melhores-ferramentas-de-ia-para-pequenos-negocios"
              variant="highlight"
            />

            <Prose>
              <h2>Qual escolher?</h2>
              <p>
                <strong>ChatGPT Plus</strong> é a melhor escolha para quem quer
                uma IA versátil e fácil de usar, com boa capacidade de criar
                GPTs personalizados para tarefas específicas.
              </p>
              <p>
                <strong>Claude Pro</strong> se destaca quando você precisa de
                análises mais profundas e textos mais longos. É excelente para
                trabalhos que exigem raciocínio complexo.
              </p>
              <p>
                <strong>Gemini Advanced</strong> oferece o melhor custo-benefício
                se você já usa serviços Google, pois inclui 2TB no Google One e
                integração com Gmail, Docs e outros apps.
              </p>
              <p>
                <strong>Copilot Pro</strong> é ideal para quem trabalha muito
                com Microsoft Office e quer IA integrada diretamente no Word,
                Excel e PowerPoint.
              </p>
            </Prose>

            <AffiliateDisclosure />
          </div>
        </Container>
      </Section>
    </div>
  );
}
