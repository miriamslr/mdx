import { siteConfig } from "@/lib/site.config";

interface ArticleJsonLdProps {
  title: string;
  description: string;
  date: string;
  author?: string;
  slug: string;
  tags?: string[];
}

export const ArticleJsonLd = ({
  title,
  description,
  date,
  author,
  slug,
  tags,
}: ArticleJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: `${siteConfig.domain}/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author || siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/logo.png`,
      },
    },
    keywords: tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface WebsiteJsonLdProps {
  url?: string;
}

export const WebsiteJsonLd = ({ url }: WebsiteJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: url || siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface OrganizationJsonLdProps {
  logo?: string;
}

export const OrganizationJsonLd = ({ logo }: OrganizationJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    logo: logo || `${siteConfig.domain}/logo.png`,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
