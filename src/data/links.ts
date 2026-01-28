export type LinkItem = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export const links: LinkItem[] = [
  {
    title: "Interesting Paper Archive",
    description: "Long-form reads that shaped how I think about systems.",
    href: "https://example.com",
    tags: ["Reading", "Research"]
  },
  {
    title: "Tooling Notes",
    description: "Utilities and shortcuts I reach for every day.",
    href: "https://example.com",
    tags: ["Workflow", "Tools"]
  },
  {
    title: "Inspiration Board",
    description: "Visual references and UI experiments.",
    href: "https://example.com",
    tags: ["Design", "Visuals"]
  }
];
