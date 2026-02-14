export type CaseStudy = {
  title: string;
  id: string;
  tldr: string;
  impact?: string[];
  sections: { heading: string; bullets: string[] }[];
  notes?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "$1.7M Recovery Re-vetting Pipeline (Sanitized)",
    id: "revetting-pipeline",
    tldr:
      "Built a re-vetting pipeline that gave previously passed (‘dead’) claims a second chance by prioritizing them for re-review; supported parallel work across the analyst team and contributed to $1.7M+ invoiced revenue.",
    impact: ["$1.7M+ invoiced revenue impact (through recoveries enabled by the workflow)"],
    sections: [
      {
        heading: "Users",
        bullets: ["Recovery analysts", "Leadership (visibility into throughput and outcomes)"],
      },
      {
        heading: "Inputs (high-level)",
        bullets: ["Historically passed claims", "Claim metadata + operational signals used for prioritization (kept high-level)"],
      },
      {
        heading: "Outputs",
        bullets: ["Prioritized queue of candidates for re-review", "Supporting fields to speed up analyst review (sanitized)"],
      },
      {
        heading: "Scale",
        bullets: ["Designed for ongoing daily/weekly throughput", "Supports multiple analysts working in parallel"],
      },
      {
        heading: "Guardrails",
        bullets: [
          "Data validation checks",
          "Logic thresholds to prevent junk prioritization",
          "Human-in-the-loop: analyst review before action",
        ],
      },
    ],
  },
  {
    title: "LLM Tribal Knowledge → Executable Recovery Playbooks (Sanitized)",
    id: "llm-playbooks",
    tldr:
      "Led an LLM initiative to convert training material, SOPs, and analyst know‑how into structured recovery playbooks that improved consistency and onboarding, and informed an internal software overhaul.",
    sections: [
      {
        heading: "Users",
        bullets: ["Recovery analysts (primary)", "New hires (onboarding + consistency)", "Leadership (standardization/enablement)"],
      },
      {
        heading: "Inputs (sanitized)",
        bullets: [
          "Training material + SOP documents",
          "Transcribed call recordings (LLM transcription)",
          "Historical claim note timelines",
          "Optional time-based mapping between calls and claims (only when safe)",
        ],
      },
      {
        heading: "Outputs",
        bullets: [
          "Structured recovery playbooks (recommended actions, phone questions, scenario decision steps, escalation logic)",
          "Basis for software improvements enabling similarity-based research on active claims (high-level)",
        ],
      },
      {
        heading: "Scale",
        bullets: [
          "Built to cover a large portion of denial reasons",
          "Used repeatedly across claims daily to reduce dependence on a small set of experts",
        ],
      },
      {
        heading: "Guardrails",
        bullets: [
          "Constrained output formats (schemas/templates)",
          "Prompt rules to avoid hallucinated policy",
          "Iterative evaluation against known scenarios",
          "Human review + feedback loop",
        ],
      },
    ],
    notes:
      "Specific recovery mechanics, client details, and internal SOP content are intentionally omitted.",
  },
  {
    title: "Agent SDK / LLM Pipeline Foundation (Sanitized)",
    id: "agent-sdk",
    tldr:
      "Designed a reusable Agent SDK foundation to standardize tool routing, prompt patterns, modular workflows, structured outputs, and observability across multiple LLM projects.",
    sections: [
      {
        heading: "Users",
        bullets: [
          "Engineering/analytics teams building LLM workflows",
          "Stakeholders relying on consistent output quality",
        ],
      },
      {
        heading: "Inputs (sanitized)",
        bullets: [
          "Structured internal records (claims + metadata)",
          "Reference documents / training materials",
          "Tool outputs (retrieval, lookups, validations)",
        ],
      },
      {
        heading: "Outputs",
        bullets: [
          "Reusable agent framework (tool interfaces + routing)",
          "Shared prompt + schema conventions for deterministic structured outputs",
          "Workflow composition primitives (steps, retries, fallbacks)",
          "Logging/tracing hooks for observability",
        ],
      },
      {
        heading: "Scale",
        bullets: [
          "Built for multiple projects across teams (not one-offs)",
          "Designed to extend as new use cases appear",
        ],
      },
      {
        heading: "Guardrails",
        bullets: [
          "Deterministic schemas + validation",
          "Safe fallbacks + error handling",
          "Strict tool permissions",
          "Monitoring for drift/failure patterns",
        ],
      },
    ],
  },
  {
    title: "Analyst KPI / Scorecard Architecture (Sanitized)",
    id: "kpi-scorecards",
    tldr:
      "Built KPI/scorecard architecture tracking throughput, quality, recovery yield, and time-windowed trends across an analyst org—supporting coaching and operational decision-making.",
    sections: [
      {
        heading: "Users",
        bullets: ["Analysts", "BI/Ops leadership", "Managers (coaching + performance tracking)"],
      },
      {
        heading: "Inputs (sanitized)",
        bullets: [
          "Claims worked + recovery outcomes",
          "Throughput/time tracking signals",
          "Denial reason mix",
          "Aggregated payout/revenue results",
        ],
      },
      {
        heading: "Outputs",
        bullets: [
          "Scorecards: throughput, quality, recovery yield",
          "Time-windowed performance + trend views",
          "Rollups analyst → team → org",
        ],
      },
      {
        heading: "Scale",
        bullets: ["Full analyst org coverage", "Recurring refresh cadence (daily/weekly)"],
      },
      {
        heading: "Guardrails",
        bullets: [
          "Metric definitions locked + documented",
          "Time-window controls",
          "Anomaly checks",
          "Separate volume vs quality to avoid broken incentives",
        ],
      },
    ],
  },
];
