export type NewsItem = {
  title: string;
  url: string;
  source: string;
  date?: string; // ISO or human-readable
};

// This file is intended to be updated automatically (e.g., via a GitHub Action cron job)
// that pulls from RSS feeds and commits fresh links.
export const aiNews: NewsItem[] = [
  // Example:
  // { title: "...", url: "https://...", source: "...", date: "2026-02-14" },
];
