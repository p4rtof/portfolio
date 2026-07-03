const TAG_PALETTE = [
  { bg: "bg-violet-100", text: "text-violet-700", solid: "bg-violet-600" },
  { bg: "bg-cyan-100", text: "text-cyan-700", solid: "bg-cyan-600" },
  { bg: "bg-rose-100", text: "text-rose-700", solid: "bg-rose-600" },
  { bg: "bg-amber-100", text: "text-amber-700", solid: "bg-amber-600" },
  { bg: "bg-emerald-100", text: "text-emerald-700", solid: "bg-emerald-600" },
  { bg: "bg-fuchsia-100", text: "text-fuchsia-700", solid: "bg-fuchsia-600" },
  { bg: "bg-sky-100", text: "text-sky-700", solid: "bg-sky-600" },
];

/** Tag string yang sama akan selalu menghasilkan warna yang sama. */
export function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % TAG_PALETTE.length;
  return TAG_PALETTE[index];
}