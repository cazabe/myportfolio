import type { InventoryTileData, TileTone } from "@/types/inventory";

type InventoryTileProps = {
  item: InventoryTileData;
  onInspect: (item: InventoryTileData) => void;
};

const toneClasses: Record<TileTone, string> = {
  gold: "from-amber-900/95 via-stone-800 to-yellow-950 text-amber-100 ring-amber-300/35",
  green: "from-lime-950 via-emerald-950 to-stone-900 text-lime-100 ring-lime-300/30",
  steel: "from-slate-800 via-stone-800 to-neutral-950 text-slate-100 ring-slate-300/25",
  red: "from-red-950 via-rose-950 to-stone-950 text-red-100 ring-red-300/35",
  blue: "from-sky-950 via-slate-900 to-stone-950 text-sky-100 ring-sky-300/30",
  purple: "from-violet-950 via-stone-900 to-neutral-950 text-violet-100 ring-violet-300/30",
};

export default function InventoryTile({ item, onInspect }: InventoryTileProps) {
  return (
    <button
      type="button"
      onClick={() => onInspect(item)}
      className={`inventory-tile group relative isolate flex min-h-0 flex-col justify-between overflow-hidden rounded-md border border-black/70 bg-linear-to-br p-2 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_10px_18px_rgba(0,0,0,0.42)] ring-1 transition duration-200 hover:-translate-y-0.5 hover:rotate-[-0.35deg] hover:border-amber-200/80 hover:shadow-[0_0_22px_rgba(245,197,97,0.22),0_12px_20px_rgba(0,0,0,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 sm:p-3 ${toneClasses[item.tone]}`}
      style={{
        gridColumn: `span ${item.colSpan} / span ${item.colSpan}`,
        gridRow: `span ${item.rowSpan} / span ${item.rowSpan}`,
      }}
      aria-label={`Inspect ${item.title}`}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%)] opacity-80" />
      <span className="text-[0.55rem] font-bold uppercase tracking-[0.22em] text-white/45">
        {item.section === "contact" ? "Always Equipped" : item.section}
      </span>
      <span>
        <span className="block text-sm font-black uppercase tracking-wide sm:text-base">
          {item.title}
        </span>
        <span className="mt-0.5 block text-[0.65rem] font-medium text-white/62 sm:text-xs">
          {item.subtitle}
        </span>
      </span>
      <span className="mt-2 inline-flex w-fit items-center rounded-full border border-white/15 bg-black/20 px-2 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-white/55 transition group-hover:border-amber-200/60 group-hover:text-amber-100">
        Examine
      </span>
    </button>
  );
}
