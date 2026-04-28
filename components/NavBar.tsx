import type { InventorySection } from "@/types/inventory";

type NavBarProps = {
  activeSection: InventorySection;
  sections: Array<{ id: InventorySection; label: string }>;
  onSelect: (section: InventorySection) => void;
};

export default function NavBar({
  activeSection,
  sections,
  onSelect,
}: NavBarProps) {
  return (
    <header className="re4-nav rounded-t-2xl border border-stone-950/90 px-2 py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <nav
        aria-label="Portfolio inventory sections"
        className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:justify-start lg:flex-nowrap"
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const words = section.label.split(" ");

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className={`re4-nav-item group relative flex min-h-8 items-center gap-1.5 rounded-sm px-2 py-1 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.12em] transition duration-200 sm:min-h-9 sm:px-3 sm:text-xs ${
                isActive
                  ? "text-amber-50"
                  : "text-stone-100/80 hover:text-amber-50"
              }`}
            >
              <span
                aria-hidden="true"
                className={`re4-nav-stud shrink-0 transition ${
                  isActive
                    ? "scale-110 shadow-[0_0_10px_rgba(245,197,97,0.75)]"
                    : "group-hover:scale-105"
                }`}
              />
              <span className="re4-nav-label flex flex-col text-left drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
                {words.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
