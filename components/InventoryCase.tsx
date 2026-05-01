import type { InventoryTileData } from "@/types/inventory";
import InventoryTile from "@/components/InventoryTile";

type InventoryCaseProps = {
  items: InventoryTileData[];
  sectionLabel: string;
  onInspect: (item: InventoryTileData) => void;
};

export default function InventoryCase({
  items,
  sectionLabel,
  onInspect,
}: InventoryCaseProps) {
  return (
    <section
      aria-labelledby="inventory-heading"
      className="case-shell re4-case-shell rounded-b-2xl border-x border-b border-stone-950/90 p-2 shadow-[inset_0_0_40px_rgba(0,0,0,0.85)] sm:p-4"
    >
      <div className="re4-case-lid" aria-hidden="true" />

      <div className="re4-case-frame">
        <span className="re4-case-corner re4-case-corner-left" aria-hidden="true" />
        <span className="re4-case-corner re4-case-corner-right" aria-hidden="true" />
        <div className="inventory-grid grid auto-rows-[3.55rem] grid-cols-8 gap-px p-1.5 sm:auto-rows-[4.15rem] sm:p-2 lg:grid-cols-10">
          {items.map((item) => (
            <InventoryTile key={item.id} item={item} onInspect={onInspect} />
          ))}
        </div>
      </div>

      <div className="re4-case-rail mt-2 flex items-center justify-between px-4 py-2">
        <h1
          id="inventory-heading"
          className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-stone-200 drop-shadow-[2px_2px_0_rgba(0,0,0,0.85)]"
        >
          {sectionLabel}
        </h1>
        <span className="hidden font-mono text-xs uppercase tracking-[0.24em] text-stone-400 sm:inline">
          Attaché Case
        </span>
      </div>
    </section>
  );
}
