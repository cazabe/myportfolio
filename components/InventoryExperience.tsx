"use client";

import { useMemo, useState } from "react";
import CharacterPanel from "@/components/CharacterPanel";
import InventoryCase from "@/components/InventoryCase";
import ItemModal from "@/components/ItemModal";
import NavBar from "@/components/NavBar";
import { inkRibbon, inventoryItems, sections } from "@/data/inventory";
import type { InventorySection, InventoryTileData } from "@/types/inventory";

export default function InventoryExperience() {
  const [activeSection, setActiveSection] =
    useState<InventorySection>("projects");
  const [inspectedItem, setInspectedItem] = useState<InventoryTileData | null>(
    null,
  );

  const visibleItems = useMemo(
    () => [
      ...inventoryItems.filter((item) => item.section === activeSection),
      inkRibbon,
    ],
    [activeSection],
  );

  const activeLabel =
    sections.find((section) => section.id === activeSection)?.label ??
    "Inventory";

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(146,111,52,0.28),transparent_34%),linear-gradient(135deg,#15110d,#050505_58%,#16120d)] px-4 py-6 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.38em] text-amber-100/55">
              Personal Developer Portfolio
            </p>
            <h1 className="mt-2 text-3xl font-black uppercase tracking-[0.16em] text-stone-50 sm:text-5xl">
              Inventory
            </h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-stone-300">
            Choose a case tab, inspect an item, or use the ink ribbon to send a
            message.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <NavBar
              activeSection={activeSection}
              sections={sections}
              onSelect={setActiveSection}
            />
            <InventoryCase
              items={visibleItems}
              sectionLabel={activeLabel}
              onInspect={setInspectedItem}
            />
          </div>
          <CharacterPanel />
        </div>
      </div>

      <ItemModal item={inspectedItem} onClose={() => setInspectedItem(null)} />
    </main>
  );
}
