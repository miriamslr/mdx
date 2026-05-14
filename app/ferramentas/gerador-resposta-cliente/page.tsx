"use client";

import { Section, Container } from "@/components/ds";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Sparkles, Copy, Check, MessageSquare } from "lucide-react";
import { CTABox } from "@/components/monetization/CTABox";

const tones = [
  { value: "profissional", label: "Profissional", emoji: "💼" },
  { value: "amigavel", label: "Amigável", emoji: "😊" },
  { value: "direto", label: "Direto", emoji: "⚡" },
  { value: "acolhedor", label: "Acolhedor", emoji: "🤗" },
];

const mockResponses: Record<string, string[]> = {
  profissional: [
    "Agradeço seu contato. Analisarei sua solicitação e retornarei em até 24 horas úteis com uma proposta detalhada.",
    "Confirmo o recebimento da sua mensagem. Estamos processando sua solicitação e entraremos em contato em breve.",
  ],
  amigavel: [
    "Oi! Que bom ouvir de você! 😊 Vou dar uma olhada no que você precisa e já volto com uma resposta super bacana!",
    "E aí! Tudo bem? Adorei sua mensagem! Vou ajudar você com isso, pode deixar!",
  ],
  direto: [
    "Recebido. Vou analisar e responder em até 24h. Obrigado.",
    "Ok. Estou verificando sua solicitação. Retorno em breve.",
  ],
  acolhedor: [
    "Obrigada por entrar em contato! Sua mensagem é muito importante para mim. Vou cuidar disso com muito carinho e volto já.",
    "Que delícia receber sua mensagem! 💕 Fico feliz em poder ajudar. Vou me dedicar a encontrar a melhor solução para você.",
  ],
};

export default function GeradorRespostaClientePage() {
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("profissional");
  const [response, setResponse] = useState("");
  const [copied, setCopied] = useState(false);

  const generateResponse = () => {
    if (!message.trim()) return;

    const responses = mockResponses[tone];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];

    const contextualizedResponse = `${randomResponse}

---
Baseado na mensagem: "${message.slice(0, 100)}${message.length > 100 ? "..." : ""}"`;

    setResponse(contextualizedResponse);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Section className="bg-gradient-to-b from-muted/50 to-background border-b">
        <Container className="py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MessageSquare className="w-4 h-4" />
              <span>Ferramenta gratuita</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Gerador de resposta para cliente
            </h1>
            <p className="text-muted-foreground text-lg">
              Cole a mensagem do seu cliente, escolha o tom desejado e gere uma
              resposta profissional em segundos.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Mensagem do cliente
              </label>
              <Textarea
                placeholder="Cole aqui a mensagem que o cliente enviou..."
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Tom da resposta
              </label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha um tom" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      <span className="mr-2">{t.emoji}</span>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={generateResponse}
              disabled={!message.trim()}
              className="w-full gap-2"
              size="lg"
            >
              <Sparkles className="w-4 h-4" />
              Gerar resposta
            </Button>

            {response && (
              <div className="space-y-3 p-4 rounded-lg bg-muted border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Resposta gerada:
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar
                      </>
                    )}
                  </Button>
                </div>
                <div className="p-4 bg-background rounded border text-sm whitespace-pre-wrap">
                  {response}
                </div>
                <p className="text-xs text-muted-foreground">
                  💡 Esta é uma resposta de demonstração. Em uma versão completa,
                  a resposta seria gerada por IA baseada no contexto da
                  mensagem.
                </p>
              </div>
            )}
          </div>

          <CTABox
            title="Quer respostas ainda melhores?"
            description="Aprenda a usar IA avançada para atendimento ao cliente com nosso guia completo."
            buttonText="Ver guia"
            href="/blog/ia-para-responder-clientes-no-whatsapp"
            variant="subtle"
            className="mt-8"
          />
        </Container>
      </Section>
    </div>
  );
}
