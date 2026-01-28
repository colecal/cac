export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  if (path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }
  if (path.startsWith("/")) {
    return `${base.replace(/\/$/, "")}${path}`;
  }
  return `${base}${path}`;
}
