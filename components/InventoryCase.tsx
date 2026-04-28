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
      className="case-shell rounded-b-2xl border-x border-b border-stone-700/80 bg-stone-950/90 p-3 shadow-[inset_0_0_40px_rgba(0,0,0,0.85)] sm:p-5"
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2 border-b border-amber-200/20 pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/55">
            Attaché Case
          </p>
          <h1
            id="inventory-heading"
            className="text-2xl font-black uppercase tracking-[0.18em] text-stone-100 sm:text-3xl"
          >
            {sectionLabel}
          </h1>
        </div>
        <p className="rounded border border-stone-600 bg-black/25 px-3 py-1 font-mono text-xs text-amber-100/80">
          1280 x 720
        </p>
      </div>

      <div className="inventory-grid grid auto-rows-[4.6rem] grid-cols-8 gap-1.5 rounded-xl border border-stone-700/90 bg-[linear-gradient(135deg,rgba(68,64,60,0.7),rgba(12,10,9,0.95))] p-2 sm:auto-rows-[5.3rem] lg:grid-cols-10">
        {items.map((item) => (
          <InventoryTile key={item.id} item={item} onInspect={onInspect} />
        ))}
      </div>
    </section>
  );
}
