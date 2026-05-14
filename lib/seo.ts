import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";

interface CreateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
}

export function createCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.domain).toString();
}

export function createOpenGraph(options: CreateMetadataOptions = {}) {
  const title = options.title || siteConfig.name;
  const description = options.description || siteConfig.description;
  const url = createCanonicalUrl(options.path);

  return {
    type: options.type || "website",
    locale: siteConfig.language,
    url,
    siteName: siteConfig.name,
    title,
    description,
    ...(options.image ? { images: [{ url: options.image, alt: title }] } : {}),
    ...(options.publishedTime ? { publishedTime: options.publishedTime } : {}),
    ...(options.modifiedTime ? { modifiedTime: options.modifiedTime } : {}),
    ...(options.authors ? { authors: options.authors } : {}),
    ...(options.tags ? { tags: options.tags } : {}),
  };
}

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const title = options.title || `${siteConfig.name} - Micro sites para SEO e monetização`;
  const description = options.description || siteConfig.description;
  const url = createCanonicalUrl(options.path);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.domain),
    alternates: {
      canonical: url,
    },
    authors: [{ name: options.authors?.[0] || siteConfig.author }],
    creator: siteConfig.author,
    keywords: options.tags || [
      "micro sites",
      "SEO programático",
      "conteúdo",
      "monetização",
      "afiliados",
      "captura de leads",
    ],
    openGraph: createOpenGraph(options),
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(options.image ? { images: [options.image] } : {}),
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function createArticleJsonLd(options: {
  title: string;
  description?: string;
  date: string;
  slug: string;
  author?: string;
  tags?: string[];
}) {
  const url = createCanonicalUrl(options.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description || siteConfig.description,
    url,
    datePublished: options.date,
    dateModified: options.date,
    author: {
      "@type": "Person",
      name: options.author || siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    keywords: options.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function createBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: createCanonicalUrl(item.path),
    })),
  };
}

export function createWebPageJsonLd(options: {
  title: string;
  description?: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.title,
    description: options.description || siteConfig.description,
    url: createCanonicalUrl(options.path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };
}
