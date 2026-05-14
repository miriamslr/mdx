"use client";

import * as runtime from "react/jsx-runtime";

import { Bookmark } from "@/components/markdown/bookmark";
import { YouTube } from "@/components/markdown/youtube";
import { Media } from "@/components/markdown/media";
import { Code } from "./code";
import { CTABox } from "@/components/monetization/CTABox";
import { AffiliateDisclosure } from "@/components/monetization/AffiliateDisclosure";
import { ProductCard } from "@/components/monetization/ProductCard";
import {
  ComparisonTable,
  type ComparisonItem,
} from "@/components/monetization/ComparisonTable";

import React from "react";
import type { StaticImageData } from "next/image";

const sharedComponents = {
  pre: ({ children }: { children: React.ReactNode }) =>
    children as React.ReactElement,
  code: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const isInlineCode = !className;
    if (isInlineCode) {
      return (
        <code className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {children}
        </code>
      );
    }

    const language = className?.replace("language-", "");
    return <Code language={language}>{children as string}</Code>;
  },
  p: ({ children }: { children: React.ReactNode }) => {
    if (
      React.Children.toArray(children).some((child) => {
        if (!React.isValidElement(child)) return false;

        const childType = child.type;
        const typeName =
          typeof childType === "string"
            ? childType
            : typeof childType === "function"
              ? childType.name
              : "";

        return /^(pre|div|table)$/.test(typeName);
      })
    ) {
      return <>{children}</>;
    }
    return <p className="leading-7 not-first:mt-6">{children}</p>;
  },
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  img: ({
    src,
    alt,
    className,
  }: {
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
  }) => {
    if (!src) return null;
    return <Media src={src} alt={alt} className={className} />;
  },
  YouTube: ({
    videoid,
    width,
    height,
    params,
    playlabel,
    className,
  }: {
    videoid: string;
    width?: number | string;
    height?: number;
    params?: string;
    playlabel?: string;
    className?: string;
  }) => {
    return (
      <YouTube
        videoid={videoid}
        width={width}
        height={height}
        params={params}
        playlabel={playlabel}
        className={className}
      />
    );
  },
  Bookmark: ({ url, className }: { url: string; className?: string }) => {
    return <Bookmark url={url} className={className} />;
  },
  Media: ({
    src,
    alt,
    className,
    fill,
  }: {
    src: string | StaticImageData;
    alt?: string;
    className?: string;
    fill?: boolean;
  }) => {
    return <Media src={src} alt={alt} className={className} fill={fill} />;
  },
  CTABox: ({
    title,
    description,
    buttonText,
    href,
    variant,
  }: {
    title?: string;
    description?: string;
    buttonText?: string;
    href?: string;
    variant?: "default" | "highlight" | "subtle";
  }) => {
    return (
      <CTABox
        title={title}
        description={description}
        buttonText={buttonText}
        href={href}
        variant={variant}
      />
    );
  },
  AffiliateDisclosure: ({
    variant,
  }: {
    variant?: "box" | "inline" | "footer";
  }) => {
    return <AffiliateDisclosure variant={variant} />;
  },
  ProductCard: ({
    name,
    description,
    priceLabel,
    href,
    badge,
    buttonText,
  }: {
    name: string;
    description: string;
    priceLabel?: string;
    href: string;
    badge?: string;
    buttonText?: string;
  }) => {
    return (
      <ProductCard
        name={name}
        description={description}
        priceLabel={priceLabel}
        href={href}
        badge={badge}
        buttonText={buttonText}
      />
    );
  },
  ComparisonTable: ({
    items,
    buttonText,
  }: {
    items: ComparisonItem[];
    buttonText?: string;
  }) => {
    return <ComparisonTable items={items} buttonText={buttonText} />;
  },
};

const getMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType<unknown>>;
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = getMDXComponent(code);

  return React.createElement(Component, {
    components: { ...sharedComponents, ...components },
  });
};
