export function inr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function shortWeight(label: string | null | undefined) {
  if (!label) return "";
  const m = label.match(/(\d+\s*(?:kg|Kg|g))/i);
  return m ? m[1].replace(/\s+/g, "") : label;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}
