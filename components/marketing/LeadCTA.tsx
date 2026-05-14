"use client";

import { Section, Container } from "@/components/ds";
import { siteConfig } from "@/lib/site.config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export const LeadCTA = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <Section id="lead-capture" className="bg-primary text-primary-foreground">
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight">
            {siteConfig.leadCapture.title}
          </h2>

          <p className="text-lg text-primary-foreground/80">
            {siteConfig.leadCapture.description}
          </p>

          {submitted ? (
            <div className="p-4 rounded-lg bg-primary-foreground/10">
              <p className="font-medium">
                {siteConfig.leadCapture.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={siteConfig.leadCapture.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground text-primary placeholder:text-primary/50"
              />
              <Button
                type="submit"
                variant="secondary"
                className="gap-2 whitespace-nowrap"
              >
                {siteConfig.leadCapture.buttonText}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}

          <p className="text-sm text-primary-foreground/60">
            Não enviamos spam. Cancele quando quiser.
          </p>
        </div>
      </Container>
    </Section>
  );
};
