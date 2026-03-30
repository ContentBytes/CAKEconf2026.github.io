// src/content/site.ts
export type SiteNavItem = { 
    label: string;
    href: string 
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;            
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "CAKE conf",
  tagline: "Uniting content enthusiasts",
  description:
    "A space for content enthusiasts to share, learn, explore.",
  url: import.meta.env.SITE_URL ?? "https://contentbytes.pl",
  locale: "en",
  author: {
    name: "Content Bytes",
    email: "hello@contentbytes.pl",
    url: "https://contentbytes.pl",
    socials: {
      linkedin: "https://www.linkedin.com/company/content-bytes"
    }
  },
  nav: [
    { label: "Home", href: "/" },
/*     { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }, */
  ],
  seo: {
    ogImage: "/logo-with-date.svg",
    robots: "index,follow",
    themeColor: "#fbfbf9"
  }
};
