export type ProjectEmbed = {
  type: "iframe" | "image";
  src: string;
  title?: string;
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  status?: string;
  featured?: boolean;
  image?: string;
  links?: ProjectLink[];
  embed?: ProjectEmbed;
};

export const projects: Project[] = [
  {
    title: "Operational Knowledge Decision Engine",
    slug: "operational-knowledge-decision-engine",
    summary:
      "An applied LLM product that turns operational knowledge into a repeatable, auditable decision system with grounded retrieval, agentic reasoning, and structured outputs.",
    category: "Applied LLM Product",
    tags: ["LLM Systems", "Decision Support", "Retrieval"],
    status: "Product",
    featured: true,
    links: []
  },
  }
];
