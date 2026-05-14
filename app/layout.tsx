import { ThemeProvider } from "@/components/theme/theme-provider";
import { Layout, Main } from "@/components/ds";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/site/footer";
import { WebsiteJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site.config";
import { createMetadata } from "@/lib/seo";

import type { Metadata } from "next";

import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  ...createMetadata(),
  title: {
    default: `${siteConfig.name} - Micro sites para SEO e monetização`,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout lang={siteConfig.language}>
      <WebsiteJsonLd />
      <OrganizationJsonLd />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-screen flex flex-col",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main className="flex-1">{children}</Main>
          <Footer />
          <div className="text-xs text-muted-foreground border-t py-4 px-6 text-center">
            {siteConfig.affiliate.disclosure}
          </div>
          <div className="fixed bottom-6 right-6">
            <ThemeToggle />
          </div>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </Layout>
  );
}
