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
  {
    title: "Notebook: City Energy Patterns",
    slug: "city-energy-patterns",
    summary:
      "Exploratory notebook on demand forecasting with interactive charts and narrative analysis.",
    category: "Data Science",
    tags: ["Jupyter", "Forecasting", "Visualization"],
    featured: true,
    links: [],
    embed: {
      type: "iframe",
      src: "https://nbviewer.org/github/your-handle/notebooks/blob/main/energy.ipynb",
      title: "Energy notebook"
    }
  },
  {
    title: "Signal Garden",
    slug: "signal-garden",
    summary:
      "A small suite of visual experiments for signal processing and sonification.",
    category: "Creative Tech",
    tags: ["Audio", "DSP", "Web"],
    links: []
  }
];
