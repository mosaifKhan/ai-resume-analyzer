// Utility formatting helpers
// Converts a byte size into a human-readable string in KB, MB, or GB.
// Example: 1536 -> "1.5 MB" (note: using 1024-based units)

export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  let value: number;
  let unit: "KB" | "MB" | "GB";

  if (bytes >= GB) {
    value = bytes / GB;
    unit = "GB";
  } else if (bytes >= MB) {
    value = bytes / MB;
    unit = "MB";
  } else {
    value = bytes / KB;
    unit = "KB";
  }

  // Choose decimal precision for readability
  // <10 -> 2 decimals, <100 -> 1 decimal, otherwise integer
  let formatted: string;
  if (value < 10) formatted = value.toFixed(2);
  else if (value < 100) formatted = value.toFixed(1);
  else formatted = Math.round(value).toString();

  // Trim trailing ".00" or ".0"
  formatted = formatted.replace(/\.00?$/, "");

  return `${formatted} ${unit}`;
}
