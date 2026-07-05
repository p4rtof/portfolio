const TAG_PALETTE = [
  { bg: "bg-white hover:text-white hover:bg-violet-500 border-2 border-violet-500", text: "text-violet-500", solid: "bg-violet-400" },
  { bg: "bg-white hover:text-white hover:bg-cyan-500 border-2 border-cyan-500", text: "text-cyan-500", solid: "bg-cyan-400" },
  { bg: "bg-white hover:text-white hover:bg-rose-500 border-2 border-rose-500", text: "text-rose-500", solid: "bg-rose-400" },
  { bg: "bg-white hover:text-white hover:bg-amber-500 border-2 border-amber-500", text: "text-amber-500", solid: "bg-amber-400" },
  { bg: "bg-white hover:text-white hover:bg-emerald-500 border-2 border-emerald-500", text: "text-emerald-500", solid: "bg-emerald-400" },
  { bg: "bg-white hover:text-white hover:bg-fuchsia-500 border-2 border-fuchsia-500", text: "text-fuchsia-500", solid: "bg-fuchsia-400" },
  { bg: "bg-white hover:text-white hover:bg-sky-500 border-2 border-sky-500", text: "text-sky-500", solid: "bg-sky-400" },
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