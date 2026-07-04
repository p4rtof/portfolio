const TAG_PALETTE = [
  { bg: "bg-white hover:text-white hover:bg-violet-700 border-2 border-violet-700", text: "text-violet-700", solid: "bg-violet-600" },
  { bg: "bg-white hover:text-white hover:bg-cyan-700 border-2 border-cyan-700", text: "text-cyan-700", solid: "bg-cyan-600" },
  { bg: "bg-white hover:text-white hover:bg-rose-700 border-2 border-rose-700", text: "text-rose-700", solid: "bg-rose-600" },
  { bg: "bg-white hover:text-white hover:bg-amber-700 border-2 border-amber-700", text: "text-amber-700", solid: "bg-amber-600" },
  { bg: "bg-white hover:text-white hover:bg-emerald-700 border-2 border-emerald-700", text: "text-emerald-700", solid: "bg-emerald-600" },
  { bg: "bg-white hover:text-white hover:bg-fuchsia-700 border-2 border-fuchsia-700", text: "text-fuchsia-700", solid: "bg-fuchsia-600" },
  { bg: "bg-white hover:text-white hover:bg-sky-700 border-2 border-sky-700", text: "text-sky-700", solid: "bg-sky-600" },
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