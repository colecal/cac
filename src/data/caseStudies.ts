export type CaseStudy = {
  title: string;
  id: string;
  tldr: string;
  impact?: string[];
  notes?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Operational Re-vetting Pipeline",
    id: "revetting-pipeline",
    tldr:
      "Built a prioritization pipeline that gave previously written-off claims a second chance by surfacing them for re-review—supporting parallel analyst throughput with guardrails throughout.",
    impact: [
      "Directly enabled 1M+ in recovered revenue",
      "Expanded active pipeline capacity across the analyst team",
      "Human-in-the-loop design ensured quality control at scale",
    ],
  },
  {
    title: "LLM Tribal Knowledge → Executable Recovery Playbooks",
    id: "llm-playbooks",
    tldr:
      "Led an LLM initiative to convert training material, SOPs, and analyst know-how into structured playbooks—improving consistency, accelerating onboarding, and informing a broader software overhaul.",
    impact: [
      "Reduced dependence on a small set of subject-matter experts",
      "Improved onboarding speed and analyst consistency across denial types",
      "Playbook outputs informed a similarity-based research feature in internal tooling",
    ],
    notes: "Specific recovery mechanics and internal SOP content are intentionally omitted.",
  },
  {
    title: "Agent SDK / LLM Pipeline Foundation",
    id: "agent-sdk",
    tldr:
      "Designed a reusable internal SDK to standardize tool routing, prompt patterns, structured outputs, and observability across multiple LLM projects—replacing one-off implementations with a shared foundation.",
    impact: [
      "Enabled faster, more consistent LLM project delivery across teams",
      "Reduced prompt and schema drift through shared conventions",
      "Built-in logging and tracing made failure patterns visible and actionable",
    ],
  },
  {
    title: "Analyst KPI / Scorecard Architecture",
    id: "kpi-scorecards",
    tldr:
      "Built KPI and scorecard infrastructure tracking throughput, quality, and recovery yield across the analyst org—supporting coaching, operational decisions, and incentive-safe metric design.",
    impact: [
      "Gave leadership real-time visibility into analyst and team performance",
      "Separated volume and quality metrics to prevent broken incentives",
      "Rolled up from individual analysts to org-level with daily/weekly refresh",
    ],
  },
];
